module.exports.config = {
    "name": "setdatauser",
    "version": "1.0",
    "hasPermssion": 2,
    "credits": "DC-Nam",
    "description": "Set dữ liệu mới của các user vào data",
    "commandCategory": "ADMIN",
    "usages": "",
    "cooldowns": 5
};


module.exports.run = async function ({ Users, event, args, api, Threads }) { 
    const permission = ["61552157895988"];
  if (!permission.includes(event.senderID)) return api.sendMessage("『 🌸 』➝ Xin lỗi! Lệnh này chỉ dành cho ADMINBOT", event.threadID, event.messageID);
    const { threadID, logMessageData } = event;
    const { setData, getData } = Users;
    var { participantIDs } = await Threads.getInfo(threadID) || await api.getThreadInfo(threadID);
    for (const id of participantIDs) {
    console.log(`『 🌸 』➝ Đã cập nhật dữ liệu của ID: ${id}`)
    let data = await api.getUserInfo(id);
    data.name
    let userName = data[id].name
    await Users.setData(id, { name: userName, data: {} });
}
    console.log(`『 🌸 』➝ Đã cập nhật data của ${participantIDs.length} người dùng trong nhóm`)
    return api.sendMessage(`『 🌸 』➝ Đã cập nhật data các thành viên trong box`, threadID)
}