module.exports.config = {
  name: "pay",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "NVTIEN",
  description: "Chuyển tiền của bản thân cho ai đó",
  commandCategory: "MONEY",
  usages: "pay @tag coins",
  cooldowns: 5,
};

module.exports.run = async ({ event, api, Currencies, args, Users }) => {
  let { threadID, messageID, senderID } = event;
  const mention = Object.keys(event.mentions)[0];
  if (!mention && event.messageReply) {
    if (isNaN(args[0]) == true) return api.sendMessage(`『 🌸 』➝ Nội dung bạn nhập không phải là 1 con số hợp lệ!`, threadID, messageID);
    const coins = parseInt(args[0]);
    let balance = (await Currencies.getData(senderID)).money;
    const namePay = await Users.getNameUser(event.messageReply.senderID);
    if (coins > balance) return api.sendMessage(`『 🌸 』➝ Số coins bạn muốn chuyển lớn hơn số coins bạn hiện có!`, threadID, messageID);
    return api.sendMessage({ body: '『 🌸 』➝ Đã chuyển cho ' + namePay + ` ${args[0]} coins` }, threadID, async () => {
      await Currencies.increaseMoney(event.messageReply.senderID, coins);
      Currencies.decreaseMoney(senderID, coins)
    }, messageID);
  }
  let name = event.mentions[mention].split(" ").length
  if (!mention || !event.messageReply) return api.sendMessage('『 🌸 』➝ Vui lòng tag hoặc phản hồi tin nhắn của người muốn chuyển coins cho!', threadID, messageID);
  else {
    if (!isNaN(args[0 + name])) {
      const coins = parseInt(args[0 + name]);
      let balance = (await Currencies.getData(senderID)).money;
      if (event.type == "message_reply") { mention[0] = event.messageReply.senderID }
      if (coins <= 0) return api.sendMessage('『 🌸 』➝ Số coins bạn muốn chuyển không hợp lệ', threadID, messageID);
      if (coins > balance) return api.sendMessage('『 🌸 』➝ Số coins bạn muốn chuyển lớn hơn số coins bạn hiện có!', threadID, messageID);
      else {
        return api.sendMessage({ body: '『 🌸 』➝ Đã chuyển cho ' + event.mentions[mention].replace(/@/g, "") + ` ${args[0 + name]} coins` }, threadID, async () => {
          await Currencies.increaseMoney(mention, coins);
          Currencies.decreaseMoney(senderID, coins)
        }, messageID);
      }
    } else return api.sendMessage('『 🌸 』➝ Vui lòng nhập số coins muốn chuyển', threadID, messageID);
  }
}
