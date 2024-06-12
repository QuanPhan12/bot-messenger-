const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "cắn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NVTIEN",
  description: "Cắn người bạn tag",
  commandCategory: "GIẢI TRÍ",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
	"https://i.postimg.cc/k62nKKcQ/4c6aca5f44b08a8a0e71d9e01dc1b52b.gif",
	"https://i.postimg.cc/XZ7NNTBD/anime-cute-bite-p3z4le26bteomqum.gif",
	"https://i.postimg.cc/MMgzDHPh/anime-vampire-bites-leg-bzdyydta0mn4qq01.gif",
	"https://i.postimg.cc/LqC9JNz4/TuLu.gif",
	"https://i.imgur.com/wn6W0Pz.jpeg",
	"https://i.imgur.com/J2DCC1U.jpeg",
	"https://i.imgur.com/POKJ51k.jpeg",
	"https://i.imgur.com/RRYNnaP.jpeg",
	"https://i.imgur.com/KCuZ4jk.jpeg",
	"https://i.imgur.com/bEkr7pq.jpeg",
	"https://i.imgur.com/7MOajer.jpeg",
	"https://i.imgur.com/NfIk2m6.jpeg",
	"https://i.imgur.com/jfRTRFM.jpeg"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` Cắn nè~ 👿`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/spair.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/spair.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/spair.gif")).on("close",() => callback());
  }     