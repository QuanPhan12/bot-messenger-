
module.exports.config = {
  name: "mail",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NVTIEN",
  description: "lấy mail ở 10mm thôi",
  commandCategory: "CÔNG CỤ",
  usages: "!mail",
  cooldowns: 2,
  dependencies: {"axios" : ""}
};
module.exports.run = async({api, event, args}) => {
  const axios = require('axios');
  if (args[0] == "new") {
    const res = await axios.get(`https://10minutemail.net/address.api.php?new=1`);
  var user = res.data.mail_get_user;
  var host = res.data.mail_get_host;
  var time = res.data.mail_get_time;
  var stime = res.data.mail_server_time;
  var kmail = res.data.mail_get_key;
  var ltime = res.data.mail_left_time;
  var mid = res.data.mail_list[0].mail_id;
var sub = res.data.mail_list[0].subject;
var date = res.data.mail_list[0].datetime2;
  return api.sendMessage(`✉️ 𝗧𝗲̂𝗻 𝗺𝗮𝗶𝗹: ${user}\n👤 𝗛𝗼𝘀𝘁: ${host}\n💌 𝗠𝗮𝗶𝗹: ${user}@${host} (.)com\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}\n⏱️ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼̛̉ 𝘀𝗲𝘃𝗲𝗿: ${stime}\n🔑 𝗞𝗲𝘆: ${kmail}\n⏳ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶: ${ltime}s\n📧 𝗠𝗮𝗶𝗹 𝗶𝗱: ${mid}\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${sub}\n📆 𝗗𝗮𝘁𝗲: ${date}`, event.threadID, event.messageID)
}
else if (args[0] == "list") {
  const res = await axios.get(`https://tuandz-api-prod-tuandz-5y00iv.mo4.mogenius.io/mail10p/domain`);
  var list = res.data.domain
  return api.sendMessage(`List domain: \n${list}`, event.threadID, event.messageID)
}
else if (args[0] == "more") {
 const res = await axios.get(`https://10minutemail.net/address.api.php?more=1`);
  var user = res.data.mail_get_user;
  var host = res.data.mail_get_host;
  var time = res.data.mail_get_time;
  var stime = res.data.mail_server_time;
  var kmail = res.data.mail_get_key;
  var ltime = res.data.mail_left_time;
  var mid = res.data.mail_list[0].mail_id;
var sub = res.data.mail_list[0].subject;
var date = res.data.mail_list[0].datetime2;
  return api.sendMessage(`✉️ 𝗧𝗲̂𝗻 𝗺𝗮𝗶𝗹: ${user}\n👤 𝗛𝗼𝘀𝘁: ${host}\n💌 𝗠𝗮𝗶𝗹: ${user}@${host} (.)com\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}\n⏱️ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼̛̉ 𝘀𝗲𝘃𝗲𝗿: ${stime}\n🔑 𝗞𝗲𝘆: ${kmail}\n⏳ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶: ${ltime}s\n📧 𝗠𝗮𝗶𝗹 𝗶𝗱: ${mid}\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${sub}\n📆 𝗗𝗮𝘁𝗲: ${date}`, event.threadID, event.messageID)
}
else if (args[0] == "get") {
   var get = await  axios.get(`https://10minutemail.net/address.api.php`)
      var data = get.data
      var mail = data.mail_get_mail,
        id = data.session_id,
        url = data.permalink.url,
        key_mail = data.permalink.key
      let urlMail = url.replace(/\./g,' . ')
      let maill = mail.replace(/\./g,' . ')
      return api.sendMessage(`💌 𝗘𝗺𝗮𝗶𝗹: ${maill}\n📧 𝗜𝗗 𝗠𝗮𝗶𝗹: ${id}\n🌐 𝗨𝗿𝗹 𝗠𝗮𝗶𝗹: ${urlMail}\n🔑 𝗞𝗲𝘆 𝗠𝗮𝗶𝗹: ${key_mail}`, event.threadID, event.messageID)}
else if (args[0] == "check") {
  var get = await  axios.get(`https://10minutemail.net/address.api.php`)
      var data = get.data.mail_list[0]
      var email = get.data.mail_get_mail
      var id = data.mail_id,
        from = data.from,
        subject = data.subject,
        time = data.datetime2
      let formMail = from.replace(/\./g,' . ')
      let maill = email.replace(/\./g,' . ')
      return api.sendMessage(`💌 𝗘𝗺𝗮𝗶𝗹: ${maill}\n📧 𝗜𝗗 𝗠𝗮𝗶𝗹: ${id}\n📨 𝗙𝗿𝗼𝗺: ${formMail}\n🪧 𝗧𝗶𝗲̂𝘂 đ𝗲̂̀: ${subject}\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}`, event.threadID, event.messageID)}
else if (args.join() == "") { 
    return api.sendMessage(`💌===[ 𝐌𝐀𝐈𝐋 𝟏𝟎𝐏 ]===💌\n━━━━━━━━━━━━━━━\n🐼-> !𝗺𝗮𝗶𝗹 𝗻𝗲𝘄 => 𝗧𝗮̣𝗼 𝗺𝗮𝗶𝗹 𝗺𝗼̛́𝗶\n-----------------------------------------
🐼-> !𝗺𝗮𝗶𝗹 𝗰𝗵𝗲𝗰𝗸 => 𝗖𝗵𝗲𝗰𝗸 𝗵𝗼̣̂𝗽 𝘁𝗵𝘂̛ 𝘁𝗼̛́𝗶\n-----------------------------------------
🐼-> !𝗺𝗮𝗶𝗹 𝗴𝗲𝘁 => 𝗟𝗮̂́𝘆 𝗺𝗮𝗶𝗹 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 \n-----------------------------------------
🐼-> !𝗺𝗮𝗶𝗹 𝗹𝗶𝘀𝘁 => 𝗫𝗲𝗺 𝗹𝗶𝘀𝘁 𝗺𝗮𝗶𝗹 \n-----------------------------------------
🐼-> !𝗺𝗮𝗶𝗹 𝗺𝗼𝗿𝗲 => 𝗧𝗵𝗲̂𝗺 𝗺𝗮𝗶𝗹 𝗺𝗼̛́𝗶 
━━━━━━━━━━━━━━━
『 🌸 』➝ 𝐁𝐚̣𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐜𝐥𝐢𝐜𝐤 𝐯𝐚̀𝐨 𝐮𝐫𝐥 𝐦𝐚𝐢𝐥 𝐯𝐚̀ 𝐧𝐡𝐚̣̂𝐩 𝐊𝐞𝐲 𝐌𝐚𝐢𝐥 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐧𝐨̣̂𝐢 𝐝𝐮𝐧𝐠 𝐦𝐚𝐢𝐥.`, event.threadID, event.messageID)} 
    }