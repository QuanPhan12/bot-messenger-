module.exports.config = {
  name: "gura",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh gura",
  commandCategory: "NO PREFIX",
  usages: "gura",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Gura")==0 || (event.body.indexOf("gura")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.pinimg.com/originals/29/35/20/293520cab0bd2335f88a97f4e62f18d1.jpg",
      "https://i.pinimg.com/originals/2e/6e/13/2e6e138e8cb9b4e5ac1450d92aafcde5.jpg",
      "https://i.pinimg.com/originals/04/d9/5b/04d95b76318ed0c23a185bad1ccdbbb4.jpg",
      "https://i.pinimg.com/originals/88/02/69/8802697efe30853bc98925aba9d440e0.jpg",
      "https://i.pinimg.com/originals/eb/8d/4b/eb8d4be0163b754467b48e9a8ecb677c.jpg",
      "https://i.pinimg.com/originals/0d/80/d0/0d80d0a6241cb8fa8bf92639f2416477.jpg",
      "https://i.pinimg.com/originals/db/04/a8/db04a8c82bf24ba2b3ec928aafea946c.jpg",
      "https://i.pinimg.com/originals/19/54/a4/1954a43ac2fbca4e5f70ed0fcd7d5fd5.jpg",
  "https://i.pinimg.com/originals/26/b8/3f/26b83f1491f8dd33d8b6a0676ba26303.jpg",
  "https://i.pinimg.com/originals/d1/13/24/d11324ab82c861731e3a3e9dc69d28a6.jpg",
  "https://i.pinimg.com/originals/ef/a4/22/efa4224665985625e9c8c8daea8295c9.jpg",
  "https://i.pinimg.com/originals/42/93/e8/4293e80be5f6541d2c2d7225bb1a76c6.jpg",
      "https://i.pinimg.com/originals/89/18/6b/89186bf4ede8ce5e8a2b376746cf4ab1.jpg",
      "https://i.pinimg.com/originals/5f/5f/b9/5f5fb9196934112b3952c5bf528a1ee5.jpg",
  "https://i.pinimg.com/originals/43/f1/36/43f1368ffad77ef5275b49f36070cd73.jpg",
  "https://i.pinimg.com/originals/53/63/87/536387c8bfb329c6144986e9af483514.jpg",
      "https://i.pinimg.com/originals/29/35/20/293520cab0bd2335f88a97f4e62f18d1.jpg",
  "https://i.pinimg.com/originals/2e/6e/13/2e6e138e8cb9b4e5ac1450d92aafcde5.jpg",
  "https://i.pinimg.com/originals/04/d9/5b/04d95b76318ed0c23a185bad1ccdbbb4.jpg",
  "https://i.pinimg.com/originals/88/02/69/8802697efe30853bc98925aba9d440e0.jpg",
  "https://i.pinimg.com/originals/eb/8d/4b/eb8d4be0163b754467b48e9a8ecb677c.jpg",
  "https://i.pinimg.com/originals/0d/80/d0/0d80d0a6241cb8fa8bf92639f2416477.jpg",
  "https://i.pinimg.com/originals/db/04/a8/db04a8c82bf24ba2b3ec928aafea946c.jpg",
  "https://i.pinimg.com/originals/19/54/a4/1954a43ac2fbca4e5f70ed0fcd7d5fd5.jpg",
  "https://i.pinimg.com/originals/26/b8/3f/26b83f1491f8dd33d8b6a0676ba26303.jpg",
  "https://i.pinimg.com/originals/d1/13/24/d11324ab82c861731e3a3e9dc69d28a6.jpg",
  "https://i.pinimg.com/originals/ef/a4/22/efa4224665985625e9c8c8daea8295c9.jpg",
  "https://i.pinimg.com/originals/42/93/e8/4293e80be5f6541d2c2d7225bb1a76c6.jpg",
  "https://i.pinimg.com/originals/89/18/6b/89186bf4ede8ce5e8a2b376746cf4ab1.jpg", 
  "https://i.pinimg.com/originals/5f/5f/b9/5f5fb9196934112b3952c5bf528a1ee5.jpg",
  "https://i.pinimg.com/originals/43/f1/36/43f1368ffad77ef5275b49f36070cd73.jpg",
  "https://i.pinimg.com/originals/53/63/87/536387c8bfb329c6144986e9af483514.jpg",
  "https://i.pinimg.com/originals/29/35/20/293520cab0bd2335f88a97f4e62f18d1.jpg",
  "https://i.pinimg.com/originals/2e/6e/13/2e6e138e8cb9b4e5ac1450d92aafcde5.jpg",
  "https://i.pinimg.com/originals/04/d9/5b/04d95b76318ed0c23a185bad1ccdbbb4.jpg",
  "https://i.pinimg.com/originals/88/02/69/8802697efe30853bc98925aba9d440e0.jpg",
  "https://i.pinimg.com/originals/eb/8d/4b/eb8d4be0163b754467b48e9a8ecb677c.jpg",
  "https://i.pinimg.com/originals/0d/80/d0/0d80d0a6241cb8fa8bf92639f2416477.jpg",
  "https://i.pinimg.com/originals/db/04/a8/db04a8c82bf24ba2b3ec928aafea946c.jpg",
  "https://i.pinimg.com/originals/19/54/a4/1954a43ac2fbca4e5f70ed0fcd7d5fd5.jpg",
  "https://i.pinimg.com/originals/26/b8/3f/26b83f1491f8dd33d8b6a0676ba26303.jpg",
  "https://i.pinimg.com/originals/d1/13/24/d11324ab82c861731e3a3e9dc69d28a6.jpg",
  "https://i.pinimg.com/originals/ef/a4/22/efa4224665985625e9c8c8daea8295c9.jpg",
  "https://i.pinimg.com/originals/42/93/e8/4293e80be5f6541d2c2d7225bb1a76c6.jpg",
  "https://i.pinimg.com/originals/89/18/6b/89186bf4ede8ce5e8a2b376746cf4ab1.jpg",
  "https://i.pinimg.com/originals/5f/5f/b9/5f5fb9196934112b3952c5bf528a1ee5.jpg",
  "https://i.pinimg.com/originals/43/f1/36/43f1368ffad77ef5275b49f36070cd73.jpg",
      "https://i.pinimg.com/originals/53/63/87/536387c8bfb329c6144986e9af483514.jpg"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/gura.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/gura.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/gura.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };