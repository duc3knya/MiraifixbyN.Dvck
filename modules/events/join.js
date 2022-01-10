module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.4",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`𝕶𝖊̂́𝖙 𝖓𝖔̂́𝖎 𝖙𝖍𝖆̀𝖓𝖍 𝖈𝖔̂𝖓𝖌!/n
 𝕭𝖔𝖙 𝕺𝖋 𝕿𝖗𝖎𝖓𝖍 𝕷𝖔𝖓𝖌 𝖁𝖚 \n
           》🎀𝕃ư𝕦 ý🎀《 \n
 ①-𝓚𝐡𝐨̂𝐧𝐠 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭 \n
———•———•———•———•——— \n
 ②-𝓚𝐡𝐨̂𝐧𝐠 𝐧𝐡𝐚̣̂𝐧 𝐛𝐨𝐱 𝐝𝐚̃ 𝐜𝐨́ 𝐛𝐨𝐭 𝐤𝐡𝐚́𝐜\n
———•———•———•———•———\n
③-𝐊𝐡ô𝐧𝐠 𝐜𝐡ử𝐢 𝐛𝐨𝐭\n
———•———•———•———•———\n
-𝐍𝐞̂́𝐮 𝐯𝐢 𝐩𝐡𝐚̣𝐦 𝐭𝐡𝐢̀ 𝐬𝐞̃ 𝐛𝐢̣ 𝐛𝐚𝐧 𝐭𝐡𝐚̆̉𝐧𝐠-\n
🌵🌵Đ𝐚̂𝐲 𝐥𝐚̀ 𝐞𝐦 𝐛𝐨𝐭 𝐬𝐢𝐞̂𝐮 𝐜𝐮𝐭𝐞 𝐧𝐞̂𝐧 𝐝𝐮̛̀𝐧𝐠 𝐝𝐨̂́𝐢 𝐱𝐮̛̉  𝐧𝐚̣̆𝐧𝐠 𝐭𝐚𝐲 𝐯𝐨̛́𝐢 𝐞𝐦 𝐚̂́𝐲 𝐧𝐡𝐚 >< 🌵🌵\n
  (づ｡◕‿‿◕｡)づ  ✪✪✪  \n
           》🎀𝕃ư𝕦 ý🎀《\n
 ①-𝓚𝐡𝐨̂𝐧𝐠 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭 \n 
 ———•———•———•———•——— \n ②-𝓚𝐡𝐨̂𝐧𝐠 𝐧𝐡𝐚̣̂𝐧 𝐛𝐨𝐱 𝐝𝐚̃ 𝐜𝐨́ 𝐛𝐨𝐭 𝐤𝐡𝐚́𝐜 \n ———•———•———•———•——— \n ③-𝐊𝐡ô𝐧𝐠 𝐜𝐡ử𝐢 𝐛𝐨𝐭\n
———•———•———•———•———\n -𝐍𝐞̂́𝐮 𝐯𝐢 𝐩𝐡𝐚̣𝐦 𝐭𝐡𝐢̀ 𝐬𝐞̃ 𝐛𝐢̣ 𝐛𝐚𝐧 𝐭𝐡𝐚̆̉𝐧𝐠- \n 🌵🌵Đ𝐚̂𝐲 𝐥𝐚̀ 𝐞𝐦 𝐛𝐨𝐭 𝐬𝐢𝐞̂𝐮 𝐜𝐮𝐭𝐞 𝐧𝐞̂𝐧 𝐝𝐮̛̀𝐧𝐠 𝐝𝐨̂́𝐢 𝐱𝐮̛̉  𝐧𝐚̣̆𝐧𝐠 𝐭𝐚𝐲 𝐯𝐨̛́𝐢 𝐞𝐦 𝐚̂́𝐲 𝐧𝐡𝐚 >< 🌵🌵 \n  (づ｡◕‿‿◕｡)づ  ✪✪✪  
  `, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `0.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "Welcome aboard {name}.\nChào mừng đã đến với {threadName}.\n{type} là thành viên thứ {soThanhVien} của nhóm 🥳" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}