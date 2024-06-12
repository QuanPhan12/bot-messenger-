module.exports.config = {
  name: "reload",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Mirai Team",
  description: "Khởi Động Lại Bot.",
  commandCategory: "ADMIN",
  cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("『 🌸 』➝ Tiến hành khởi động lại BOT",event.threadID, () =>process.exit(1))