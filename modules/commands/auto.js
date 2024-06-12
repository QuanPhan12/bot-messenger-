module.exports.config = {
  name: 'auto',
  version: '10.02',
  hasPermssion: 0,
  credits: 'NVTIEN',
  description: 'Tự động gửi tin nhắn theo giờ đã cài!',
  commandCategory: 'ADMIN',
  usages: '[]',
  cooldowns: 3
};
const nam = [{
  timer: '10:00:00 PM',
  message: ['💮AUTO THÔNG BÁO💮\n━━━━━━━━━━━━━━━\n『 🌸 』➝ Thuê bot(50k/1 tháng)\n『 🌸 』➝ Mua file bot liên hệ Admin\n━━━━━━━━━━━━━━━\n『 🌸 』➝ Facebook Admin: https://www.facebook.com/profile.php?id=61552157895988&mibextid=ZbWKwL']
},
{
  timer: '5:00:00 PM',
  message: ['『 🌸 』➝ Nấu cơm nhớ bật nút nha mọi người!🥰']
},
{
  timer: '8:00:00 PM',
  message: ['『 🌸 』➝ Chúc mọi người buổi chiều zui zẻ!🥰']
},
{
  timer: '2:00:00 PM',
  message: ['『 🌸 』➝ Chúc mọi người buổi sáng zui zẻ!🥰']
},           
    {
  timer: '6:00:00 PM',
  message: ['『 🌸 』➝ Chúc mọi người buổi trưa zui zẻ!🥰']
},           
    {
  timer: '6:15:00 PM',
  message: ['『 🌸 』➝ Chúc mọi người ăn trưa ngon miệng!🥰']
},             
 {
  timer: '6:45:00 PM',
  message: ['『 🌸 』➝ Chúc mọi người buổi trưa ngủ ngon nhé!🥰']
},      
{
  timer: '6:30:00 AM',
  message: ['『 🌸 』➝ Khuya rồi ngủ đi mọi người đừng bấm điện thoại nữa cận mắt đó!🥰']
},
{
  timer: '2:30:00 AM',
  message: ['『 🌸 』➝ Chúc mọi người ăn cơm ngon miệng!🥰']
},
{
  timer: '6:00:00 AM',
  message: ['『 🌸 』➝ Chúc mọi người buổi khuya zui zẻ!🥰'] 
},
{
  timer: '1:40:00 AM',
  message: ['『 🌸 』➝ Chúc mọi người buổi tối zui zẻ!🥰'] 
},
{
  timer: '7:00:00 AM',
  message: ['『 🌸 』➝ Chúc mọi người ngủ ngon!🥰']            
}];
module.exports.onLoad = o => setInterval(() => {
  const r = a => a[Math.floor(Math.random()*a.length)];
  if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};