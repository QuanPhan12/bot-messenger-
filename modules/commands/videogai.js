module.exports.config = {
  name: "videogai",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random video gái",
  commandCategory: "NO PREFIX",
  usages: "videogai",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Videogai")==0 || (event.body.indexOf("videogai")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/wLd1v4V.mp4",
      "https://i.imgur.com/BKOzyAW.mp4",
      "https://i.imgur.com/sfQFePx.mp4",
      "https://i.imgur.com/aetuENj.mp4",
      "https://i.imgur.com/pA4Q5Y8.mp4",
      "https://i.imgur.com/r8BXgCf.mp4",
      "https://i.imgur.com/fxopxj2.mp4",
      "https://i.imgur.com/uLh6fQU.mp4",
      "https://i.imgur.com/CrZ965t.mp4",
      "https://i.imgur.com/6AXFTNa.mp4",
      "https://i.imgur.com/GiMyOqj.mp4",
      "https://i.imgur.com/pedwIjP.mp4",
      "https://i.imgur.com/bbapYwW.mp4",
      "https://i.imgur.com/bvcoqdK.mp4",
      "https://i.imgur.com/DIbEGvF.mp4",
      "https://i.imgur.com/oEecB3K.mp4",
      "https://i.imgur.com/pAIYbTH.mp4",
      "https://i.imgur.com/Y7EyvkD.mp4",
      "https://i.imgur.com/389ZSr5.mp4",
      "https://i.imgur.com/7DdjTJ3.mp4",
      "https://i.imgur.com/QYahyOh.mp4",
     "https://i.imgur.com/oxhzd9I.mp4",
     "https://i.imgur.com/P5psIWI.mp4",
     "https://i.imgur.com/8ZRmOAD.mp4",
     "https://i.imgur.com/1ImH1zN.mp4",
     "https://i.imgur.com/InDPKTq.mp4",
     "https://i.imgur.com/Py0yJ3z.mp4",
     "https://i.imgur.com/C1GlCnz.mp4",
     "https://i.imgur.com/wJwiPls.mp4",
     "https://i.imgur.com/FoTP1Di.mp4",
     "https://i.imgur.com/E6Ay49g.mp4",
     "https://i.imgur.com/mjccKrW.mp4",
     "https://i.imgur.com/KGqYUfn.mp4",
     "https://i.imgur.com/94hKdIW.mp4",
     "https://i.imgur.com/oCZkDxJ.mp4",
     "https://i.imgur.com/ILHO2Hb.mp4",
     "https://i.imgur.com/BPXvhPx.mp4",
     "https://i.imgur.com/lILYHPy.mp4",
     "https://i.imgur.com/WxcKfSc.mp4",
     "https://i.imgur.com/ghZIcth.mp4",
     "https://i.imgur.com/lingoJI.mp4",
     "https://i.imgur.com/bpqORQ1.mp4",
     "https://i.imgur.com/JUULZuR.mp4",
     "https://i.imgur.com/8DWlK5B.mp4",
     "https://i.imgur.com/2wdbLa4.mp4",
     "https://i.imgur.com/HI78qt9.mp4",
     "https://i.imgur.com/WrMhL6m.mp4",
     "https://i.imgur.com/Jh9GHkR.mp4",
     "https://i.imgur.com/BOcICDF.mp4",
     "https://i.imgur.com/peNoWDQ.mp4",
     "https://i.imgur.com/USbOn4w.mp4",
     "https://i.imgur.com/z29zLU8.mp4",
     "https://i.imgur.com/Z6tPega.mp4",
     "https://i.imgur.com/RC2g7zS.mp4",
     "https://i.imgur.com/5mOR4uD.mp4",
     "https://i.imgur.com/HckEOHj.mp4",
     "https://i.imgur.com/L9GKWcG.mp4",
     "https://i.imgur.com/TMKMLve.mp4",
     "https://i.imgur.com/oHaasqx.mp4",
     "https://i.imgur.com/qLv4Y1Q.mp4",
     "https://i.imgur.com/gvgjsiI.mp4",
     "https://i.imgur.com/1cibH9v.mp4",
     "https://i.imgur.com/tvApU6K.mp4",
     "https://i.imgur.com/XVVmUEy.mp4",
     "https://i.imgur.com/dPdzfD2.mp4",
     "https://i.imgur.com/5oDM3Ih.mp4",
     "https://i.imgur.com/8AKeZEl.mp4",
     "https://i.imgur.com/o70m5dv.mp4",
     "https://i.imgur.com/ljpEfXy.mp4",
     "https://i.imgur.com/H8K6Vrk.mp4",
     "https://i.imgur.com/NOWQTlB.mp4",
     "https://i.imgur.com/GDkbJC1.mp4",
     "https://i.imgur.com/nw47xP2.mp4",
     "https://i.imgur.com/hXKOiKw.mp4",
     "https://i.imgur.com/tIXtBsS.mp4",
     "https://i.imgur.com/2AZZJlO.mp4",
     "https://i.imgur.com/n1kEOWo.mp4",
     "https://i.imgur.com/Slpq6vu.mp4",
     "https://i.imgur.com/h6pHFz3.mp4",
     "https://i.imgur.com/oG9RtvQ.mp4",
     "https://i.imgur.com/4ocew8z.mp4",
     "https://i.imgur.com/Xv2lb9f.mp4",
     "https://i.imgur.com/hWLYNPX.mp4",
     "https://i.imgur.com/3vUJREz.mp4",
     "https://i.imgur.com/A4Dik1N.mp4",
     "https://i.imgur.com/wep6sg5.mp4"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/videogai.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/videogai.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/videogai.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };