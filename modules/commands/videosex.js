module.exports.config = {
  name: "videosex",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random video sex",
  commandCategory: "NO PREFIX",
  usages: "videosex",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Videosex")==0 || (event.body.indexOf("videosex")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://imgur.com/WPe60PR.mp4",
      "https://imgur.com/LL15Fne.mp4",
      "https://imgur.com/uo1INg9.mp4",
      "https://imgur.com/CUqeWSG.mp4",
      "https://imgur.com/t6WpLmg.mp4",
      "https://imgur.com/uXOckOO.mp4",
      "https://imgur.com/nIzP8Xa.mp4",
      "https://imgur.com/opOJf7F.mp4",
      "https://imgur.com/xPWZp1X.mp4",
      "https://imgur.com/xKx3aol.mp4",
      "https://imgur.com/JSV4g2q.mp4",
      "https://imgur.com/pYo5HEd.mp4",
      "https://imgur.com/kWdjFrY.mp4",
      "https://imgur.com/NqJiScu.mp4",
      "https://imgur.com/3eQMS5d.mp4",
      "https://imgur.com/mkbdgmW.mp4",
      "https://imgur.com/tgkF6Re.mp4",
      "https://imgur.com/l3xsGYC.mp4",
      "https://imgur.com/hT9ESn1.mp4",
      "https://imgur.com/7inod6w.mp4",
      "https://imgur.com/sXILUYV.mp4",
      "https://imgur.com/1bZoxnH.mp4",
      "https://imgur.com/0ImAaNE.mp4",
      "https://imgur.com/oBPW7b7.mp4",
      "https://imgur.com/8OCDCPW.mp4",
      "https://imgur.com/1HTIX08.mp4",
      "https://imgur.com/LIsX2OE.mp4",
      "https://imgur.com/1kcZDOy.mp4",
      "https://imgur.com/JNoWagP.mp4",
      "https://imgur.com/nKpDgP1.mp4",
      "https://imgur.com/x4QczgX.mp4",
      "https://imgur.com/kYJ4U2l.mp4",
      "https://imgur.com/pD1ZrjT.mp4",
      "https://imgur.com/QWY58gT.mp4",
      "https://imgur.com/pD1ZrjT.mp4",
      "https://imgur.com/aQ5X0AM.mp4",
      "https://imgur.com/5KkCqMK.mp4",
      "https://imgur.com/H4ZrfNZ.mp4",
      "https://imgur.com/b5jNmM5.mp4",
      "https://imgur.com/I3kqMG6.mp4",
      "https://imgur.com/a8a3esF.mp4",
      "https://imgur.com/gRZD0bQ.mp4",
      "https://imgur.com/r9J0OBq.mp4",
      "https://imgur.com/t5DfxRh.mp4",
      "https://imgur.com/H9oxYGq.mp4",
      "https://imgur.com/ufDAp58.mp4",
      "https://imgur.com/9p0YPhN.mp4",
      "https://imgur.com/wCAiNoY.mp4",
      "https://imgur.com/mO2qFtL.mp4",
      "https://imgur.com/iH6qUFH.mp4",
      "https://imgur.com/agZBWIy.mp4",
      "https://imgur.com/JNoWagP.mp4",
      "https://imgur.com/9f5HvpR.mp4",
      "https://imgur.com/2m4YHNN.mp4",
      "https://imgur.com/NswHn4Z.mp4",
      "https://imgur.com/v5hVseY.mp4",
      "https://imgur.com/56c9TSX.mp4",
      "https://imgur.com/H21gjIw.mp4",
      "https://imgur.com/6W02fBw.mp4",
      "https://imgur.com/0NqeVEF.mp4",
      "https://imgur.com/AmUc456.mp4",
      "https://imgur.com/eb3cz3u.mp4",
      "https://imgur.com/LEg3wih.mp4",
      "https://imgur.com/jRj4hpM.mp4",
      "https://imgur.com/TQOIb6N.mp4",
      "https://imgur.com/5tCkWrx.mp4",
      "https://imgur.com/ljDQMDN.mp4",
      "https://imgur.com/097vEkA.mp4",
      "https://imgur.com/E86ZA41.mp4",
      "https://imgur.com/ECyF6JH.mp4",
      "https://imgur.com/QeRFlEN.mp4",
      "https://imgur.com/OHEJFMj.mp4",
      "https://imgur.com/KBl0EU4.mp4",
      "https://imgur.com/i3LZDZm.mp4",
      "https://imgur.com/UnQBZi3.mp4",
      "https://imgur.com/e7oWqnj.mp4",
      "https://imgur.com/Mpiuo15.mp4",
      "https://imgur.com/80kWZqu.mp4",
      "https://imgur.com/1NvTPmP.mp4",
      "https://imgur.com/3RaHRpu.mp4",
      "https://imgur.com/sWXnx3L.mp4",
      "https://imgur.com/9ZkXkZ4.mp4",
      "https://imgur.com/c6tPFzi.mp4",
      "https://imgur.com/6ZCHDOs.mp4",
      "https://imgur.com/p7tv580.mp4",
      "https://imgur.com/28nhSJd.mp4",
      "https://imgur.com/D6hNcIx.mp4",
      "https://imgur.com/F0PQCT5.mp4",
      "https://imgur.com/yxG5Ety.mp4",
      "https://imgur.com/rCABWqY.mp4",
      "https://imgur.com/B8AwGPS.mp4",
      "https://imgur.com/4dJzQmy.mp4",
      "https://imgur.com/Q9nlsBk.mp4",
      "https://imgur.com/A0GwXc4.mp4",
      "https://imgur.com/gon0SBA.mp4",
      "https://imgur.com/1HLwdAr.mp4",
      "https://imgur.com/kJYLHRq.mp4",
      "https://imgur.com/BDAIRwI.mp4",
      "https://imgur.com/MG1PpoA.mp4",
      "https://imgur.com/qHJ2OP2.mp4",
      "https://imgur.com/ieWB5r4.mp4",
      "https://imgur.com/ZcTnD3a.mp4",
      "https://imgur.com/AXEsPWB.mp4",
      "https://imgur.com/H2E3ER2.mp4",
      "https://imgur.com/p3sYPpH.mp4",
      "https://imgur.com/9mOh6Bq.mp4",
      "https://imgur.com/qQRGMip.mp4",
      "https://imgur.com/r6eUeSv.mp4",
      "https://imgur.com/OglHeE2.mp4",
      "https://imgur.com/IooU0zO.mp4",
      "https://imgur.com/QcNp13f.mp4",
      "https://imgur.com/1RuVIrw.mp4",
      "https://imgur.com/3kKEcqF.mp4",
      "https://imgur.com/KTC9xsf.mp4",
      "https://imgur.com/XMvkI1V.mp4",
      "https://imgur.com/mFCKKsg.mp4",
      "https://imgur.com/CEhunmA.mp4",
      "https://imgur.com/OvZIK1o.mp4",
      "https://imgur.com/hOMfjZL.mp4",
      "https://imgur.com/BGdpQNs.mp4",
      "https://imgur.com/BlpcpPB.mp4",
      "https://imgur.com/dHUhu1z.mp4",
      "https://imgur.com/nOn7zoa.mp4",
      "https://imgur.com/Lfh298n.mp4",
      "https://imgur.com/im3MiqN.mp4",
      "https://imgur.com/Er1TB0u.mp4",
      "https://imgur.com/CblDjts.mp4",
      "https://imgur.com/6Lw5jh2.mp4",
      "https://imgur.com/ujyRhOd.mp4",
      "https://imgur.com/DEiqdyG.mp4",
      "https://imgur.com/uqGQTqk.mp4",
      "https://imgur.com/m2aPUUK.mp4",
      "https://imgur.com/ptKQu9P.mp4",
      "https://imgur.com/EvRCH1q.mp4",
      "https://imgur.com/bc3nXzW.mp4",
      "https://imgur.com/7cPmKqh.mp4",
      "https://imgur.com/2ig4UOv.mp4",
      "https://imgur.com/a1sAj2S.mp4",
      "https://imgur.com/isAIc6P.mp4",
      "https://imgur.com/BZl0JSX.mp4",
      "https://imgur.com/z84B7c8.mp4",
      "https://imgur.com/0xfgWJy.mp4",
      "https://imgur.com/bt3o3Zz.mp4",
      "https://imgur.com/alIV2nM.mp4",
      "https://imgur.com/WlywitK.mp4",
      "https://imgur.com/32Yofhx.mp4",
      "https://imgur.com/L9b7bXT.mp4",
      "https://imgur.com/ChD25Qm.mp4",
      "https://imgur.com/6JfDcvy.mp4",
      "https://imgur.com/hEg8GY2.mp4",
      "https://imgur.com/Vq716gE.mp4",
      "https://imgur.com/jMDtRBj.mp4",
      "https://imgur.com/adXI1P9.mp4",
      "https://imgur.com/9RFua1d.mp4",
      "https://imgur.com/Sa5b3aX.mp4",
      "https://imgur.com/c1vWwFt.mp4",
      "https://imgur.com/ssLVD0t.mp4",
      "https://imgur.com/N9KBpSP.mp4",
      "https://imgur.com/IXthfre.mp4",
      "https://imgur.com/rLubckj.mp4",
      "https://imgur.com/xuVcrLX.mp4",
      "https://imgur.com/Vicq2jA.mp4",
      "https://i.imgur.com/0dc1sgt.mp4",
      "https://i.imgur.com/IxuxwUL.mp4",
      "https://i.imgur.com/fTrxYYu.mp4",
      "https://i.imgur.com/0dc1sgt.mp4",
      "https://i.imgur.com/WHuWqkn.mp4",
      "https://i.imgur.com/1nl7tFO.mp4",
      "https://i.imgur.com/H5jpSAO.mp4",
      "https://i.imgur.com/U3y67Dj.mp4",
      "https://i.imgur.com/WHuWqkn.mp4",
      "https://i.imgur.com/j2YT5Jn.mp4",
      "https://i.imgur.com/kJWV8uI.mp4",
      "https://i.imgur.com/Wu6Vq4F.mp4",
      "https://i.imgur.com/hB7EUWd.mp4",
      "https://i.imgur.com/lvLW12l.mp4",
      "https://i.imgur.com/FbPTvNO.mp4",
      "https://i.imgur.com/RDY7yQC.mp4",
      "https://i.imgur.com/MBEikW1.mp4",
      "https://i.imgur.com/fYa6ObQ.mp4",
      "https://i.imgur.com/dUQP0jS.mp4",
      "https://i.imgur.com/ME6kPAR.mp4",
      "https://i.imgur.com/fTrxYYu.mp4",
      "https://i.imgur.com/FbPTvNO.mp4",
      "https://i.imgur.com/yU7srOD.mp4",
      "https://i.imgur.com/1kzUVvL.mp4",
      "https://i.imgur.com/j2YT5Jn.mp4",
      "https://i.imgur.com/IxuxwUL.mp4",
      "https://i.imgur.com/vN4O25E.mp4",
      "https://i.imgur.com/1nl7tFO.mp4",
      "https://i.imgur.com/fTrxYYu.mp4",
      "https://i.imgur.com/WHuWqkn.mp4",
      "https://i.imgur.com/lyBMJ1O.mp4",
      "https://i.imgur.com/HtA95oO.mp4",
      "https://i.imgur.com/IxuxwUL.mp4",
      "https://i.imgur.com/hB7EUWd.mp4",
      "https://i.imgur.com/dUQP0jS.mp4",
      "https://i.imgur.com/ME6kPAR.mp4",
      "https://i.imgur.com/cxPMJ0s.mp4",
      "https://i.imgur.com/fTrxYYu.mp4",
      "https://i.imgur.com/0dc1sgt.mp4",
      "https://i.imgur.com/LZ5Nu8b.mp4",
      "https://i.imgur.com/FbPTvNO.mp4",
      "https://i.imgur.com/prcCJjD.mp4",
      "https://i.imgur.com/kJWV8uI.mp4",
      "https://i.imgur.com/gi4Lmb4.mp4",
      "https://i.imgur.com/WHuWqkn.mp4"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/videosex.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/videosex.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/videosex.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };