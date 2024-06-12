module.exports.config = {
  name: "tetris",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random video tetris",
  commandCategory: "NO PREFIX",
  usages: "tetris",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Tetris")==0 || (event.body.indexOf("tetris")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
		"https://drive.usercontent.google.com/download?id=1Cea774IXm7_lTzWxxBHrPLhO12yIvVI_&export=download&authuser=0&confirm=t&uuid=818ac2e8-0b8a-47c1-9b0c-3d1f007e36c7&at=APZUnTUrHYzx0A-iB9GvcUxYBE6T:1713325583620",
		"https://drive.usercontent.google.com/download?id=12fPHYPaaf_PuX6ovCv9MqtK9hS8bP5hM&export=download&authuser=0&confirm=t&uuid=7709ced2-0d92-4fd7-948f-983238c0ca7c&at=APZUnTWwg4Qg4TQIwN_BeUdE3SlM:1713325635983",
		"https://cdn.discordapp.com/attachments/1143466118929985606/1228285286384140298/2024-04-12_17-02-33.mp4?ex=662b7cd0&is=661907d0&hm=7fa33174f94616c67547a8534ff2a575adfb0a904b76cd6693a4e85501d792be&"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/tetris.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/tetris.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/tetris.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };