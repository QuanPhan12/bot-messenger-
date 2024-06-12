module.exports.config = {
  name: "quaylaivoienic",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "...",
  description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
  commandCategory: "GIẢI TRÍ",
  usages: "quaylaivoienic @mention",
  cooldowns: 10,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn quay lại", event.threadID);
let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention, tag: name});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("Em ơi anh bảo… !");
setTimeout(() => {a({body: "Anh nhớ em" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "anh nhớ em rất nhiều^^" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "anh đã kiếm người để thay thế em" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "nhưng không được anh vẫn không quên được em" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "tuy chúng ta chia tay được khoảng thời gian khá dài" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "nhưng anh vẫn không thể quên được hình bóng của em" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "1 hình bóng em đã in đậm vào tâm trí của anh" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "anh rất muốn được quay lại với em" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "anh muốn yêu em thêm 1 lần nữa" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "anh muốn sánh bước bên em " + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "và bên em thêm 1 lần nữa…" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "nếu có thể em quay lại với anh 1 lần nữa được không?" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "anh biết anh đã làm nhiều chuyện có lỗi với em khiến em buồn em khóc" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "anh xin lỗi và anh xin em quay lại với anh đi" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "anh rất nhớ em và không muốn mất em thêm lần nào nưaz" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "không ngày nào anh vui vẻ hay yên ổn khi thiếu bóng em…" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "anh chỉ muốn là anh nhớ em" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "anh còn yêu em nhiều lắm" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "hãy quay lại và tha thứ cho anh đi" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "chỉ 1 lần duy nhất thôi" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("anh không thể thiếu em được")} , 90000);
setTimeout(() => {a({body: "anh nguyện làm trâu làm ngựa cho em mà" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "anh hứa anh sẽ khônh làm em buồn và khóc nữa anh chỉ muốn có em bên cạnh anh thôi…" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "em bé của anh quay lại với anh nha..? Anh còn yêu bé nhiều lắm" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("quay lại với anh nha…")} , 110000);



}