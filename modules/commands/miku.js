module.exports.config = {
  name: "miku",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh miku",
  commandCategory: "NO PREFIX",
  usages: "miku",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Miku")==0 || (event.body.indexOf("miku")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/8bWhXLz.jpg",    
      "https://i.imgur.com/Xrp1Fq3.jpg",
      "https://i.imgur.com/63GQrWl.jpg",
      "https://i.imgur.com/jBNmrIZ.jpg",
      "https://i.imgur.com/hIyzMHS.jpg",
      "https://i.imgur.com/A9JhMqz.jpg",
      "https://i.imgur.com/qCaFhWT.jpg",
      "https://i.imgur.com/tjydO9M.jpg",
      "https://i.imgur.com/P5VKZhJ.jpg",
      "https://i.imgur.com/xTdQOuc.jpg",
      "https://i.imgur.com/Wde2CJb.jpg",
      "https://i.imgur.com/VOln3yw.jpg",
      "https://i.imgur.com/lNjLHGH.jpg",
      "https://i.imgur.com/JWyhQh1.jpg",
      "https://i.imgur.com/CG8Kgpd.jpg",
      "https://i.imgur.com/ZE9qTtG.jpg",
      "https://i.imgur.com/je9rTyj.jpg",
      "https://i.imgur.com/TLNhDHG.jpg",
      "https://i.imgur.com/5gxdYfA.jpg",
      "https://i.imgur.com/RLU327n.jpg",
      "https://i.imgur.com/9n1RSTp.jpg",
      "https://i.imgur.com/8DGtHYy.jpg",
      "https://i.imgur.com/2aMYD1Q.jpg",
      "https://i.imgur.com/jc6WyYJ.jpg",
      "https://i.imgur.com/2xfTcen.jpg",
      "https://i.imgur.com/KLDLVWN.jpg",
      "https://i.imgur.com/FSBqpZy.jpg",
      "https://i.imgur.com/OQ5AhEo.jpg",
      "https://i.imgur.com/gRUedo5.jpg",
      "https://i.imgur.com/3wUX35O.jpg",
      "https://i.imgur.com/E1vkf6z.jpg",
      "https://i.imgur.com/mLW3ytU.jpg",
      "https://i.imgur.com/HYYvJOD.jpg",
      "https://i.imgur.com/mF0whVb.jpg",
      "https://i.imgur.com/lPTluMr.jpg",
      "https://i.imgur.com/hHTLo9r.jpg",
      "https://i.imgur.com/r65jir9.jpg",
      "https://i.imgur.com/iTX5Jn6.jpg",
      "https://i.imgur.com/p8ntQ9y.jpg",
      "https://i.imgur.com/6v1wQwY.jpg",
      "https://i.imgur.com/61ywMbt.jpg"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/miku.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/miku.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/miku.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };