module.exports.config = {
  name: "husbu",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "Random ảnh husbu",
  commandCategory: "NO PREFIX",
  usages: "husbu",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Husbu")==0 || (event.body.indexOf("husbu")==0)) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.pinimg.com/280x280_RS/dc/e0/13/dce013e163417307dcf2f4a5e1f39ad8.jpg",
      "https://i.pinimg.com/236x/00/c0/b5/00c0b519a1747dd9131b798c7e0b9a7a.jpg",
      "https://i.pinimg.com/736x/8c/71/b4/8c71b427f3bd29fffd666faa25d60609.jpg",
      "https://i.pinimg.com/originals/26/64/9d/26649dc61de207490f7ca99b0fa391de.jpg",
      "https://i.pinimg.com/736x/05/00/42/05004293e40ea9d8e3361f15fbad50bb.jpg",
      "https://i.pinimg.com/474x/c8/a1/d8/c8a1d8a53ad702b46f431dce699febef.jpg",
      "https://i.pinimg.com/236x/96/05/6c/96056c32905c0790a99dade5e4a4fb9a.jpg",
      "https://i.pinimg.com/originals/86/a9/bd/86a9bd296a5ea476877985bccc0eeb0d.jpg",
      "https://i.pinimg.com/474x/f0/18/3c/f0183c8bb0341c1a381ee2d08b8a6ff0.jpg",
      "https://i.pinimg.com/474x/71/69/f2/7169f27907a5eff90252ad243808ff3a.jpg",
      "https://i.pinimg.com/736x/30/79/ec/3079ec9602b5a7d2c052848ab5b5664a.jpg",
      "https://i.pinimg.com/originals/a7/29/f3/a729f305c31e3cb23eb329d828fcb742.jpg",
      "https://i.pinimg.com/originals/69/04/c3/6904c3c7c907a79431373036b7a8711d.jpg",
      "https://i.pinimg.com/736x/1d/e4/64/1de4642e8b182347aa5d7272734e3831.jpg",
      "https://i.pinimg.com/280x280_RS/f9/cc/2c/f9cc2cd1c195f57a91db5ad4c1f7d699.jpg",
      "https://i.pinimg.com/236x/73/2f/88/732f88262bcbdf7004a92c8c5b8bf515.jpg",
      "https://i.pinimg.com/564x/5a/50/70/5a5070206d76dc5988ec068f46084a5d.jpg",
      "https://i.pinimg.com/564x/03/1a/77/031a773dac089f92243198d929971d5b.jpg",
      "https://i.pinimg.com/originals/00/bf/1f/00bf1fe39a252fd39ad45776c643b819.jpg",
      "https://i.pinimg.com/736x/5e/f3/ee/5ef3eeed199249a59e08642aa2d2207c.jpg",
      "https://i.pinimg.com/280x280_RS/31/29/f6/3129f6cbc707d62570c0387ff97edf99.jpg",
      "https://i.pinimg.com/280x280_RS/c9/83/06/c983068c116ca6aa3efae7ae1e6bfb97.jpg",
      "https://i.pinimg.com/280x280_RS/ce/26/56/ce2656231250da89150ee60e06f62b89.jpg",
      "https://i.pinimg.com/originals/16/db/7b/16db7b4e5164fa8f5088b506c402e73c.jpg",
      "https://i.pinimg.com/736x/69/c0/7a/69c07a5d476944709b105e3f0e73d9ae.jpg",
      "https://i.pinimg.com/236x/77/e2/78/77e278a3110afc9e950ec48b0456bd41.jpg",
      "https://i.pinimg.com/736x/4b/3d/64/4b3d64f84344c9554954bade7a693420.jpg",
      "https://i.pinimg.com/236x/a0/7e/53/a07e5380e72736854ff7092933fc3fd0.jpg",
      "https://i.pinimg.com/originals/c1/e2/79/c1e27959e8e46576494e740ac3fef4b3.jpg",
      "https://i.pinimg.com/originals/ee/52/37/ee5237610aa24f278abb8f807e6fa685.jpg",
      "https://i.pinimg.com/736x/a3/89/09/a389098f371f4c80194eced6f6f1dac3.jpg",
      "https://i.pinimg.com/originals/f3/96/2e/f3962ebd97aa51f9e1f330791304a27c.jpg",
      "https://i.pinimg.com/280x280_RS/c8/c2/2f/c8c22f25f9df9bf3ab03019e142d19d1.jpg",
      "https://i.pinimg.com/280x280_RS/8a/e4/a2/8ae4a201e9b8badb804cfb3b65982728.jpg",
      "https://i.pinimg.com/736x/d4/4c/7a/d44c7af872a27eab8d54e70f4dfafbb0.jpg",
      "https://i.pinimg.com/originals/eb/5c/b2/eb5cb2ddcd8f4708bf4144f658d591c2.jpg",
      "https://i.pinimg.com/564x/77/bb/10/77bb10c65f73e74ad164010b1a96554f.jpg",
      "https://i.pinimg.com/236x/7e/14/9e/7e149e1fbb817ede1e489f5512cbc7dd.jpg",
      "https://i.pinimg.com/originals/16/de/73/16de739b9ead960cf60bd2029847b958.jpg",
      "https://i.pinimg.com/280x280_RS/c7/d8/2d/c7d82dfeb55aec698e9f939171faa1a7.jpg",
      "https://i.pinimg.com/originals/b3/b4/e0/b3b4e0cf63daf5bdbc1c4da23da3c7cc.jpg",
      "https://i.pinimg.com/280x280_RS/70/8e/92/708e920318c59de32f7d89ab6d4701fa.jpg",
      "https://i.pinimg.com/736x/9e/a3/7b/9ea37bb0330d03d87a8d14a429291c6e.jpg",
      "https://i.pinimg.com/originals/45/26/a0/4526a0eef6529eaf8e809751e0e4809b.jpg",
      "https://i.pinimg.com/280x280_RS/cc/a9/49/cca94970d39e5e3df8da246ef44833a0.jpg",
      "https://i.pinimg.com/564x/ae/01/94/ae019489d096e88083c2a2b875f7557a.jpg",
      "https://i.pinimg.com/736x/6b/41/a8/6b41a87deef4a76a904be176c5e4a75e.jpg"
          ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/noprefix/husbu.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/husbu.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/husbu.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };