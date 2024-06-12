module.exports.config = {
  name: "id",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NVTIEN",
  description: "Lấy ID người dùng hoặc ID box.",
  commandCategory: "CÔNG CỤ",
  usePrefix: false,
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args, Users}) {
  if (!args[0]) {
    return api.sendMessage(`『 🌸 』➝ Bạn cần nhập :\n🐼-> !id user(hoặc /id u) : lấy id người dùng\n-----------------------------------------\n🐼-> !id thread(hoặc /id t) : lấy id nhóm\n-----------------------------------------\n🐼-> !id all : lấy tất cả ID trong nhóm`, event.threadID, event.messageID);
  }
  const axios = require('axios');
  if (args[0] === 't' || args[0] === 'thread') {
    // Chạy hàm thứ hai nếu nhập 't' hoặc 'thread'
    api.sendMessage(event.threadID, event.threadID);
  } else if (args[0] === 'u' || args[0] === 'user') {
    // Chạy hàm thứ nhất nếu nhập 'u' hoặc 'user'
    if (event.type === "message_reply") {
      const id = event.messageReply.senderID;
      return api.sendMessage(`${id}`, event.threadID, event.messageID);
    }
    if (!args[1]) {
      return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
    } else {
      if (args[1].indexOf(".com/") !== -1) {
        const res_ID = await api.getUID(args[1]);
        return api.sendMessage(`${res_ID}`, event.threadID, event.messageID);
      } else {
        for (var i = 0; i < Object.keys(event.mentions).length; i++) {
          const userId = Object.keys(event.mentions)[i];
          const userName = await Users.getNameUser(userId);
          api.sendMessage(`${userName} > ${userId}`, event.threadID);
        }
        return;
      }
    }
  } else if (args[0] === 'all') {
    // Lấy tất cả ID thành viên trong nhóm và thêm tên vào danh sách
    const threadInfo = await api.getThreadInfo(event.threadID);
    const memberIDs = threadInfo.participantIDs;

    const memberList = [];
    for (const memberId of memberIDs) {
      const memberName = await Users.getNameUser(memberId);
      memberList.push(`${memberName == "Người dùng facebook" ? "Noname" : memberName} ➩ ${memberId}`);
    }

    return api.sendMessage(`Danh sách tất cả các thành viên trong nhóm :\n\n${memberList.join('\n')}`, event.threadID);
  } else {
    return api.sendMessage(`Sai rồi !! bạn cần nhập :\n/id user(hoặc /id u) : lấy id người dùng\n/id thread(hoặc /id t) : lấy id nhóm\n/id all : lấy tất cả ID trong nhóm`, event.threadID, event.messageID);
  }
}