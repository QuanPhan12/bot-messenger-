module.exports.config = {
  name: "kinhdi",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh kinh dị",
  commandCategory: "NO PREFIX",
  usages: "kinhdi",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Kinhdi")==0 || (event.body.indexOf("kinhdi")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/x6PXJMO.jpg",
      "https://i.imgur.com/OesTe1r.jpg",
      "https://i.imgur.com/gwduJ8I.jpg",
      "https://i.imgur.com/o9ymSbO.jpg",
      "https://i.imgur.com/jZk1Dpz.jpg",
      "https://i.imgur.com/Lexk1ja.jpg",
      "https://i.imgur.com/N4lY35p.jpg",
      "https://i.imgur.com/f45gAPS.jpg",
      "https://i.imgur.com/FgBOBS6.jpg",
      "https://i.imgur.com/jYDWZm7.jpg",
      "https://i.imgur.com/uvwANX7.jpg",
      "https://i.imgur.com/jW3yfgc.jpg",
      "https://i.imgur.com/lCJykyZ.jpg",
      "https://i.imgur.com/OsLJYqk.jpg",
      "https://i.imgur.com/TC6LdQi.jpg",
      "https://i.imgur.com/GYSx3Kr.jpg",
      "https://i.imgur.com/nSUSAiu.jpg",
      "https://i.imgur.com/iyiUP96.jpg",
      "https://i.imgur.com/vMBIJrA.jpg",
      "https://i.imgur.com/oU2SIRm.jpg"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/kinhdi.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/kinhdi.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/kinhdi.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };