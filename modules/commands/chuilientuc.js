module.exports.config = {
  name: "chuilientuc",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "NVTIEN",
  description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
  commandCategory: "WAR",
  usages: "chuilientuc @mention",
  cooldowns: 10,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention, tag: name});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("Ngóng tai lên mà nghe ad chửi nè !");
setTimeout(() => {a({body: "Đậu phộng m có nghe ad nói gì k" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "K nghe thì đi cắt bỏ mẹ cái tai đi" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Thấy ad hiền là lên mặt à phải cho ra đảo mới chừa" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "M có biết luật trong box k mà còn dám vi phạm hả" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Tật như cái gì ẻ" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "M k bằng 1 con chó của nhà ad nữa" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "M lo sữa đổi cái tật xấu đó của m đi" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "M k sửa là m coi chừng với ad đó🔪🔪🔪" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "M có nghe ad nói k đó🔪🔪🔪" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "M nghe rồi thì lo mà tìm cách sửa đổi đi" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Còn m chưa nghe thì cứ để ad chửi tiếp cho thông não m" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "M có biết luật của box k mà còn vi phạm hả👊" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "M biết luật box rồi mà vẫm cố vi phạm đúng k hả🔪🔪🔪" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "M có biết ad và quản trị viên đã nhắc m hai lần rồi k hả?" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "M muốn ad ra mặt chửi m thì m mới nghe đúng hum🔪🔪🔪🔪," + "tao mệt rồi chờ tao 1 phút nghĩ ngơi lấy hơi rồi tao chửi mầy tiếp nữa!" + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "M chỉ là 1 tên cặn bã rác rưởi k đáng để ad ra mặt chửi m mà là để t chửi cho thông não m" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "M đã nghe những gì t nói ch nếu nghe rồi thì sửa đổi đi còn k thì cắt lỗ tai nà dụt đi" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Đệt chả lụa m cải nhau với m làm tốn cả mớ thời gian của tao è" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "M mà lần sau còn để tao thấy nữa là coi chừng tao cho lên thiên đàng á" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "M nhớ đó đừng để t thấy cái mặt của mày nữa nhé👊" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a({body: "M nhớ lời tao nói đó cẩn thận với tao á con súc vật" + " " +name, mentions: arraytag})} , 90000);
setTimeout(() => {a({body: "Tao mệt rồi không chửi nữa" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì chửi tiếp nha con súc vật" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại thứ súc vật khuyết tật, thất bại của tạo hoá" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("Gút Bai 🥺")} , 110000);



 }