module.exports.config = {
  name: "neko",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh neko",
  commandCategory: "NO PREFIX",
  usages: "neko",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Neko")==0 || (event.body.indexOf("neko")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://media.discordapp.net/attachments/476921568291848205/636890226001707020/f0a11.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682822427046051870/lewd_neko516.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682821483038375936/lewd_neko_317.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682822673189175367/lewd_neko_421.jpg",
      "https://media.discordapp.net/attachments/527959344520888321/757384242815828003/illust_84497650_20200920_163441.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682822814792941627/lewd_neko312.png",
      "https://media.discordapp.net/attachments/476921568291848205/651952860279341059/Konachan.com_-_282330_sample.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682823945505734656/lewd_neko714.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682821417196322846/lewd_neko_144.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682822391335878656/lewd_neko403.jpg",
      "https://media.discordapp.net/attachments/527959344520888321/733294588881797181/81506271_p1_master1200.webp",
      "https://cdn.discordapp.com/attachments/770948564947304448/770987671384096768/49a759b6-30fd-4ea8-9b25-ff5193bf650f.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/661086119039074304/image0.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/636890226001707020/f0a11.jpg",
      "https://media.discordapp.net/attachments/527959344520888321/757989255476674700/illust_84551097_20200922_083829.png",
      "https://media.discordapp.net/attachments/476921568291848205/659332336017735691/image3.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/641315425547976735/SmartSelect_20191104-231047_Reddit.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/675626768077422602/ubhb3xqgdhj31.png",
      "https://media.discordapp.net/attachments/527959344520888321/665227893718384655/image0.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/636890226001707020/f0a11.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682822900247691264/lewd_neko_082.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/627240067521314849/image0.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/669676548118544404/S1Gm8B8rM.png",
      "https://cdn.discordapp.com/attachments/770948564947304448/771017642282713108/1837-vPsJY7oVGn0.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682822612912439300/lewd_neko074.jpg",
      "https://media.discordapp.net/attachments/527959344520888321/662609132519686144/IMG_20200103_114802.jpg",
      "https://media.discordapp.net/attachments/527959344520888321/743566963279921313/illust_69390638_20200813_132920.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682823461541773322/lewd_neko_071.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/637094388606173214/image0-3_01DMRAFSW4N08H4BBJNZ8JC47N.1024x0.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770965808033300480/1791.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/659332369970364417/image3.jpg",
      "https://media.discordapp.net/attachments/527959344520888321/735161641242591255/fe9cf2_7828774.png",
      "https://media.discordapp.net/attachments/476921568291848205/638013278127390720/8a4a15343eaa98bff26d4caf1efc725f.png",
      "https://media.discordapp.net/attachments/476921568291848205/654684802456354826/chocola_and_vanilla_nekopara_drawn_by_sayori__sample-6d110d0affb5471ee99c94b5486ee631.png",
      "https://media.discordapp.net/attachments/476921568291848205/628010238829658122/1568192266334.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682824277900263425/lewd_neko_306.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/633037568619053066/1f24c8e81d03c5d688a3f0ffa56a95cf.jpg",
      "https://media.discordapp.net/attachments/527959344520888321/735161694619304106/sample_6085be3a6ceab7f5d7abd1a482d37c83.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682822814792941627/lewd_neko312.png",
      "https://media.discordapp.net/attachments/527959344520888321/769037603764174868/image0.png",
      "https://media.discordapp.net/attachments/476921568291848205/641315425547976735/SmartSelect_20191104-231047_Reddit.jpg",
      "https://media.discordapp.net/attachments/682820577857241112/682821198807171109/lewd_neko_141.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/628010248178761729/1568192498866.jpg",
      "https://media.discordapp.net/attachments/527959344520888321/679862035999490052/Konachan.com_-_295465_blush_catgirl_cum_game_cg_green_eyes_headband_long_hair_navel_neko_works_nekop.png",
      "https://media.discordapp.net/attachments/476921568291848205/637094388606173214/image0-3_01DMRAFSW4N08H4BBJNZ8JC47N.1024x0.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770966944656523264/1e2e58ae-baa2-4af8-aff7-1d066ac34c42.gif",
      "https://media.discordapp.net/attachments/682820577857241112/682823749581406220/lewd_neko255.jpg",
      "https://media.discordapp.net/attachments/527959344520888321/735161715670384710/sample_c70705c1106979367fdae2c814fc1685.jpg",
      "https://media.discordapp.net/attachments/560547733463891968/656736383053987858/image0.jpg",
      "https://media.discordapp.net/attachments/476921568291848205/659332334629158915/image0.jpg"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/neko.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/neko.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/neko.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };