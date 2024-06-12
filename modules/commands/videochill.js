module.exports.config = {
  name: "videochill",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random video chill",
  commandCategory: "NO PREFIX",
  usages: "videochill",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Videochill")==0 || (event.body.indexOf("videochill")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/0MIxBjr.mp4", 
      "https://i.imgur.com/4xrJwmv.mp4", 
      "https://i.imgur.com/4eWUjOh.mp4", 
      "https://i.imgur.com/oZBwSi3.mp4", 
      "https://i.imgur.com/OtdEtdj.mp4", 
      "https://i.imgur.com/oYglUJz.mp4", 
      "https://i.imgur.com/47bIbTP.mp4", 
      "https://i.imgur.com/nwScB0k.mp4", 
      "https://i.imgur.com/7j9uCCr.mp4", 
      "https://i.imgur.com/mRygKIj.mp4", 
      "https://i.imgur.com/jJSDKzL.mp4", 
      "https://i.imgur.com/uIqDjXP.mp4", 
      "https://i.imgur.com/IiKHRSE.mp4", 
      "https://i.imgur.com/tcYNXoX.mp4", 
      "https://i.imgur.com/sahL46m.mp4", 
      "https://i.imgur.com/f6tmzWs.mp4", 
      "https://i.imgur.com/CspU4Bd.mp4", 
      "https://i.imgur.com/zOSwxlr.mp4", 
      "https://i.imgur.com/IE2nKre.mp4", 
      "https://i.imgur.com/GyZJlny.mp4", 
      "https://i.imgur.com/zNecEcq.mp4", 
      "https://i.imgur.com/uiwBgvx.mp4", 
      "https://i.imgur.com/EG9lwvx.mp4", 
      "https://i.imgur.com/lfvc5hC.mp4", 
      "https://i.imgur.com/YlxxONH.mp4", 
      "https://i.imgur.com/ULhB5QP.mp4", 
      "https://i.imgur.com/KhadKy3.mp4", 
      "https://i.imgur.com/0lf9kjx.mp4", 
      "https://i.imgur.com/B6UMmPf.mp4", 
      "https://i.imgur.com/2p9SeIv.mp4", 
      "https://i.imgur.com/ZBK3z7j.mp4", 
      "https://i.imgur.com/PFQSaHF.mp4", 
      "https://i.imgur.com/33SQkCa.mp4", 
      "https://i.imgur.com/yywc01G.mp4", 
      "https://i.imgur.com/OJQoVaD.mp4", 
      "https://i.imgur.com/UxIYb1O.mp4", 
      "https://i.imgur.com/PQ07hEa.mp4", 
      "https://i.imgur.com/ayj329b.mp4", 
      "https://i.imgur.com/NmxZ3jo.mp4", 
      "https://i.imgur.com/oNVekiM.mp4", 
      "https://i.imgur.com/QjyU33W.mp4", 
      "https://i.imgur.com/QQKjmip.mp4",
         "https://i.imgur.com/pLHFKmD.mp4",
       "https://i.imgur.com/nf946UF.mp4",
       "https://i.imgur.com/TOTHWmj.mp4",
       "https://i.imgur.com/wGizhkB.mp4",
       "https://i.imgur.com/NdBA0xa.mp4",
       "https://i.imgur.com/7a2qIHP.mp4",
       "https://i.imgur.com/ykRapjY.mp4",
       "https://i.imgur.com/k9U4ga7.mp4",
       "https://i.imgur.com/eTGecWK.mp4",
       "https://i.imgur.com/GqEMZYX.mp4",
       "https://i.imgur.com/wGUeudA.mp4",
       "https://i.imgur.com/eH0gEZ8.mp4",
       "https://i.imgur.com/UjH3XKp.mp4",     "https://i.imgur.com/ohulyJh.mp4",
       "https://i.imgur.com/e9edVJE.mp4",
       "https://i.imgur.com/ccyLSaZ.mp4",
       "https://i.imgur.com/ykK3FOd.mp4",
       "https://i.imgur.com/apjK7Bo.mp4",
       "https://i.imgur.com/DrLBsx2.mp4",
       "https://i.imgur.com/TuSoxC3.mp4",
       "https://i.imgur.com/mLq9Ilr.mp4",
       "https://i.imgur.com/A3gUT0r.mp4",
       "https://i.imgur.com/SJa8glr.mp4",
       "https://i.imgur.com/jRDwQd0.mp4",
       "https://i.imgur.com/wVCJiFC.mp4",
       "https://i.imgur.com/vxxglXy.mp4",
       "https://i.imgur.com/7mq6N0P.mp4",
       "https://i.imgur.com/xTRirSq.mp4",
       "https://i.imgur.com/KDgmB0A.mp4",
       "https://i.imgur.com/4YHjTjk.mp4",
       "https://i.imgur.com/IpAhAfs.mp4"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/videochill.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/videochill.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/videochill.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };