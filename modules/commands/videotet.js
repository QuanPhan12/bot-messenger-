module.exports.config = {
  name: "videotet",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random video tết",
  commandCategory: "NO PREFIX",
  usages: "videotet",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Videotet")==0 || (event.body.indexOf("videotet")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/MnCXlPj.mp4",
      "https://i.imgur.com/6Q591kZ.mp4",
      "https://i.imgur.com/H9IhNtz.mp4",
      "https://i.imgur.com/2rnsX4e.mp4",
      "https://i.imgur.com/i4BkFeS.mp4",
      "https://i.imgur.com/bokSzEk.mp4",
      "https://i.imgur.com/1LjY9nQ.mp4",
      "https://i.imgur.com/SvV21eb.mp4",
      "https://i.imgur.com/ljfblT4.mp4",
      "https://i.imgur.com/7n0TF0d.mp4",
      "https://i.imgur.com/6LwDHav.mp4",
      "https://i.imgur.com/SfIVull.mp4",
      "https://i.imgur.com/uTXipFx.mp4",
      "https://i.imgur.com/HGJiOg9.mp4",
      "https://i.imgur.com/5R2Lbwk.mp4",
      "https://files.catbox.moe/bl8cg6.mp4",
      "https://i.imgur.com/RbhXEJY.mp4",
      "https://i.imgur.com/kHUOg12.mp4",
      "https://i.imgur.com/6czkyqT.mp4",
      "https://i.imgur.com/bB8TLjV.mp4",
      "https://i.imgur.com/jTwJGID.mp4",
      "https://i.imgur.com/oCkTAtV.mp4",
      "https://i.imgur.com/arpR7Z2.mp4",
      "https://i.imgur.com/ZJ3zYsf.mp4",
      "https://i.imgur.com/LtXcJoH.mp4",
      "https://i.imgur.com/Brsx7vE.mp4",
      "https://i.imgur.com/f65gjME.mp4",
      "https://i.imgur.com/A6TxrIk.mp4",
      "https://i.imgur.com/8LUTe3b.mp4",
      "https://i.imgur.com/X1ok4DL.mp4",
      "https://i.imgur.com/zU4FnwD.mp4",
      "https://i.imgur.com/TpRuOU6.mp4",
      "https://i.imgur.com/05HfAYS.mp4",
      "https://i.imgur.com/8LUTe3b.mp4",
      "https://i.imgur.com/oI1Shr6.mp4",
      "https://i.imgur.com/tfDLbV9.mp4",
      "https://i.imgur.com/vfi6DNJ.mp4",
      "https://i.imgur.com/3JMobMl.mp4",
      "https://i.imgur.com/nUsXWl9.mp4",
      "https://i.imgur.com/3uYa8uF.mp4",
      "https://i.imgur.com/GcUnsRJ.mp4",
      "https://i.imgur.com/MxcLQAx.mp4",
      "https://i.imgur.com/05HfAYS.mp4",
      "https://i.imgur.com/BXKarPy.mp4",
      "https://i.imgur.com/Gesp8v8.mp4",
      "https://i.imgur.com/86EuY4D.mp4",
      "https://i.imgur.com/FZHiYCN.mp4",
      "https://i.imgur.com/w4eK65W.mp4",
      "https://i.imgur.com/TpRuOU6.mp4",
      "https://i.imgur.com/31XXfPL.mp4",
      "https://i.imgur.com/4gV0QKb.mp4",
      "https://i.imgur.com/86EuY4D.mp4",
      "https://i.imgur.com/X1ok4DL.mp4",
      "https://i.imgur.com/05HfAYS.mp4",
      "https://i.imgur.com/3uYa8uF.mp4",
      "https://i.imgur.com/3JMobMl.mp4",
      "https://i.imgur.com/w4eK65W.mp4",
      "https://i.imgur.com/WqoXMxt.mp4",
      "https://i.imgur.com/VaURZ7b.mp4",
      "https://i.imgur.com/0SJewkp.mp4",
      "https://i.imgur.com/05HfAYS.mp4",
      "https://i.imgur.com/VaURZ7b.mp4",
      "https://i.imgur.com/15BBG5J.mp4",
      "https://i.imgur.com/9D6nCvC.mp4",
      "https://i.imgur.com/0SJewkp.mp4",
      "https://i.imgur.com/0SJewkp.mp4",
      "https://i.imgur.com/WqoXMxt.mp4",
      "https://i.imgur.com/vfi6DNJ.mp4",
      "https://i.imgur.com/86EuY4D.mp4",
      "https://i.imgur.com/8LUTe3b.mp4",
      "https://i.imgur.com/ChvQOGU.mp4",
      "https://i.imgur.com/15BBG5J.mp4",
      "https://i.imgur.com/67DjlsL.mp4",
      "https://i.imgur.com/67DjlsL.mp4",
      "https://i.imgur.com/3JMobMl.mp4",
      "https://i.imgur.com/31XXfPL.mp4",
      "https://i.imgur.com/0SJewkp.mp4",
      "https://i.imgur.com/tO1OxWu.mp4"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/videotet.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/videotet.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/videotet.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };