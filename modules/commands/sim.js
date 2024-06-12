module.exports.config = {
  name: "sim",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nanika",
  description: "Chat cùng con simsimi dễ thương nhất",
  commandCategory: "AI",
  usages: "[args]",
  cooldowns: 2,
  dependencies: {
    axios: "",
    crypto: "",
    "fs-extra": "",
    path: "",
    "string-similarity": ""
  }
}


function simsimi(a, b, c) {
 const { existsSync, writeFileSync, mkdirSync } = require("fs");
 const log = require(process.cwd() + '/utils/log');
  const { join } = require("path")
  const dir = join(__dirname ,'simsimi');
  const pathData = join(dir,'TrainedData.json');
  global.Nanika.simsimiList = JSON.parse(require('fs').readFileSync(pathData, 'utf8'));
  function random(min, max) {
      const crypto = global.nodemodule['crypto'];
      if (min > max) {
        var temp = min;
        min = max;
        max = temp;
      }
      var bnum = (max - min).toString(16).length / 2;
      if (bnum < 1) bnum = 1;
      return Math.round(parseInt(crypto.randomBytes(bnum).toString('hex'), 16) / Math.pow(16, bnum * 2) * (max - min)) + min;
    };
  const { findBestMatch } = require('string-similarity');
  var questionlist = [];
  for (var n in global.Nanika.simsimiList) {
    questionlist.push(n);
  }
  var nearest = findBestMatch(a.toLocaleLowerCase(), questionlist).bestMatch;
  var minimummatch = (random(80, 85)) / 100;
  setTimeout(()=>log(`\n『 🌸 』➝ Gần nhất: ${nearest.target} | ${(nearest.rating * 100).toFixed(2)}% match | ${(nearest.rating > minimummatch ? "OK" : "Request đến API")} \n『 🌸 』➝ Tối thiểu: ${(minimummatch * 100).toFixed(2)}%`, "[ SIMSIMI ]"), 1000);
  if (nearest.rating > minimummatch) {
    return {
        success: global.Nanika.simsimiList[nearest.target]
    }
  } else {
    const axios = require('axios');
    g = (a) => encodeURIComponent(a);
    try {
      var j = axios.get(`https://api.simsimi.net/v2/?text=${g(a)}&lc=vn`).then((res)=>{
        return res.data;
      })
      return j;
  } catch (p) {
      return "『 🌸 』➝ Không thể trả lời";
      }
  }
}

module.exports.onLoad = async function () {

  undefined == global.Ume && (global.Ume = {}), undefined == global.Ume.simsimi && (global.Ume.simsimi = new Map);

  undefined == global.Nanika && (global.Nanika = {}), undefined == global.Nanika.simsimiList && (global.Nanika.simsimiList = {
    ping: "pong"
  });
  const { existsSync, writeFileSync, mkdirSync } = require("fs")
  const { join } = require("path")
  const dir = join(__dirname ,'simsimi');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const pathData = join(dir,'TrainedData.json');
  if (!existsSync(pathData)) return writeFileSync(pathData, JSON.stringify(global.Nanika.simsimiList, null, 4) , "utf-8"); 
}

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event, g = (senderID) => api.sendMessage(senderID, threadID, messageID);
  if (global.Ume.simsimi.has(threadID)) {
      if (senderID == api.getCurrentUserID() || "" == body || messageID == global.Ume.simsimi.get(threadID)) return;
      var res = await simsimi(body, api, event);
      g(res.success)
  }
}

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event, body = (args) => api.sendMessage(args, threadID, messageID);
  if (0 == args.length) return body("『 🌸 』➝ Bạn chưa nhập tin nhắn");
  switch (args[0]) {
    case "on":
      return global.Ume.simsimi.has(threadID) ? body("『 🌸 』➝ Bật gì tận 2 lần hả em.") : (global.Ume.simsimi.set(threadID, messageID), body("『 🌸 』➝ Bật sim thành công."));
    case "off":
      return global.Ume.simsimi.has(threadID) ? (global.Ume.simsimi.delete(threadID), body("『 🌸 』➝ Tắt sim thành công.")) : body("『 🌸 』➝ Đã tắt sim theo lệnh admin.");
    default:
      let msg = args.join(" ");
      let res = await simsimi(msg, api, event);
      return body(res.success, threadID, senderID);
  }
};

