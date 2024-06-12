module.exports.config = {
  name: "stk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NVTIEN",
  description: "Donate cho admin",
  commandCategory: "ADMIN",
  usages: "stk",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/sZuA494.jpg",
  ];
    var callback = () => api.sendMessage({body:` 🌸 = 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓 = 🌸\n
𝐌𝐢̀𝐧𝐡 𝐜𝐡𝐨 𝐭𝐡𝐮𝐞̂ 𝐛𝐨𝐭 𝐯𝐨̛́𝐢 𝐠𝐢𝐚́ 30K/1tháng những 𝐛𝐚̣𝐧 𝐧𝐚̀𝐨 𝐜𝐨́ 𝐥𝐨̀𝐧𝐠 𝐭𝐨̂́𝐭 𝐭𝐡𝐢̀ 𝐭𝐡𝐢̉𝐧𝐡 𝐭𝐡𝐨𝐚̉𝐧𝐠 𝐛𝐚𝐧𝐤 ít tiền để mình 𝐦𝐮𝐚 𝐦𝐢̀ 𝐠𝐨́𝐢 ăn nhé!\n━━━━━━━━━━━━━━━\n\n 💕» 𝐒𝐓𝐊 MB BANK «💕\n🐼-> TÊN: Nguyễn Văn Tiên\n🐼-> 𝐒𝐓𝐊: 090410122006`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };