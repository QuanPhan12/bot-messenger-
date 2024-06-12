module.exports.config = {
  name: "raiden",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh raiden shotgun",
  commandCategory: "NO PREFIX",
  usages: "raiden",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Raiden")==0 || (event.body.indexOf("raiden")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://imgur.com/tY5vVPq.jpg",
      "https://imgur.com/Nc4uA5v.jpg",
      "https://imgur.com/iXOGHaq.jpg",
      "https://imgur.com/pN5PIfN.jpg",
      "https://imgur.com/OIMrc6i.jpg",
      "https://imgur.com/trglBix.jpg",
      "https://imgur.com/NwzcPkf.jpg",
      "https://imgur.com/VdAESOH.jpg",
      "https://imgur.com/EB0MKf5.jpg",
      "https://imgur.com/w7VosR1.jpg",
      "https://imgur.com/tusgzoT.jpg",
      "https://imgur.com/VC57a7W.jpg",
      "https://imgur.com/JLFp45T.jpg",
      "https://imgur.com/twVHoCU.jpg",
      "https://imgur.com/AyKXYk6.jpg",
      "https://imgur.com/lIs30Ui.jpg",
      "https://imgur.com/waO8BXL.jpg",
      "https://imgur.com/5ZndR7K.jpg",
      "https://imgur.com/cQOxKeS.jpg",
      "https://imgur.com/EVUQur7.jpg",
      "https://imgur.com/MUZx0WS.jpg",
      "https://imgur.com/XlSt8yn.jpg",
      "https://imgur.com/tKmwPKX.jpg",
      "https://imgur.com/usFHJYc.jpg",
      "https://imgur.com/q787uH8.jpg",
      "https://imgur.com/ZLRmuxN.jpg",
      "https://imgur.com/KMQ9mzB.jpg",
      "https://imgur.com/pNCFcAq.jpg",
      "https://imgur.com/02k1Nt7.jpg",
      "https://imgur.com/tgMsntV.jpg",
      "https://imgur.com/qhOno82.jpg",
      "https://imgur.com/fSG0oWn.jpg",
      "https://imgur.com/ci8rtGi.jpg",
      "https://imgur.com/4d8yy2p.jpg",
      "https://imgur.com/ODHoPKP.jpg",
      "https://imgur.com/7Mf5WO8.jpg",
      "https://imgur.com/5nqSHK6.jpg",
      "https://imgur.com/Vm4GZhx.jpg",
      "https://imgur.com/14k1wpw.jpg",
      "https://imgur.com/GBg4Miv.jpg",
      "https://imgur.com/Jlzm72b.jpg",
      "https://imgur.com/lPIpzyh.jpg",
      "https://imgur.com/9k51wuc.jpg",
      "https://imgur.com/NMlN3o5.jpg",
      "https://imgur.com/nBYqmlg.jpg",
      "https://imgur.com/sc4frAB.jpg",
      "https://imgur.com/tDKtry4.jpg",
      "https://imgur.com/ndaAFu5.jpg"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/raiden.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/raiden.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/raiden.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };