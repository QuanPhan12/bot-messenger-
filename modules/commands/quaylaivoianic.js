module.exports.config = {
  name: "quaylaivoianic",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "procode tài:)))",
  description: "quay lại với nic",
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
a("anh ơi em bảo… !");
setTimeout(() => {a({body: "em nhớ anh" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "em nhớ anh rất nhiều^^" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "em đã kiếm người để thay thế anh" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "nhưng không được em vẫn không quên được anh" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "tuy chúng ta chia tay được khoảng thời gian khá dài" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "nhưng em vẫn không thể quên được hình bóng của anh" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "1 hình bóng anh đã in đậm vào tâm trí của em" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "em rất muốn được quay lại với anh" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "em muốn yêu anh thêm 1 lần nữa" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "em muốn sánh bước bên anh " + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "và bên anh thêm 1 lần nữa…" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "nếu có thể anh quay lại với em 1 lần nữa được không?" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "em biết em đã làm nhiều chuyện có lỗi với anh khiến em buồn anh khóc" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "em xin lỗi và anh xin anh quay lại với em đi" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "em rất nhớ anh và không muốn mất anh thêm lần nào nữa" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "không ngày nào em vui vẻ hay yên ổn khi thiếu bóng anh…" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "em chỉ muốn là em nhớ anh" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "em còn yêu anh nhiều lắm" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "hãy quay lại và tha thứ cho em đi" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "chỉ 1 lần duy nhất thôi" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("em không thể thiếu anh được")} , 90000);
setTimeout(() => {a({body: "em không muốn được xa anh thêm lần nào nữa đâu" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "em hứa em sẽ khônh làm anh buồn và khóc nữa em chỉ muốn có anh bên cạnh anh thôi…" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "anh của em quay lại với em nha..? Em còn yêu anh nhiều lắm" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("quay lại với em nha…")} , 110000);



}