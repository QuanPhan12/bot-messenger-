module.exports.config = {
  name: "onepice",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh onepice",
  commandCategory: "NO PREFIX",
  usages: "onepice",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Onepice")==0 || (event.body.indexOf("onepice")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.pinimg.com/originals/38/c8/6e/38c86eb987d1ab5cbb969507eb4c6589.jpg",
      "https://i.pinimg.com/originals/93/94/74/9394748d58e086d83ab1f55abaaff5c9.jpg",
      "https://i.pinimg.com/originals/03/96/a0/0396a078a999a1b0521bd48e5ff20bc7.jpg",
      "https://i.pinimg.com/originals/6f/66/30/6f66309d4fb6946f515ab8a2c55733c5.jpg",
      "https://i.pinimg.com/originals/d0/25/03/d0250367b40eadc83d497e6c7678aa26.jpg",
      "https://i.pinimg.com/originals/66/a4/2b/66a42b827848bbfb32b3fb0ae9c8a0d2.jpg",
      "https://i.pinimg.com/originals/c3/ef/95/c3ef95cdc128564b7570dfdf591f16b3.jpg",
      "https://i.pinimg.com/originals/99/28/1d/99281d754d82c9f724d671e0a48957da.jpg",
      "https://i.pinimg.com/originals/d1/eb/02/d1eb02e9527c9324ecba43346b644300.jpg",
      "https://i.pinimg.com/originals/36/d9/8c/36d98ce0d72942c5141698eb808cb640.jpg",
      "https://i.pinimg.com/originals/4b/8c/46/4b8c46cac716e97b7590dd622884cbda.jpg",
      "https://i.pinimg.com/originals/5f/29/2e/5f292e055fde3d894eba2ed52691b7dd.jpg",
      "https://i.pinimg.com/originals/0e/63/cc/0e63cceea76da6679fc1c0bec0c8bdbb.jpg",
      "https://i.pinimg.com/originals/23/d4/c6/23d4c6e88a98023533b13bfd97bf1d4f.jpg",
      "https://i.pinimg.com/originals/f5/ae/79/f5ae79e7a568ac8009e9f868e0b96d22.jpg",
      "https://i.pinimg.com/originals/a8/11/76/a811762da1cca053388bf6f54164eb13.jpg",
      "https://i.pinimg.com/originals/8c/fa/55/8cfa558be23be8d719140ce4e1d4ffbf.jpg",
      "https://i.pinimg.com/originals/f1/fa/36/f1fa36fdb425f1490843112907c3323c.jpg",
      "https://i.pinimg.com/originals/dd/5b/60/dd5b6017eea55d7447422ee0206f4a87.jpg",
      "https://i.pinimg.com/originals/e3/16/05/e316056ac2919bce46b96a0f915b039a.jpg",
      "https://i.pinimg.com/originals/4f/23/0e/4f230e9e58936752d0e631d1ba115bfe.jpg",
      "https://i.pinimg.com/originals/69/0d/63/690d63af83216e6844dae933dbe88eb3.jpg",
      "https://i.pinimg.com/originals/b8/f7/60/b8f7600be81a038736b46fcc78121094.jpg",
      "https://i.pinimg.com/originals/ba/5a/67/ba5a673a10a9ac0ab549467c0c8b469c.jpg",
      "https://i.pinimg.com/originals/4f/23/0e/4f230e9e58936752d0e631d1ba115bfe.jpg",
      "https://i.pinimg.com/originals/69/0d/63/690d63af83216e6844dae933dbe88eb3.jpg",
      "https://i.pinimg.com/originals/b8/f7/60/b8f7600be81a038736b46fcc78121094.jpg",
      "https://i.pinimg.com/originals/ba/5a/67/ba5a673a10a9ac0ab549467c0c8b469c.jpg",
      "https://i.pinimg.com/originals/38/c8/6e/38c86eb987d1ab5cbb969507eb4c6589.jpg",
      "https://i.pinimg.com/originals/93/94/74/9394748d58e086d83ab1f55abaaff5c9.jpg",
      "https://i.pinimg.com/originals/03/96/a0/0396a078a999a1b0521bd48e5ff20bc7.jpg",
      "https://i.pinimg.com/originals/6f/66/30/6f66309d4fb6946f515ab8a2c55733c5.jpg",
      "https://i.pinimg.com/originals/d0/25/03/d0250367b40eadc83d497e6c7678aa26.jpg",
      "https://i.pinimg.com/originals/66/a4/2b/66a42b827848bbfb32b3fb0ae9c8a0d2.jpg",
      "https://i.pinimg.com/originals/c3/ef/95/c3ef95cdc128564b7570dfdf591f16b3.jpg",
      "https://i.pinimg.com/originals/99/28/1d/99281d754d82c9f724d671e0a48957da.jpg",
      "https://i.pinimg.com/originals/d1/eb/02/d1eb02e9527c9324ecba43346b644300.jpg",
      "https://i.pinimg.com/originals/36/d9/8c/36d98ce0d72942c5141698eb808cb640.jpg",
      "https://i.pinimg.com/originals/4b/8c/46/4b8c46cac716e97b7590dd622884cbda.jpg",
      "https://i.pinimg.com/originals/5f/29/2e/5f292e055fde3d894eba2ed52691b7dd.jpg",
      "https://i.pinimg.com/originals/0e/63/cc/0e63cceea76da6679fc1c0bec0c8bdbb.jpg",
      "https://i.pinimg.com/originals/23/d4/c6/23d4c6e88a98023533b13bfd97bf1d4f.jpg",
      "https://i.pinimg.com/originals/cf/9c/88/cf9c88ddab67d83d85f6cff1e92dc378.jpg",
      "https://i.pinimg.com/originals/f5/ae/79/f5ae79e7a568ac8009e9f868e0b96d22.jpg",
      "https://i.pinimg.com/originals/a8/11/76/a811762da1cca053388bf6f54164eb13.jpg",
      "https://i.pinimg.com/originals/8c/fa/55/8cfa558be23be8d719140ce4e1d4ffbf.jpg",
      "https://i.pinimg.com/originals/f1/fa/36/f1fa36fdb425f1490843112907c3323c.jpg",
      "https://i.pinimg.com/originals/3a/b5/64/3ab5646e86c6a2935919cca4c4ca220c.jpg",
      "https://i.pinimg.com/originals/dd/5b/60/dd5b6017eea55d7447422ee0206f4a87.jpg",
      "https://i.pinimg.com/originals/e3/16/05/e316056ac2919bce46b96a0f915b039a.jpg",
      "https://i.pinimg.com/originals/4f/23/0e/4f230e9e58936752d0e631d1ba115bfe.jpg",
      "https://i.pinimg.com/originals/69/0d/63/690d63af83216e6844dae933dbe88eb3.jpg",
      "https://i.pinimg.com/originals/b8/f7/60/b8f7600be81a038736b46fcc78121094.jpg",
      "https://i.pinimg.com/originals/ba/5a/67/ba5a673a10a9ac0ab549467c0c8b469c.jpg",
      "https://i.pinimg.com/originals/38/c8/6e/38c86eb987d1ab5cbb969507eb4c6589.jpg",
      "https://i.pinimg.com/originals/93/94/74/9394748d58e086d83ab1f55abaaff5c9.jpg",
      "https://i.pinimg.com/originals/03/96/a0/0396a078a999a1b0521bd48e5ff20bc7.jpg",
      "https://i.pinimg.com/originals/6f/66/30/6f66309d4fb6946f515ab8a2c55733c5.jpg",
      "https://i.pinimg.com/originals/d0/25/03/d0250367b40eadc83d497e6c7678aa26.jpg",
      "https://i.pinimg.com/originals/66/a4/2b/66a42b827848bbfb32b3fb0ae9c8a0d2.jpg",
      "https://i.pinimg.com/originals/c3/ef/95/c3ef95cdc128564b7570dfdf591f16b3.jpg",
      "https://i.pinimg.com/originals/99/28/1d/99281d754d82c9f724d671e0a48957da.jpg",
      "https://i.pinimg.com/originals/d1/eb/02/d1eb02e9527c9324ecba43346b644300.jpg",
      "https://i.pinimg.com/originals/36/d9/8c/36d98ce0d72942c5141698eb808cb640.jpg",
      "https://i.pinimg.com/originals/4b/8c/46/4b8c46cac716e97b7590dd622884cbda.jpg",
      "https://i.pinimg.com/originals/5f/29/2e/5f292e055fde3d894eba2ed52691b7dd.jpg",
      "https://i.pinimg.com/originals/0e/63/cc/0e63cceea76da6679fc1c0bec0c8bdbb.jpg",
      "https://i.pinimg.com/originals/23/d4/c6/23d4c6e88a98023533b13bfd97bf1d4f.jpg", 
      "https://i.pinimg.com/originals/cf/9c/88/cf9c88ddab67d83d85f6cff1e92dc378.jpg",
      "https://i.pinimg.com/originals/f5/ae/79/f5ae79e7a568ac8009e9f868e0b96d22.jpg",
      "https://i.pinimg.com/originals/a8/11/76/a811762da1cca053388bf6f54164eb13.jpg",
      "https://i.pinimg.com/originals/8c/fa/55/8cfa558be23be8d719140ce4e1d4ffbf.jpg",
      "https://i.pinimg.com/originals/f1/fa/36/f1fa36fdb425f1490843112907c3323c.jpg",
      "https://i.pinimg.com/originals/3a/b5/64/3ab5646e86c6a2935919cca4c4ca220c.jpg",
      "https://i.pinimg.com/originals/dd/5b/60/dd5b6017eea55d7447422ee0206f4a87.jpg",
      "https://i.pinimg.com/originals/e3/16/05/e316056ac2919bce46b96a0f915b039a.jpg"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/onepice.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/onepice.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/onepice.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };