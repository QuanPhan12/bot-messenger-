module.exports.config = {
  name:"gaiditbu",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh gái đít bự",
  commandCategory: "NO PREFIX",
  usages:"gaiditbu",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Gaiditbu")==0 || (event.body.indexOf("gaiditbu")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.postimg.cc/vHBqQ1YB/240527720-153472986999489-1827619954791027325-n-1.gif",
      "https://i.postimg.cc/MHGDK484/240527720-153472986999489-1827619954791027325-n-1.jpg",
      "https://i.postimg.cc/qv28003q/240527720-153472986999489-1827619954791027325-n-1.jpg",
      "https://i.postimg.cc/pTcjkLgG/240527720-153472986999489-1827619954791027325-n-1.png",
      "https://i.postimg.cc/FztLwBH3/240527720-153472986999489-1827619954791027325-n-10.jpg",
      "https://i.postimg.cc/6qdvKf8S/240527720-153472986999489-1827619954791027325-n-11.jpg",
      "https://i.postimg.cc/c1YYf0Fm/240527720-153472986999489-1827619954791027325-n-12.jpg",
      "https://i.postimg.cc/bNhnTWMj/240527720-153472986999489-1827619954791027325-n-13.jpg",
      "https://i.postimg.cc/vZ8VR9bq/240527720-153472986999489-1827619954791027325-n-14.jpg",
      "https://i.postimg.cc/43mHygKp/240527720-153472986999489-1827619954791027325-n-15.jpg",
      "https://i.postimg.cc/BvkL1VDk/240527720-153472986999489-1827619954791027325-n-16.jpg",
      "https://i.postimg.cc/W3ZDmww3/240527720-153472986999489-1827619954791027325-n-17.jpg",
      "https://i.postimg.cc/nrtX3931/240527720-153472986999489-1827619954791027325-n-18.jpg",
      "https://i.postimg.cc/xjKJcgdp/240527720-153472986999489-1827619954791027325-n-19.jpg",
      "https://i.postimg.cc/v8phd0NP/240527720-153472986999489-1827619954791027325-n-2.jpg",
      "https://i.postimg.cc/053mwrGr/240527720-153472986999489-1827619954791027325-n-2.jpg",
      "https://i.postimg.cc/SNkX882S/240527720-153472986999489-1827619954791027325-n-20.jpg",
      "https://i.postimg.cc/BQpjC6Hx/240527720-153472986999489-1827619954791027325-n-21.jpg",
      "https://i.postimg.cc/nhLCSJGN/240527720-153472986999489-1827619954791027325-n-22.jpg",
      "https://i.postimg.cc/P5FNBR6J/240527720-153472986999489-1827619954791027325-n-23.jpg",
      "https://i.postimg.cc/8CJsDm3H/240527720-153472986999489-1827619954791027325-n-24.jpg",
      "https://i.postimg.cc/bJ1JSNqS/240527720-153472986999489-1827619954791027325-n-25.jpg",
      "https://i.postimg.cc/Y0kS6KSn/240527720-153472986999489-1827619954791027325-n-26.jpg",
      "https://i.postimg.cc/brTwLCDz/240527720-153472986999489-1827619954791027325-n-27.jpg",
      "https://i.postimg.cc/RCQhMFPj/240527720-153472986999489-1827619954791027325-n-28.jpg",
      "https://i.postimg.cc/tCqT7jw7/240527720-153472986999489-1827619954791027325-n-29.jpg",
      "https://i.postimg.cc/RVKRCcrv/240527720-153472986999489-1827619954791027325-n-3.jpg",
      "https://i.postimg.cc/6phfnt5S/240527720-153472986999489-1827619954791027325-n-3.jpg",
      "https://i.postimg.cc/QxfMTzZm/240527720-153472986999489-1827619954791027325-n-30.jpg",
      "https://i.postimg.cc/7ZcYBT6T/240527720-153472986999489-1827619954791027325-n-31.jpg",
      "https://i.postimg.cc/bJ0yNCRQ/240527720-153472986999489-1827619954791027325-n-32.jpg",
      "https://i.postimg.cc/J0PRjsv0/240527720-153472986999489-1827619954791027325-n-33.jpg",
      "https://i.postimg.cc/c1mxpzCW/240527720-153472986999489-1827619954791027325-n-34.jpg",
      "https://i.postimg.cc/rFwVM9Rr/240527720-153472986999489-1827619954791027325-n-35.jpg",
      "https://i.postimg.cc/MK3WTj1r/240527720-153472986999489-1827619954791027325-n-36.jpg",
      "https://i.postimg.cc/13gyN5HR/240527720-153472986999489-1827619954791027325-n-37.jpg",
      "https://i.postimg.cc/HLXHBZRf/240527720-153472986999489-1827619954791027325-n-38.jpg",
      "https://i.postimg.cc/1tSST0Z4/240527720-153472986999489-1827619954791027325-n-39.jpg",
      "https://i.postimg.cc/mrX3pj9y/240527720-153472986999489-1827619954791027325-n-4.jpg",
      "https://i.postimg.cc/N0f7xSK0/240527720-153472986999489-1827619954791027325-n-4.jpg",
      "https://i.postimg.cc/DZchKW26/240527720-153472986999489-1827619954791027325-n-40.jpg",
      "https://i.postimg.cc/0jWqbLKJ/240527720-153472986999489-1827619954791027325-n-41.jpg",
      "https://i.postimg.cc/FFDvWJCs/240527720-153472986999489-1827619954791027325-n-42.jpg",
      "https://i.postimg.cc/7YhkpYj1/240527720-153472986999489-1827619954791027325-n-43.jpg",
      "https://i.postimg.cc/024sx1qT/240527720-153472986999489-1827619954791027325-n-44.jpg",
      "https://i.postimg.cc/t4VH4vqY/240527720-153472986999489-1827619954791027325-n-45.jpg",
      "https://i.postimg.cc/bvxcQG2P/240527720-153472986999489-1827619954791027325-n-46.jpg",
      "https://i.postimg.cc/rmq6g8Sr/240527720-153472986999489-1827619954791027325-n-47.jpg",
      "https://i.postimg.cc/Y9R5sJ3y/240527720-153472986999489-1827619954791027325-n-48.jpg",
      "https://i.postimg.cc/hvGkWpZ4/240527720-153472986999489-1827619954791027325-n-49.jpg",
      "https://i.postimg.cc/G24FWDJw/240527720-153472986999489-1827619954791027325-n-5.jpg",
      "https://i.postimg.cc/76j3wLmC/240527720-153472986999489-1827619954791027325-n-5.jpg",
      "https://i.postimg.cc/3NbPKmzX/240527720-153472986999489-1827619954791027325-n-50.jpg",
      "https://i.postimg.cc/KcqXrh41/240527720-153472986999489-1827619954791027325-n-51.jpg",
      "https://i.postimg.cc/zDRwpnGT/240527720-153472986999489-1827619954791027325-n-6.jpg",
      "https://i.postimg.cc/Zn3rRhMw/240527720-153472986999489-1827619954791027325-n-6.jpg",
      "https://i.postimg.cc/4N66Rstd/240527720-153472986999489-1827619954791027325-n-7.jpg",
      "https://i.postimg.cc/TYMVspKF/240527720-153472986999489-1827619954791027325-n-7.jpg",
      "https://i.postimg.cc/6pzCTcMx/240527720-153472986999489-1827619954791027325-n-8.jpg",
      "https://i.postimg.cc/8zTh19Bb/240527720-153472986999489-1827619954791027325-n-8.jpg",
      "https://i.postimg.cc/PqRZQxG6/240527720-153472986999489-1827619954791027325-n-9.jpg",
      "https://i.postimg.cc/cJHw33zg/240527720-153472986999489-1827619954791027325-n-9.jpg",
      "https://i.postimg.cc/Dy89xpbB/271649279-999189170683383-3937252176250207737-n.jpg",
      "https://i.postimg.cc/c42V27RZ/271651245-2967486966847840-7123156308431361464-n.jpg",
      "https://i.postimg.cc/P5DBjLyD/271653379-780938503301142-4323864893220042333-n.jpg",
      "https://i.postimg.cc/CKV9LFrQ/271735038-2121849114658689-1348151040128088487-n.jpg",
      "https://i.postimg.cc/V6KhRXfx/271818512-653602745768240-287745847480247673-n.jpg",
      "https://i.postimg.cc/HnjhPjjV/271825594-608378423799273-3522339242409286213-n.jpg",
      "https://i.postimg.cc/KjVHXFgQ/IMG-20210426-003751-355.jpg",
      "https://i.postimg.cc/15kjJmS3/IMG-20210430-034623-803.jpg",
      "https://i.postimg.cc/9QyNk6Xt/photo-2021-06-30-02-24-47.jpg",
      "https://i.postimg.cc/tT4SY732/photo-2021-06-30-02-24-49.jpg",
      "https://i.postimg.cc/C1rvDYJY/photo-2021-06-30-02-24-54.jpg",
      "https://i.postimg.cc/Zn1V7c1M/photo-2021-06-30-02-24-59.jpg",
      "https://i.postimg.cc/T1ktVx9f/photo-2021-06-30-02-25-07.jpg"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/gaiditbu.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/gaiditbu.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/gaiditbu.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };