module.exports.config = {
  name: "getlink",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NVTIEN",
  description: "Lấy url download từ video, audio được gửi từ nhóm",
  commandCategory: "TIỆN ÍCH",
  usages: "getLink",
  cooldowns: 5,
  dependencies: {
    "tinyurl": ""
  }
};

module.exports.run = async ({ api, event }) => {
  let { messageReply, threadID } = event;
  if (event.type !== "message_reply") return api.sendMessage("❌ Bạn phải phản hồi một audio, video, ảnh nào đó", event.threadID, event.messageID);
  if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("❌ Bạn phải phản hồi một audio, video, ảnh nào đó", event.threadID, event.messageID);
  else {
            let num = 0
            let msg = `『 🌸 』➝ Có ${messageReply.attachments.length} tệp đính kèm:\n`
          for (var i = 0; i < messageReply.attachments.length; i++) {
        var shortLink = await global.nodemodule["tinyurl"].shorten(messageReply.attachments[i].url);
        num +=1;
        msg += `『 🌸 』➝ ${num}: ${shortLink}\n`;
      }
        api.sendMessage(msg,threadID);
        }
}