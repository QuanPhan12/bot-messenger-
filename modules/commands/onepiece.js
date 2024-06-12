module.exports.config = {
  name: "onepiece",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh onepiece",
  commandCategory: "NO PREFIX",
  usages: "onepiece",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Onepiece")==0 || (event.body.indexOf("onepiece")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/g2k1KQb.mp4",
      "https://i.imgur.com/Ti7rUf4.mp4",   
      "https://i.imgur.com/148Wmvh.mp4", 
      "https://i.imgur.com/QuHmydh.mp4",   
      "https://i.imgur.com/i8Pui2Q.mp4",
      "https://i.imgur.com/YmEuCnF.mp4",
      "https://i.imgur.com/rZhyNFP.mp4",
      "https://i.imgur.com/B43tO8V.mp4",
      "https://i.imgur.com/gN6rJCJ.mp4",
      "https://i.imgur.com/w1Vs660.mp4",
      "https://i.imgur.com/BYnXJDL.mp4",
      "https://i.imgur.com/znnhnbr.mp4",
      "https://i.imgur.com/WncBBsn.mp4"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/onepiece.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/onepiece.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/onepiece.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };