module.exports.config = {
  name: "phongcanh",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh phong cảnh",
  commandCategory: "NO PREFIX",
  usages: "phongcanh",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Phongcanh")==0 || (event.body.indexOf("phongcanh")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/TRCpHXh.jpg",
      "https://i.imgur.com/rEwAVSg.jpg",
      "https://i.imgur.com/E0pMWsS.jpg",
      "https://i.imgur.com/jhnRdDr.jpg",
      "https://i.imgur.com/GZy9auB.jpg",
      "https://i.imgur.com/F5INWU7.jpg",
      "https://i.imgur.com/d883OMs.jpg",
      "https://i.imgur.com/0Uo61jR.jpg",
      "https://i.imgur.com/4d1nWLy.jpg",
      "https://i.imgur.com/YahJ748.jpg",
      "https://i.imgur.com/o3RIqy3.jpg",
      "https://i.imgur.com/Cy8mhEE.jpg",
      "https://i.imgur.com/7whArYD.jpg",
      "https://i.imgur.com/x21HUww.jpg",
      "https://i.imgur.com/1VC9DDM.jpg",
      "https://i.imgur.com/UrZrnJi.jpg",
      "https://i.imgur.com/4lg58UG.jpg",
      "https://i.imgur.com/loiO8rE.jpg",
      "https://i.imgur.com/vGYsXdC.jpg",
      "https://i.imgur.com/TMbeTxK.jpg",
      "https://i.imgur.com/RkHH08M.jpg",
      "https://i.imgur.com/EUHNT8g.jpg",
      "https://i.imgur.com/ADXivFQ.jpg",
      "https://i.imgur.com/Nv8QLRp.jpg",
      "https://i.imgur.com/4XYeNok.jpg",
      "https://i.imgur.com/G01qhu2.jpg"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/phongcanh.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/phongcanh.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/phongcanh.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };