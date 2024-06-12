module.exports.config = {
  name:"trangbi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NVTIEN",
  description: "Xem thông tin các trang bị của Liên Quân Mobile",
  commandCategory: "THÔNG TIN",
  usages: "[tên trang bị]",
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args }) {
  const fs = require('fs');
  const axios = require('axios');
  const request = require('request');
  let { senderID, messageID, threadID } = event;
  if(args[0] == "list"){
    const alime = (await axios.get('https://raw.githubusercontent.com/KhangGia1810/gbanmirai/main/trangbi.json')).data
    var count = alime.allitem.length;
      var data = alime.allitem
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
   }
  if (args.length == 0) return api.sendMessage("『 🌸 』➝ Vui lòng nhập tên trang bị cần xem thông tin!", threadID, messageID);
  if (args.length < 2 || args.length > 4) return api.sendMessage("『 🌸 』➝ Tên trang bị không hợp lệ!", threadID, messageID);
  var search = event.body.slice(event.body.indexOf(" ") + 1).toLowerCase();
  const res = await axios.get("https://raw.githubusercontent.com/KhangGia1810/gbanmirai/main/trangbi.json");
  const allitem = res.data.allitem;
  var check = 0;
  for (let item of allitem) {
    if (item.name == search) {
      check++;
      var link = item.link;
    };
  };
  if (check == 0) return api.sendMessage(`『 🌸 』➝ Không có dữ liệu cho trang bị ${search}!`, threadID, messageID);
  let callback = function () {
    api.sendMessage({
      body: ``,
      attachment: fs.createReadStream(__dirname + `/cache/trangbi.png`)
    }, threadID, () => fs.unlinkSync(__dirname + `/cache/trangbi.png`), messageID);
  };
  request(link).pipe(fs.createWriteStream(__dirname + `/cache/trangbi.png`)).on("close", callback);
}
