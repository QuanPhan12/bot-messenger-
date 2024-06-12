const configCmd = {
  name: 'me',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'DC-Nam',
  description: 'Thiết lập thông tin về bạn',
  commandCategory: 'THÔNG TIN',
  usages: '< ...|setup|del|avatar >',
  cooldowns: 3
},
fse = require('fs'),
axios = require('axios'),
pathS = __dirname+'/cache/savedInfo.json',
streamURL = async url => (await axios.get(url, {
  responseType: 'stream'
})).data,
formInfo = {
  info: [
    ['Tên'],
    ['Ngày Sinh']
  ]};

function swapInArray(a, x, y) {
  b = a[x]
  a[x] = a[y]
  a[y] = b;
  return a;
};

function upperFirstLetter(content) {
  return content.split(' ').map(el=> {
    el = el.split('')
    if (!!el[0])el[0] = el[0].toUpperCase()
    return el.join('');
  }).join(' ')
};

function loadCmd() {
  if (!fse.existsSync(pathS)) fse.writeFileSync(pathS, '{"user":{}}');
};

async function runCmd(arg) {
  const {
    senderID: sid,
    threadID: tid,
    type,
    messageReply,
    mentions
  } = arg.event,
  id = type == 'message_reply'?messageReply.senderID: (tags = Object.keys(mentions), tags != 0)?tags[0]: sid,
  prefix = arg.event.args[0][0],
  out = (a, b, c, d) => arg.api.sendMessage(a, b?b: tid, c?c: null, d?d: arg.event.messageID),
  dataInfo = JSON.parse(fse.readFileSync(pathS)),
  first = prefix+configCmd.name;

  if (/^setup/.test(arg.args[0])) {
    if (!dataInfo.user[sid]) {
      dataInfo.user[sid] = formInfo;
      fse.writeFileSync(pathS, JSON.stringify(dataInfo, 0, 4))
    }
    return out(`💮== INFO SETUP ==💮\n━━━━━━━━━━━━━━━\n${dataInfo.user[sid].info.map(($, i)=>`${i+1}.🐼-> ${$[0]}: ${$[1] || 'Chưa Có Dữ Liệu'}`).join('\n-----------------------------------------')}\n━━━━━━━━━━━━━━━\n『 🌸 』➝ ${first} [avatar/avt] {Link Ảnh/Video} (Thêm Avatar)\n『 🌸 』➝ ${first} [del/reset] (Xóa Toàn Bộ Thông Tin)\n『 🌸 』➝ {STT} -> {STT} (Đổi vị trí)\n『 🌸 』➝ {STT} {Tên}: {Nội Dung} (Thêm hoặc sửa Thông Tin)\n『 🌸 』➝ {STT} {Nội Dung} (Sửa Nội Dung Tên)\n『 🌸 』➝ {STT} (Gỡ Thông Tin)`, null, (err, res)=>(res.chooses = 'setup', res.name = configCmd.name, res.author = sid, client.handleReply.push(res)));
  };

  if (!dataInfo.user[id]) return out(sid != id?'[ 𝐈𝐍𝐅𝐎 ] => 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗻𝗮̀𝘆 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘁𝗿𝗼𝗻𝗴 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴': `[ 𝐈𝐍𝐅𝐎 ] => 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻, 𝗱𝘂̀𝗻𝗴 "${prefix}${configCmd.name} setup" 𝘃𝗮̀ 𝘁𝗵𝗲̂𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́`);

  if (/^(avatar|avt)/.test(arg.args[0])) {
    if (!/^https:\/\/[^]+\.(png|jpg|jpge|JPGE|gif|mp4|jpeg)$/.test(arg.args[1])) return out(`[ 𝐈𝐍𝐅𝐎 ] => 𝗖𝗵𝗶̉ 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝗮̉𝗻𝗵 (𝗷𝗽𝗴, 𝗷𝗽𝗴𝗲, 𝗽𝗻𝗴, 𝗴𝗶𝗳,jpeg)`);
    dataInfo.user[sid].avatar = arg.args[1];
    fse.writeFileSync(pathS, JSON.stringify(dataInfo, 0, 4));
    return out(`[ 𝐈𝐍𝐅𝐎 ] => 𝗧𝗵𝗲̂𝗺 𝗮𝘃𝗮𝘁𝗮𝗿 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴`);
  };

  if (/^(del|reset)/.test(arg.args[0])) {
    delete dataInfo.user[sid];
    fse.writeFileSync(pathS, JSON.stringify(dataInfo, 0, 4));
    return out(`[ 𝐈𝐍𝐅𝐎 ] => 𝗫𝗼𝗮́ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻`);
  };

  const msg = {};

  if ((avt = dataInfo.user[sid].avatar), !!avt) msg.attachment = await streamURL(avt);
  msg.body = "💮[𝗜𝗡𝗙𝗢 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞]💮\n━━━━━━━━━━━━━━━\n" +
  dataInfo.user[id].info.map(el => `『 🌸 』➝ ${upperFirstLetter(el[0] || '')}: ${el[1] || 'Chưa có dữ liệu'}`).join('\n-----------------------------------------');
  out(msg);
};

function reply(arg) {
  const {
    senderID: sid,
    threadID: tid,
    body
  } = arg.event,
  _ = arg.handleReply,
  prefix = arg.event.args[0][0],
  out = (a, b, c, d) => arg.api.sendMessage(a, b?b: tid, c?c: null, d?d: arg.event.messageID),
  dataInfo = JSON.parse(fse.readFileSync(pathS))

  if (sid != _.author)return;
  if (/^setup/.test(_.chooses)) {
    var txt = '',
    input = /\n/.test(body)? body.split('\n'): [body];
    for (const el of input) {
      if (/^[0-9] -> [0-9]$/.test(el)) {
        const a = el.split(' -> '),
        x = a[0],
        y = a[1]
        swapInArray(dataInfo.user[sid].info, x-1, y-1);
        txt += `『 🌸 』➝ Di chuyển vị trí "${x}" qua "${y}"`;
      } else if (isNaN(el)) {
        const edit = el.split(/(^[^:]+:)/),
        index = (edit[1] || '').split(' ')[0]-1;
        let nameForm = (edit[1] || '').replace(/^[^ ]+/, '');

        if (/:$/.test(nameForm)) {
          if (!dataInfo.user[sid].info[index]) dataInfo.user[sid].info[index] = [];
          const newI = nameForm.replace(/:$/, '');
          dataInfo.user[sid].info[index][0] = (newI || '').trim();
          const content = (edit[2] || '').trim();
          if (!!content) {
            dataInfo.user[sid].info[index][1] = content;
            txt += `\n『 🌸 』➝ Cập nhật ngoại hình "${newI}" Với Thông Tin "${content}"`;
          } else {
            txt += `\n『 🌸 』➝ Cập nhật ngoại hình "${newI}"`;
          };

        } else {
          const content = el.replace(/^[^ ]+/, '');
          dataInfo.user[sid].info[el.split(' ')[0]-1][1] = (content || '').trim();;
          txt += `\n『 🌸 』➝ Cập nhật thông tin`
        };

      } else if (isFinite(el)) {
        const del = dataInfo.user[sid].info.splice(el-1, 1);
        txt += `\n『 🌸 』➝ Gỡ thông tin "${del[0]}: ${del[1]}"`
      }
    };
    dataInfo.user[sid].info = dataInfo.user[sid].info.filter(el=>!!el);
    fse.writeFileSync(pathS, JSON.stringify(dataInfo, 0, 4))
    out(txt)
  };
};

module.exports = {
  config: configCmd,
  onLoad: loadCmd,
  run: runCmd,
  handleReply: reply
}