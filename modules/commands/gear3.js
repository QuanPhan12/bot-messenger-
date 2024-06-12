const request = require("request");
//const fs = require("fs")
const axios = require("axios")
module.exports.config = {
name: "gear3",
version: "1.0.0",
hasPermssion: 0,
credits: "NVTIEN",
description: "Tag Người Bạn Muốn",
commandCategory: "GIẢI TRÍ",
usages: "Phản hồi hoặc @ ai đó và nhắn như tên lệnh",
cooldowns: 5,
dependencies: {"request": "","fs": "","axios": ""}
};

module.exports.run = async ({api,event,args,client,Users,Threads,Currencies}) => {
const { threadID, messageID, senderID, mentions, type, messageReply } = event;
const axios = require('axios')
const request = require('request')
const fs = require('fs')
var mention = Object.keys(event.mentions)[0];
//var id = event.messageReply.senderID
// var type = args[0]
//let tag = event.mentions[mention].replace("@", "") 
if (type == 'message_reply') {
targetID = messageReply.senderID;
} else if (Object.keys(mentions).length > 0) {
targetID = Object.keys(mentions)[0];
}
const tag = global.data.userName.get(targetID)
//var tag = (await api.getUserInfo(targetID)).name
var link = [
"https://imgur.com/kcqSidn.gif",
];
var callback = () => api.sendMessage({body: `『 🌸 』➝ Bánh răng thứ ba ${tag} 🌪️` , mentions: [{
tag: tag,
id: targetID
}],
attachment: fs.createReadStream(__dirname + "/cache/gear3.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gear3.gif"));
return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gear3.gif")).on("close",() => callback());
};

