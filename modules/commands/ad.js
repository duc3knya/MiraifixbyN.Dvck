module.exports.config = {
	name: "adminduc",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NangDuc chu ai",
	description: "Thông tin về admin",
	commandCategory: "Thông tin về admin",
	cooldowns: 0
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "adminduc.gif")) request("https://media1.giphy.com/media/8lcy5k6iRvybNl1IFX/giphy.gif?cid=790b7611a72b563ba4d09c4705d96af81d87a386a57e3d0d&rid=giphy.gif&ct=g").pipe(fs.createWriteStream(dirMaterial + "adminduc.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
module.exports.run = ({ event, api }) => api.sendMessage(`\n★Thông Tin Admin Bot Này★\nADMIN NAME :Lê Năng Hoàng Đức\ Biệt Danh : Duc3knya \nGiới Thiệu: Nhà anh không có gì ngoài điều kiện , tặng mỗi người 10k fl nếu khen ad đẹp trai\nI Have Something To You\nI Love You\nTính Cách : Cái gì cái chứ trêu gái là nhanh nhất nhé OwO\nChiều cao : 1m? \nLiên hệ:fb nhé :v\nSở Thích: Thích Nghịch gái \nCân nặng:???\nUID FACEBOOK 100022869127293 \n100048991791143 \nName Le Nang Hoang Duc \nLink Facebook : https://www.facebook.com/Mark.Zuckerberg2405\nVài lời tới người dùng BOT: Vui lòng không spam khi sử dụng để tránh die bot. Cảm ơn mọi người đã sử dụng đên con bot của mình.\nLưu ý : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\nCảnh báo : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\nChúc bạn sử dụng vui vẻ <3\n=== Le Nang Hoang Duc ===`, event.threadID, event.messageID);
                attachment: fs.createReadStream(__dirname + 