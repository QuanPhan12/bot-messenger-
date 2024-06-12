module.exports.config = {
  name: 'menu',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'NVTIEN',
  description: 'Xem danh sách nhóm lệnh, thông tin lệnh',
  commandCategory: 'HỆ THỐNG',
  usages: '[...name commands|all]',
  cooldowns: 5,
  // seconds
  envConfig: {
      autoUnsend: {
          status: true,
          //
          timeOut: 120 // seconds
      },
      sendAttachments: {
          status: true,
          // bật/tắt gửi kèm tệp
          random: true,
          //tắt random ảnh thì gắn link ảnh bên dưới, bật thì vào home/modules/commands/cache/imagesMenu.json thêm link ảnh
          url: 'https://7eec34b3-0105-4b78-8a84-444ec4b62ec2-00-2j01ut86bl3hp.riker.replit.dev/api/memevn.php'
      }
  }
};
const {
  autoUnsend = this.config.envConfig.autoUnsend,
  sendAttachments = this.config.envConfig.sendAttachments
} = global.config == undefined ? {}: global.config.menu == undefined ? {}: global.config.menu;
const {
  compareTwoStrings,
  findBestMatch
} = require('string-similarity');
const {
  readFileSync,
  writeFileSync,
  existsSync
} = require('fs-extra');
module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/noprefix/`;
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "menu.jpg")) request("https://i.imgur.com/KnxxUUV.png").pipe(fs.createWriteStream(dirMaterial + "menu.jpg"));
                     }
module.exports.run = async function({
  api, event, args, Users
}) {
  const {
      sendMessage: send,
      unsendMessage: un
  } = api;
  const {
      threadID: tid,
      messageID: mid,
      senderID: sid
  } = event;
  const cmds = global.client.commands;
const moment = require("moment-timezone");
const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
const fs = require("fs");
const name = await Users.getNameUser(event.senderID)
let uid = event.senderID;
  if (args.length >= 1) {
      if (typeof cmds.get(args.join(' ')) == 'object') {
          const body = infoCmds(cmds.get(args.join(' ')).config);
          const msg = sendAttachments.status ? {
              body,
              attachment: await images()}: body;
          return send(msg, tid, mid);
      } else {
          if (args[0] == 'all') {
              const data = cmds.values();
              var txt = '💮==「 𝗠𝗘𝗡𝗨 𝗔𝗟𝗟 」==💮\n━━━━━━━━━━━━━━━',
              count = 0;
              for (const cmd of data) txt += `${++count}.🐼-> ${cmd.config.name}: ${cmd.config.description}\n`;
              const msg = sendAttachments.status ? {
                  body: txt,
                  attachment: await images()}: txt;
              send(msg, tid, (a, b) => autoUnsend.status ?setTimeout(v1 => un(v1), 1000*autoUnsend.timeOut, b.messageID): '');
          } else {
              const cmdsValue = cmds.values();
              const arrayCmds= [];
              for (const cmd of cmdsValue) arrayCmds.push(cmd.config.name);
              const similarly = findBestMatch(args.join(' '), arrayCmds);
              if (similarly.bestMatch.rating >= 0.3) return send(`→ Không có lệnh "${args.join(' ')}"\n→ Lệnh gần giống là "${similarly.bestMatch.target}" ?`, tid, mid);
                /*for (const cmd of cmdsValue) if (compareTwoStrings(args.join(' '), cmd.config.name) >= 0.3) return send(`➜ Không có lệnh "${args.join(' ')}"\n➜ Lệnh gần giống là "${cmd.config.name}" ?`, tid, mid);*/
          };
      };
  } else {
      const data = commandsGroup();
      var txt = '💮==「 𝗠𝗘𝗡𝗨 𝗕𝗢𝗧 」==💮\n━━━━━━━━━━━━━━━\n',
      count = 0;
      for (const {
          commandCategory,
          commandsName
      } of data) txt += `${++count}. ${commandCategory} | 𝗧𝗼̂̉𝗻𝗴 𝗰𝗼́ ${commandsName.length} 𝗹𝗲̣̂𝗻𝗵\n`;
      txt += `━━━━━━━━━━━━━━━
🎮 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗼́: ${global.client.commands.size} 𝗹𝗲̣̂𝗻𝗵
👉 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 1 đ𝗲̂́𝗻 ${data.length} đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻
⏰ 𝗧𝗶𝗺𝗲 𝗱𝘂̀𝗻𝗴: ${timeNow}
🍄 𝗱𝘂̀𝗻𝗴 !𝗺𝗲𝗻𝘂 𝗮𝗹𝗹 đ𝗲̂̉ 𝘅𝗲𝗺 𝗮𝗹𝗹 𝗹𝗲̣̂𝗻𝗵 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 😻
🔰 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${name}
🌐 𝗟𝗶𝗻𝗸 𝗽𝗿𝗼𝗳𝗶𝗹𝗲: https://www.facebook.com/profile.php?id=${uid}
━━━━━━━━━━━━━━━
👤 Bot được điều hành bởi Admin: Nguyễn Văn Tiên
🤖 Tên Bot: 🐼 ALICE 🐼
💬 Thả icon 🐼 vào tin nhắn của bot để thu hồi tin nhắn của bot.`;
      send({body: txt, attachment: fs.createReadStream(__dirname + `/noprefix/menu.jpg`)}, tid, (a, b) => {
          global.client.handleReply.push({
              name: this.config.name,
              messageID: b.messageID,
              author: sid,
              'case': 'infoGr',
              data
          });
          if (autoUnsend.status) setTimeout(v1 => un(v1), 1000*autoUnsend.timeOut, b.messageID);
      });
  };
};
module.exports.handleReply = async function({
  handleReply: $,
  api,
  event,
Users
}) {
  const {
      sendMessage: send,
      unsendMessage: un
  } = api;
  const {
      threadID: tid,
      messageID: mid,
      senderID: sid,
      args
  } = event;
const cmds = global.client.commands;
const moment = require("moment-timezone");
const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
const fs = require("fs");
const name = await Users.getNameUser(event.senderID)
let uid = event.senderID;
  if (sid != $.author) {
      const msg = sendAttachments.status ? {
          body: `🌐 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗺𝗼̛́𝗶 𝗮̂́𝗻 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗮 `,
          attachment: await images()}: `🌍 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗺𝗼̛́𝗶 𝗮̂́𝗻 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗮`;
      return send(msg, tid, mid);
  };
  switch ($.case) {
      case 'infoGr': {
          var data = $.data[(+args[0])-1];
          if (data == undefined) {
              const txt = `→ ${args[0]} không nằm trong số thứ tự menu`;
              const msg = sendAttachments.status ? {
                  body: txt,
                  attachment: await images()}: txt;
              return send(msg, tid, mid);
          };
          un($.messageID);
          var txt = '🔰==「 𝗠𝗘𝗡𝗨 𝗠𝗨̣𝗖 」==🔰' + '━━━━━━━━━━━━━━━\n👉 𝗕𝗲̂𝗻 𝗱𝘂̛𝗼̛́𝗶 𝗹𝗮̀ 𝗺𝘂̣𝗰: ' + data.commandCategory + ' 𝗺𝗲𝗻𝘂 𝗯𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 \n\n',
          count = 0;
          for (const name of data.commandsName) txt += `${++count} | ${name}\n`;
          txt += `━━━━━━━━━━━━━━━
🎮 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗼́: ${global.client.commands.size} 𝗹𝗲̣̂𝗻𝗵
👉 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 1 đ𝗲̂́𝗻 ${data.length} đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻
⏰ 𝗧𝗶𝗺𝗲 𝗱𝘂̀𝗻𝗴: ${timeNow}
🔰 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻 `;
          const msg = sendAttachments.status ? {
              body: txt,
              attachment: await images()}: txt;
          send(msg, tid, (a, b) => {
              global.client.handleReply.push({
                  name: this.config.name,
                  messageID: b.messageID,
                  author: sid,
                  'case': 'infoCmds',
                  data: data.commandsName
              });
              if (autoUnsend.status) setTimeout(v1 => un(v1), 1000*autoUnsend.timeOut, b.messageID);
          });
      };
          break;
      case 'infoCmds': {
          var data = global.client.commands.get($.data[(+args[0])-1]);
          if (typeof data != 'object') {
              const txt = `→ ${args[0]} không nằm trong số thứ tự menu`;
              const msg = sendAttachments.status ? {
                  body: txt,
                  attachment: await images()}: txt;
              return send(msg, tid, mid);
          };; const {
              config = {}
          } = data || {};
          un($.messageID);
          const msg = sendAttachments.status ? {
              body: infoCmds(config),
              attachment: await images()}: infoCmds(config);
          send(msg,
              tid,
              mid);
      };
          break;
      default:
          // code
      }
  };
  function commandsGroup() {
      const array = [],
      cmds = global.client.commands.values();
      for (const cmd of cmds) {
          const {
              name,
              commandCategory
          } = cmd.config;
          const find = array.find(i => i.commandCategory == commandCategory)
          !find ? array.push({
              commandCategory,
              commandsName: [name]
          }): find.commandsName.push(name);
      };
      array.sort(sortCompare('commandsName'));
      return array;
  };
  async function images() {
      const data = JSON.parse(readFileSync(__dirname + '/cache/imagesMenu.json'));
      const url = sendAttachments.random ? (data.length == 0 ? sendAttachments.url: data[Math.floor(Math.random()*data.length)]): sendAttachments.url;
      return (await require('axios')({
          url,
          method: 'GET',
          responseType: 'stream',
      })).data;
  };
  function infoCmds(a) {
      return `[🧸] ━━━「 𝗟𝗲̣̂𝗻𝗵 ( ${a.name} ) 」━━━ [🧸]\n\n[📠] 𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻: ${a.version}\n[👑] 𝗤𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻: ${premssionTxt(a.hasPermssion)}\n[👥] 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${a.credits}\n[💌] 𝗠𝗼̂ 𝘁𝗮̉: ${a.description}\n[💮] 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${a.commandCategory}\n[💓] 𝗖𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴: ${a.usages}\n[⏰] 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀: ${a.cooldowns} 𝗴𝗶𝗮̂𝘆\n\n━━━━━━━━━━━━━━━\n[📚]=== 『 𝗠𝗘𝗡𝗨 𝗖𝗔́𝗖𝗛 𝗗𝗨̀𝗡𝗚 』 ===[📚]`;
  };
  function premssionTxt(a) {
      return a == 0 ? 'Thành Viên': a == 1 ? 'Quản Trị Viên Nhóm': a == 2 ? 'Người Điều Hành Bot': 'ADMINBOT';
  };
  function prefix(a) {
      const tidData = global.data.threadData.get(a) || {};
      return tidData.PREFIX || global.config.PREFIX;
  };
  function sortCompare(k) {
      return function(a, b) {
          return (a[k].length > b[k].length ? 1: a[k].length < b[k].length ? -1: 0)*-1;
      };
  };


