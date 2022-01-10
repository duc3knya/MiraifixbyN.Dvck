module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người rời khỏi nhóm",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝐓ự 𝐂ú𝐭" : "𝙗𝙞̣ 𝙙𝙖́ 𝙧𝙖";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `${threadID}.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "𝘾𝙤𝙣 𝙫ợ {name} 𝙙𝙖̃  {type} 𝙠𝙝𝙤̉𝙞 𝙣𝙝𝙤́𝙢 𝙗𝙤̛̉𝙞 𝙢𝙤̣̂𝙩 𝙡𝙞́ 𝙙𝙤 𝙣𝙖̀𝙤 𝙙𝙤́ 𝙢𝙖̀ 𝙘𝙝𝙪́𝙣𝙜 𝙢𝙖̀𝙮 𝙠𝙝𝙤̂𝙣𝙜 𝙩𝙝𝙚̂̉ 𝙗𝙞𝙚̂́𝙩 𝙙𝙪̛𝙤̛̣𝙘.𝙉𝙚̂́𝙪 𝙠𝙝𝙤̂𝙣𝙜 𝙢𝙪𝙤̂́𝙣 𝙗𝙞̣ 𝙙𝙖́ 𝙣𝙝𝙪̛ 𝙣𝙤́ 𝙩𝙝𝙞̀ 𝙝𝙖̃𝙮 𝙩𝙪̛𝙤̛𝙣𝙜 𝙩𝙖́𝙘 𝙙𝙞,𝙣𝙜𝙤𝙖𝙣 𝙩𝙖𝙤 𝙘𝙠𝙤 𝙠𝙚̣𝙤 𝙖̆𝙣𝙦😽👾" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}