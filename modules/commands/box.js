module.exports.config = {
  name: "box",
  version: "2.1.1",
  hasPermssion: 0,
  credits: "không biết, fix lại Tobi",
  description: "Xem thông tin thread/user",
  commandCategory: "BOX",
  usages: "[thread/user]",
  cooldowns: 5,
  dependencies: {
      "axios": "",
      "fs-extra": "",
      "request": ""
  }
};

const totalPath = __dirname + '/cache/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");
const request = require("request");
const axios = require("axios");

module.exports.handleEvent = async ({ api, event, args }) => {
  if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
  let totalChat = JSON.parse(fs.readFileSync(totalPath));
  if (!totalChat[event.threadID]) return;
  if (Date.now() - totalChat[event.threadID].time > (_24hours * 2)) {
      let sl = (await api.getThreadInfo(event.threadID)).messageCount;
      totalChat[event.threadID] = {
          time: Date.now() - _24hours,
          count: sl,
          ytd: sl - totalChat[event.threadID].count
      }
      fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
  }
}

module.exports.run = async function({ api, event, args, Users, Threads }) {
  const { threadID, messageID, senderID, type, mentions, messageReply } = event;
  const moment = require("moment-timezone");
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  if (args.length == 0) {
    return api.sendMessage(`💮=====[ BOX ]=====💮\n━━━━━━━━━━━━━━━\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} qtv [@Tag] -> Thêm người được tag trở thành QTV\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} image [Reply] -> Thay đổi ảnh box\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} name -> Lấy tên nhóm\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} id -> Lấy id box\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} info -> Xem info box\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} namebox -> Thay đổi tên box\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} emoji -> Thay đổi emoji của box\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} user [@tag] -> lấy thông tin người được tag\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} new -> Tạo nhóm với người được tag\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} setnameall -> Đổi tên all thành viên\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} rdcolor -> Đổi màu tin nhắn nhóm\n-----------------------------------------\n『 🌸 』➝ ${global.config.PREFIX}${this.config.name} setname -> Đổi tên thành viên nhóm `, threadID);
  }
 if (args[0] == "setname") {
if (event.type == "message_reply") {
  const name = args.splice(1).join(" ")
  return api.changeNickname(`${name}`, event.threadID, event.messageReply.senderID);
}
else {
  const name = args.splice(1).join(" ")
const mention = Object.keys(event.mentions)[0];
if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
}
}
 if (args[0] == "rdcolor") {
  var color = ['196241301102133', '169463077092846', '2442142322678320', '234137870477637', '980963458735625', '175615189761153', '2136751179887052', '2058653964378557', '2129984390566328', '174636906462322', '1928399724138152', '417639218648241', '930060997172551', '164535220883264', '370940413392601', '205488546921017', '809305022860427'];
  api.changeThreadColor(color[Math.floor(Math.random() * color.length)], event.threadID)
  await new Promise(resolve => setTimeout(resolve, 1000));
}
if (args[0] == "setnameall") {
  var threadInfo = await api.getThreadInfo(event.threadID)
var idtv = threadInfo.participantIDs
console.log(threadInfo)
const name = args.splice(1).join(" ")
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
for (let setname of idtv) {
  await delay(3000)
  api.changeNickname(`${name}`, event.threadID, setname);
}
}
var id = [event.senderID] || [];
var main = event.body;
var groupTitle = main.slice(main.indexOf("|") +2)
if (args[0] == "new") {
 for (var i = 0; i < Object.keys(event.mentions).length; i++) 
id.push(Object.keys(event.mentions)[i]);
api.createNewGroup(id, groupTitle,() => {
  api.sendMessage(`[ 🐼 ALICE 🐼 ] => Đã tạo nhóm ${groupTitle}`, event.threadID)
})
}
 if (args[0] == "id") {
  return api.sendMessage(`${event.threadID}`, event.threadID, event.messageID);
}

if (args[0] == "name") {
  var nameThread = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
  return api.sendMessage(nameThread, event.threadID, event.messageID);
}

if (args[0] == "namebox") {
  var content = args.join(" ");
  var c = content.slice(7, 99) || event.messageReply.body;
  api.setTitle(`${c}`, event.threadID);
}

if (args[0] == "emoji") {
  const name = args[1] || event.messageReply.body;
  api.changeThreadEmoji(name, event.threadID)

}

if (args[0] == "me") {
  if (args[1] == "qtv") {
    const threadInfo = await api.getThreadInfo(event.threadID)
    const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
    if (!find) api.sendMessage("[ 🐼 ALICE 🐼 ] => BOT cần quyền quản trị viên để dùng!", event.threadID, event.messageID)
    else if (!global.config.ADMINBOT.includes(event.senderID)) api.sendMessage("[ 🐼 ALICE 🐼 ] => Xin lỗi! Lệnh này chỉ dành cho quản trị viên", event.threadID, event.messageID)
    else api.changeAdminStatus(event.threadID, event.senderID, true);
  }
}

if (args[0] == "qtv") {
  if (args.join().indexOf('@') !== -1) {
    namee = Object.keys(event.mentions)
  } else namee = args[1]
  if (event.messageReply) {
    namee = event.messageReply.senderID
  }

  const threadInfo = await api.getThreadInfo(event.threadID)
  const findd = threadInfo.adminIDs.find(el => el.id == namee);
  const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
  const finddd = threadInfo.adminIDs.find(el => el.id == event.senderID);

  if (!finddd) return api.sendMessage("[ 🐼 ALICE 🐼 ] => Bạn không phải là quản trị viên box!", event.threadID, event.messageID);
  if (!find) {
    api.sendMessage("[ 🐼 ALICE 🐼 ] => Vui lòng thêm bot làm quản trị viên để dùng!", event.threadID, event.messageID)
  }
  if (!findd) {
    api.changeAdminStatus(event.threadID, namee, true);
  } else api.changeAdminStatus(event.threadID, namee, false)
}

if (args[0] == "image") {
  if (event.type !== "message_reply") return api.sendMessage("[ 🐼 ALICE 🐼 ] => Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
  if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("[ 🐼 ALICE 🐼 ] => Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
  if (event.messageReply.attachments.length > 1) return api.sendMessage(`[ 🐼 ALICE 🐼 ] => Bạn phải reply một audio, video, ảnh nào đó`, event.threadID, event.messageID);
  var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
};
  if (args[0] == "info") {
      try {
          if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
          let totalChat = JSON.parse(fs.readFileSync(totalPath));
          let threadInfo = await api.getThreadInfo(args[1] || threadID); 
          let timeByMS = Date.now();
          var memLength = threadInfo.participantIDs.length;
          let threadMem = threadInfo.participantIDs.length;
          var nameMen = [];
          var gendernam = [];
          var gendernu = [];
          var nope = [];
          for (let z in threadInfo.userInfo) {
              var gioitinhone = threadInfo.userInfo[z].gender;
              var nName = threadInfo.userInfo[z].name;
              if (gioitinhone == "MALE") {
                  gendernam.push(z + gioitinhone)
              } else if (gioitinhone == "FEMALE") {
                gendernu.push(gioitinhone)
              } else {
                  nope.push(nName)
              }
          };
          var { adminIDs } = await api.getThreadInfo(args[1] || threadID);
          var adminName = [];
          for (const arrayAdmin of adminIDs) {
        const name = await Users.getNameUser(arrayAdmin.id)
        adminName.push(name)
          }
          var nam = gendernam.length;
          var nu = gendernu.length;
          let qtv = threadInfo.adminIDs.length;
          let sl = threadInfo.messageCount;
          let u = threadInfo.nicknames;
          let icon = threadInfo.emoji;
          let threadName = threadInfo.threadName;
          let id = threadInfo.threadID;
          let sex = threadInfo.approvalMode;
          var pd = sex == false ? 'tắt' : sex == true ? 'bật' : 'kh';
          if (!totalChat[args[1] || threadID]) {
            totalChat[args[1] || threadID] = {
                  time: timeByMS,
                  count: sl,
                  ytd: 0
              }
            fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
          }
          let mdtt = Math.floor(Math.random() * 101);
          let preCount = totalChat[args[1] || threadID].count || 0;
          let ytd = totalChat[args[1] || threadID].ytd || 0;
          let hnay = (ytd != 0) ? (sl - preCount) : "chưa có thống kê";
          let hqua = (ytd != 0) ? ytd : "chưa có thống kê";
          if (timeByMS - totalChat[args[1] || threadID].time > _24hours) {
              if (timeByMS - totalChat[args[1] || threadID].time > (_24hours * 2)) {
                totalChat[args[1] || threadID].count = sl;
                totalChat[args[1] || threadID].time = timeByMS - _24hours;
                totalChat[args[1] || threadID].ytd = sl - preCount;
                fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
              }
              getHour = Math.ceil((timeByMS - totalChat[args[1] || event.threadID].time - _24hours) / 3600000);
              if (ytd == 0) mdtt = 100;
              else mdtt = ((((hnay) / ((hqua / 24) * getHour))) * 100).toFixed(0);
              mdtt += "%";
          }
          var callback = () =>
              api.sendMessage({
                      body: `⭐️ Box: ${threadName || "không có"}\n🎮 ID: ${id}\n📱 Phê duyệt: ${pd}\n🐰 Emoji: ${icon || "👍"}\n📌 Thông tin: ${threadMem} thành viên\n🧑‍🦰 Số tv nam: ${nam} thành viên\n👩‍🦰 Số tv nữ: ${nu} thành viên\n🕵️‍♂️ QTV: ${adminName.join(', ')}\n💬 Tổng: ${sl} tin nhắn\n📈 Mức tương tác: ${mdtt}\n🌟 Tổng tin nhắn hôm qua: ${hqua}\n🌟 Tổng tin nhắn hôm nay: ${hnay}\n⏰===『${gio}』===⏰`,
                      attachment: fs.createReadStream(__dirname + '/cache/1.png')
                  },
                  threadID,
                  () => fs.unlinkSync(__dirname + '/cache/1.png'),
                  messageID
              );
          return request(encodeURI(`${threadInfo.imageSrc}`))
            .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
              .on('close', () => callback());
      } catch (e) {
          return (
            console.log(e),
            api.sendMessage(`『 🌸 』➝ Không thể lấy thông tin nhóm của bạn!\n${e}`, threadID, messageID)
          )
      }
  }
  if (args[0] == "user") {
      try {
          if (type == "message_reply") {
              uid = messageReply.senderID
          } else if (args.join().indexOf('@') !== -1) {
              var uid = Object.keys(mentions)[0]
          } else {
              var uid = senderID
          }
          let data = await api.getUserInfo(uid),
              { profileUrl, gender, isFriend } = data[uid];
          let name = await Users.getNameUser(uid)
          var callback = () => 
            api.sendMessage({
              body:
                  `💦 Tên: ` + name +
                  `\n🐧 UID: ` + uid +
                  `\n🙆‍♀️ Trạng thái: ` + (isFriend == true ? "đã kết bạn với bot" : isFriend == false ? "chưa kết bạn với bot" : "UNKOWN") +
                  `\n🦋 Giới tính: ` + (gender == 2 ? 'nam' : gender == 1 ? 'nữ' : 'UNKNOWN') +
                  `\n🏝 Profile:\n` + profileUrl,
              attachment: fs.createReadStream(__dirname + "/cache/1.png")
          }, threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), messageID);
          return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
      } catch (e) {
          return (
            console.log(e),
            api.sendMessage(`『 🌸 』➝ Không thể lấy thông tin người dùng!\n${e}`, threadID, messageID)
          )
      }
  }
}
