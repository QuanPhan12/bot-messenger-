module.exports.config = {
  name: "videolienquan",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random video lienquan",
  commandCategory: "NO PREFIX",
  usages: "videolienquan",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Videolienquan")==0 || (event.body.indexOf("videolienquan")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
		"https://i.imgur.com/pxMlPqT.mp4",
		"https://i.imgur.com/QakNlUq.mp4",
		"https://i.imgur.com/jwYS1EX.mp4",
		"https://i.imgur.com/N3xGZZx.mp4",
		"https://i.imgur.com/4XZtbOu.mp4",
		"https://i.imgur.com/XwWAODO.mp4",
		"https://i.imgur.com/NlaXyuN.mp4",
		"https://i.imgur.com/LYpR8St.mp4",
		"https://i.imgur.com/QBsABwn.mp4",
		"https://i.imgur.com/5boOLok.mp4",
		"https://i.imgur.com/d3imtQ3.mp4",
		"https://i.imgur.com/0zev9DY.mp4",
		"https://i.imgur.com/zLCuWJD.mp4",
		"https://i.imgur.com/Lh5fv4W.mp4",
		"https://i.imgur.com/j5THotk.mp4",
		"https://i.imgur.com/EP6S1WQ.mp4",
		"https://i.imgur.com/dD0SSCL.mp4",
		"https://i.imgur.com/pxMlPqT.mp4",
		"https://i.imgur.com/QakNlUq.mp4",
		"https://i.imgur.com/jwYS1EX.mp4",
		"https://i.imgur.com/N3xGZZx.mp4",
		"https://i.imgur.com/4XZtbOu.mp4",
		"https://i.imgur.com/XwWAODO.mp4",
		"https://i.imgur.com/NlaXyuN.mp4"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/videolienquan.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/videolienquan.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/videolienquan.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };