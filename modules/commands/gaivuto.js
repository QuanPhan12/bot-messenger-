module.exports.config = {
  name: "gaivuto",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh gái vú to",
  commandCategory: "NO PREFIX",
  usages: "gaivuto",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Gaivuto")==0 || (event.body.indexOf("gaivuto")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.postimg.cc/vBgs4QdF/240527720-153472986999489-1827619954791027325-n-1.jpg",
      "https://i.postimg.cc/ZRGh31T9/240527720-153472986999489-1827619954791027325-n-1.jpg",
      "https://i.postimg.cc/wBnrbLnZ/240527720-153472986999489-1827619954791027325-n-10.jpg",
      "https://i.postimg.cc/gJR79rWJ/240527720-153472986999489-1827619954791027325-n-11.jpg",
      "https://i.postimg.cc/fyNrMZzv/240527720-153472986999489-1827619954791027325-n-12.jpg",
      "https://i.postimg.cc/L530X7hF/240527720-153472986999489-1827619954791027325-n-13.jpg",
      "https://i.postimg.cc/fWcPB3Cq/240527720-153472986999489-1827619954791027325-n-15.jpg",
      "https://i.postimg.cc/J4R2g1dr/240527720-153472986999489-1827619954791027325-n-16.jpg",
      "https://i.postimg.cc/hPM5RHH9/240527720-153472986999489-1827619954791027325-n-17.jpg",
      "https://i.postimg.cc/7Z6QHKkj/240527720-153472986999489-1827619954791027325-n-18.jpg",
      "https://i.postimg.cc/nhPSCqVr/240527720-153472986999489-1827619954791027325-n-19.jpg",
      "https://i.postimg.cc/br1fR3Jm/240527720-153472986999489-1827619954791027325-n-2.jpg",
      "https://i.postimg.cc/QN7Dsxbc/240527720-153472986999489-1827619954791027325-n-2.jpg",
      "https://i.postimg.cc/hGQyxhhr/240527720-153472986999489-1827619954791027325-n-20.jpg",
      "https://i.postimg.cc/vBRPvMVd/240527720-153472986999489-1827619954791027325-n-21.jpg",
      "https://i.postimg.cc/cHQF9jRt/240527720-153472986999489-1827619954791027325-n-22.jpg",
      "https://i.postimg.cc/VvmD3RgG/240527720-153472986999489-1827619954791027325-n-23.jpg",
      "https://i.postimg.cc/ZnHVZdDT/240527720-153472986999489-1827619954791027325-n-24.jpg",
      "https://i.postimg.cc/NGkNR3GW/240527720-153472986999489-1827619954791027325-n-25.jpg",
      "https://i.postimg.cc/gkcgsgnr/240527720-153472986999489-1827619954791027325-n-26.jpg",
      "https://i.postimg.cc/SNZDvcMd/240527720-153472986999489-1827619954791027325-n-27.jpg",
      "https://i.postimg.cc/DzG60DYp/240527720-153472986999489-1827619954791027325-n-28.jpg",
      "https://i.postimg.cc/26fwZwsk/240527720-153472986999489-1827619954791027325-n-29.jpg",
      "https://i.postimg.cc/HkY1Q0Ct/240527720-153472986999489-1827619954791027325-n-3.jpg",
      "https://i.postimg.cc/ZKhSqt72/240527720-153472986999489-1827619954791027325-n-3.jpg",
      "https://i.postimg.cc/3RCZCGhg/240527720-153472986999489-1827619954791027325-n-30.jpg",
      "https://i.postimg.cc/zvzFdfD4/240527720-153472986999489-1827619954791027325-n-32.jpg",
      "https://i.postimg.cc/zBRsJ0nq/240527720-153472986999489-1827619954791027325-n-4.jpg",
      "https://i.postimg.cc/6pMJz7Wx/240527720-153472986999489-1827619954791027325-n-4.jpg",
      "https://i.postimg.cc/44VDq2f5/240527720-153472986999489-1827619954791027325-n-5.jpg",
      "https://i.postimg.cc/qMrPTcgd/240527720-153472986999489-1827619954791027325-n-6.jpg",
      "https://i.postimg.cc/RVTjV3nJ/240527720-153472986999489-1827619954791027325-n-7.jpg",
      "https://i.postimg.cc/CxPXkW7F/240527720-153472986999489-1827619954791027325-n-8.jpg",
      "https://i.postimg.cc/251Jw29n/240527720-153472986999489-1827619954791027325-n-9.jpg",
      "https://i.postimg.cc/brmH4jsr/271664070-628557978410321-4654011886055292988-n.jpg",
      "https://i.postimg.cc/T209KnCx/271766549-1311747266003498-4185666639242886354-n.jpg",
      "https://i.postimg.cc/VLNFn5VC/photo-2020-11-20-17-06-20.jpg",
      "https://i.postimg.cc/BQwBgsrw/photo-2020-11-20-17-06-21.jpg",
      "https://i.postimg.cc/0yMdXFx5/photo-2020-11-20-17-06-22.jpg",
      "https://i.postimg.cc/Pq1bTDPB/photo-2020-11-20-17-06-24.jpg",
      "https://i.postimg.cc/26mQ65W3/photo-2020-11-23-23-35-10.jpg",
      "https://i.postimg.cc/GtDd5bMJ/photo-2021-06-30-02-24-45.jpg",
      "https://i.postimg.cc/h4QDj0Sz/photo-2021-06-30-02-24-56.jpg",
      "https://i.postimg.cc/15x9NNtW/photo-2021-06-30-02-25-08.jpg",
      "https://i.postimg.cc/4xssWkpV/photo-2021-06-30-02-25-29.jpg",
      "https://i.postimg.cc/Vkg1TGFT/photo-2021-06-30-02-25-31.jpg"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/gaivuto.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/gaivuto.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/gaivuto.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };