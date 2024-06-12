const fs = require("fs");
const path = require("path");
const axios = require("axios");
const folderPath = __dirname;

module.exports.config = {
  name: "file",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "L.V. Bằng",
  description: "",
  commandCategory: "ADMIN",
  usages: "",
  cooldowns: 0,
};

module.exports.run = async function ({ event, api, args }) {
  const permission = ["61552157895988"];
    if (!permission.includes(event.senderID)) return api.sendMessage( "[DONATE]→ Mbbank: 090410122006. Xin cám ơn ạ!! ❤️",event.threadID, event.messageID);
  if (args[0] === "up") {
    var name = !event.messageReply ? args[2] : args[1];
    var input_link = !event.messageReply ? args[1] : event.messageReply.body;
    if (!fs.existsSync(__dirname + `/${name}.js`)) {
      fs.writeFileSync(__dirname + `/${name}.js`, "", "utf8");
    }
    const code = await getcode(input_link);
    fs.writeFileSync(`${__dirname}/${name}.js`, code, "utf8");
    return api.sendMessage(
      "『 🌸 』➝ Đã lưu code thành công mdl " + name,
      event.threadID
    );
  } else if (args[0] === "search") {
    var folderCM = fs.readdirSync(__dirname);
    var keywork = args[1];
    var body = "";
    let count = 1;
    var filteredArray = folderCM.filter((item) => item.includes(keywork));
    if (filteredArray.length === 0) {
      return api.sendMessage(
        "『 🌸 』➝ Không tìm thấy file giống với keywork",
        event.threadID
      );
    }
    body += "『 🌸 』➝ Những file gần giống với keywork";
    for (const array of filteredArray) {
      var fileOrdir = fs.statSync(__dirname+'//'+array);
      if(fileOrdir.isDirectory() == true) {
        var typef = "[Folder🗂️]";
      }
      else if(fileOrdir.isFile() == true) {
        var typef = "[File📄]";
      }
      body += `\n${count++}.🐼-> ${typef} ${array}`;
    }
    return api.sendMessage(body, event.threadID);
  } else {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error("『 🌸 』➝ Không thể đọc thư mục: ", err);
        return;
      }
      const jsFiles = files.filter(
        (file) => path.extname(file).toLowerCase() === ".js"
      );

      let msg = "『 🌸 』➝ Các file hiện có trong folder commands!\n";
      jsFiles.forEach((file, index) => {
        msg += `\n${index + 1}.🐼-> ${file}`;
      });
      msg += "\n━━━━━━━━━━━━━━━\n『 🌸 』➝ Reply theo stt + del/raw!";

      api.sendMessage(
        msg,
        event.threadID,
        (err, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
          });
        },
        event.messageID
      );
    });
  }
};

module.exports.handleReply = async function ({
  args,
  event,
  api,
  handleReply,
}) {
  const splitBody = event.body.split(" ");
  const input = splitBody[0];
  const type = splitBody[1];
  console.log(splitBody[1]);
  if (!type)
    return api.sendMessage(
      "『 🌸 』➝ Vui lòng nhập type (raw/del)!",
      event.threadID,
      event.messageID
    );

  const { author } = handleReply;

  if (event.senderID !== author)
    return api.sendMessage("『 🌸 』➝ Xin lỗi! Lệnh này chỉ dành cho ADMINBOT", event.threadID, event.messageID);

  fs.readdir(folderPath, async (err, files) => {
    try {
      const jsFiles = files.filter(
        (file) => path.extname(file).toLowerCase() === ".js"
      );
      const selectedFileIndex = parseInt(input, 10);
      if (selectedFileIndex >= 1 && selectedFileIndex <= jsFiles.length) {
        const selectedFileName = jsFiles[selectedFileIndex - 1];
        if (type === "del") {
          fs.unlinkSync(`${__dirname}/${selectedFileName}`);
          api.sendMessage(`『 🌸 』➝ Đã xoá file ${selectedFileName}!`, event.threadID);
        } else if (type == "raw") {
          const data = fs.readFileSync(
            `${__dirname}/${selectedFileName}`,
            "utf8"
          );
          const result = await upcode(data);

          api.sendMessage(result.data.link, event.threadID, event.messageID);
        }
      } else {
        api.sendMessage(
          "『 🌸 』➝ Lựa chọn không hợp lệ.",
          event.threadID,
          event.messageID
        );
      }
    } catch (err) {
      console.log(err);
    }
  });
};

async function upcode(data) {
  const result = await axios.post("https://api.mocky.io/api/mock", {
    status: 200,
    content: data,
    content_type: "application/json",
    charset: "UTF-8",
    secret: "lvbang",
    expiration: "never",
  });
  return result;
}
async function getcode(link) {
  const result = (await axios.get(link)).data;
  return result;
  }