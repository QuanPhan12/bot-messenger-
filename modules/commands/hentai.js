module.exports.config = {
  name: "hentai",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh hentai",
  commandCategory: "NO PREFIX",
  usages: "hentai",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Hentai")==0 || (event.body.indexOf("hentai")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.postimg.cc/02xWht3p/240527720-153472986999489-1827619954791027325-n-1.gif",
      "https://i.postimg.cc/xCX8fy45/240527720-153472986999489-1827619954791027325-n-10.gif",
      "https://i.postimg.cc/3wMKTQHL/240527720-153472986999489-1827619954791027325-n-11.gif",
      "https://i.postimg.cc/661xKxrd/240527720-153472986999489-1827619954791027325-n-12.gif",
      "https://i.postimg.cc/hjy6KVdS/240527720-153472986999489-1827619954791027325-n-13.gif",
      "https://i.postimg.cc/Y0QPYZPS/240527720-153472986999489-1827619954791027325-n-14.gif",
      "https://i.postimg.cc/SK515mFs/240527720-153472986999489-1827619954791027325-n-15.gif",
      "https://i.postimg.cc/zBg2Y48k/240527720-153472986999489-1827619954791027325-n-16.gif",
      "https://i.postimg.cc/133W38yX/240527720-153472986999489-1827619954791027325-n-2.gif",
      "https://i.postimg.cc/zDwpwCB3/240527720-153472986999489-1827619954791027325-n-3.gif",
      "https://i.postimg.cc/Wz9kWbCY/240527720-153472986999489-1827619954791027325-n-4.gif",
      "https://i.postimg.cc/mZVC28k3/240527720-153472986999489-1827619954791027325-n-5.gif",
      "https://i.postimg.cc/SK0ztP14/240527720-153472986999489-1827619954791027325-n-6.gif",
      "https://i.postimg.cc/7ZSLbZXv/240527720-153472986999489-1827619954791027325-n-7.gif",
      "https://i.postimg.cc/yNB8RCrD/240527720-153472986999489-1827619954791027325-n-8.gif",
      "https://i.postimg.cc/0N2r3qGL/240527720-153472986999489-1827619954791027325-n-9.gif"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/hentai.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/hentai.gif"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/hentai.gif")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };