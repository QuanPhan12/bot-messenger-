const axios = require("axios");
module.exports.config = {
    name: "cosplay",
    version: "4.0.0",
    hasPermssion: 0,
    credits: "NVTIEN",
    description: "random ảnh cosplay",
    commandCategory: "NOPREFIX",
    usages: "không cần dấu lệnh",
    cooldowns: 0,
}
module.exports.handleEvent = async ({ event, api,Users }) => {
  const res = await axios.get('https://vanthuan.name.vn/api/cosplay.php');
  const data = res.data.data;
  let download = (await axios.get(data, {
      responseType: "stream"
    })).data;
  var msg = {body: ``, attachment: download}
  if (event.body.toLowerCase() == "cosplay"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api }) => {
return api.sendMessage("",event.threadID)
}