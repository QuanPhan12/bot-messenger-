const axios = require("axios");
const fs = require("fs");
const { loadImage, createCanvas, registerFont } = require("canvas");

module.exports.config = {
  name: "taoanh",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "Brasl",
  description: "TẠO ẢNH",
  commandCategory: "TẠO ẢNH",
  usages: "",
  cooldowns: 5,
};

const pathImage = __dirname + "/cache/tad.png";
const pathImg = __dirname + `/cache/1.png`;

const image = [
  "https://taoanhdep.com/wp-content/uploads/2022/08/macbook_2021.jpeg",
  "https://taoanhdep.com/wp-content/uploads/2022/08/taoanhdep-khung-nhac.jpeg",
  "https://taoanhdep.com/wp-content/uploads/2022/08/khoe-tien.jpeg",
];

const image1 = [
  "https://1.bp.blogspot.com/-z8bRQ0nqglE/YLtKVIkGeMI/AAAAAAAAteU/Y9aFV6Y5VU866NGNTaMIMWk41g-8fUENQCNcBGAsYHQ/s500/kieu1.jpg",
  "https://1.bp.blogspot.com/-3Zqad5y5qIs/YLtKVaXwjhI/AAAAAAAAteY/ZDo7lYQwCG8WxQP3ymubGXZ8J8XjCT7CgCNcBGAsYHQ/s500/kieu2.jpg",
  "https://1.bp.blogspot.com/-dkovMBijgh4/YLtKVGVqh_I/AAAAAAAAteQ/cVdwUPhMr58jdyvovPZEZFIC726WDnzjgCNcBGAsYHQ/s500/kieu3.jpg",
  "https://1.bp.blogspot.com/-GxVXemqO7nA/YLtKWMSzphI/AAAAAAAAtec/MeL73T3-zvEK27m9TAoSShfLttuKmpVMwCNcBGAsYHQ/s500/kieu4.jpg"
];

const bgImage = [
  {
    bg: "https://lh3.googleusercontent.com/-eTrImGTxJck/YXjZCQXYsHI/AAAAAAAAyss/yE0En8BCkG4yMdDlF4yScUlbZm_Sg09cwCNcBGAsYHQ/s0/macbook-2021.jpg",
    mask: "https://lh3.googleusercontent.com/-HitlcROwIGs/YXjYs-JlugI/AAAAAAAAysk/FSRfJFe9BDA-uLsRgTgFHwzBDtvvxWHNgCNcBGAsYHQ/s0/mask.png",
  },
  {
    bg: "https://1.bp.blogspot.com/-02vZZqDvyBQ/YLd5R9wuquI/AAAAAAAAtVU/J5Y1-RhCYLgVHDqwB8PloWaLaxy4TKzjgCNcBGAsYHQ/s0/player.png",
  },
];

const data_Tad3 = [
  {
    dt: "https://1.bp.blogspot.com/-4VvKJLd9-JE/YOb7v5ZjaUI/AAAAAAAAusg/qTyW-GA3mYsx3Nc6xq9jNtzhelqJ2yFagCNcBGAsYHQ/s0/dt1.jpg%22;markimg=%22https://1.bp.blogspot.com/-OBZ661jRjCw/YOb7v9PyamI/AAAAAAAAusc/eK6knrJufU8eU0PDdEfzk_R3nARd5f0wACNcBGAsYHQ/s0/mark1.png",
    mark: "https://1.bp.blogspot.com/-OBZ661jRjCw/YOb7v9PyamI/AAAAAAAAusc/eK6knrJufU8eU0PDdEfzk_R3nARd5f0wACNcBGAsYHQ/s0/mark1.png",
    vitri: {
      x: -135,
      y: -228,
    },
    size: {
      x: 270,
      y: 520,
    },
    canvas: {
      x: 490,
      y: 590,
    },
    translate: 2,
    rotate: -6.7,
  },
  {
    dt: "https://1.bp.blogspot.com/-JgjNBd2e30U/YOcBVeuF_BI/AAAAAAAAuss/DqAL-TnPzhw0rIPwuxBGPrGGIBoL3RqHwCNcBGAsYHQ/s0/dt2.jpg%22;markimg=%22https://1.bp.blogspot.com/-xRIBd_3yEAQ/YOcBVRfY1OI/AAAAAAAAusw/es52zpNw9GIS7Bu09zCC4q_pEn_4LDFCgCNcBGAsYHQ/s0/mark2.png",
    mark: "https://1.bp.blogspot.com/-xRIBd_3yEAQ/YOcBVRfY1OI/AAAAAAAAusw/es52zpNw9GIS7Bu09zCC4q_pEn_4LDFCgCNcBGAsYHQ/s0/mark2.png",
    vitri: {
      x: -150,
      y: 0,
    },
    size: {
      x: 340,
      y: 690,
    },
    canvas: {
      x: 660,
      y: 760,
    },
    translate: 3.5,
    rotate: -45,
  },
  {
    dt: "https://1.bp.blogspot.com/-CmMfiV7yVVw/YOcCadH3p0I/AAAAAAAAus8/_qOeOmSYSRohdCj2smd2w9ljDdqI1ESewCNcBGAsYHQ/s0/dt3.jpg",
    mark: "https://1.bp.blogspot.com/-4yukX1z-krE/YOcCaX33UeI/AAAAAAAAutA/l9qryrMbqrcXfUKii17JpVccMHP6sSB_ACNcBGAsYHQ/s0/mark3.png",
    vitri: {
      x: -60,
      y: -120,
    },
    size: {
      x: 320,
      y: 680,
    },
    canvas: {
      x: 540,
      y: 690,
    },
    translate: 2,
    rotate: -4,
  },
  {
    dt: "https://1.bp.blogspot.com/-bWnd1G3Ffo8/YOcDLvjZtPI/AAAAAAAAutM/AhJIc9VYe6871RMdgwulKrW126W-MDycwCNcBGAsYHQ/s0/dt4.jpg%22;markimg=%22https://1.bp.blogspot.com/-5WOeS227gZQ/YOcDMrWyNfI/AAAAAAAAutQ/8Rgt60DXjf0uyR1wwjxS8eKobK6EhYntwCNcBGAsYHQ/s0/mark4.png",
    mark: "https://1.bp.blogspot.com/-5WOeS227gZQ/YOcDMrWyNfI/AAAAAAAAutQ/8Rgt60DXjf0uyR1wwjxS8eKobK6EhYntwCNcBGAsYHQ/s0/mark4.png",
    vitri: {
      x: -165,
      y: -140,
    },
    size: {
      x: 440,
      y: 750,
    },
    canvas: {
      x: 650,
      y: 800,
    },
    translate: 2,
    rotate: -7.5,
  },
];

module.exports.run = async function ({ api, event }) {
  if (!fs.existsSync(__dirname + `/tad/Farro-Regular.ttf`)) {
    let getfont = (
      await axios.get(
        `https://github.com/PLViet/fonts/raw/main/Farro-Regular.ttf`,
        { responseType: "arraybuffer" }
      )
    ).data;
    fs.writeFileSync(
      __dirname + `/tad/Farro-Regular.ttf`,
      Buffer.from(getfont, "utf-8")
    );
  }
  var attachment = [];

  for (const i of image) {
    attachment.push(
      (
        await axios.get(i, {
          responseType: "stream",
        })
      ).data
    );
  }
  return api.sendMessage(
    {
      body: "『 🌸 』➝ Reply theo số thứ tự",
      attachment,
    },
    event.threadID,
    (err, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        author: event.senderID,
        messageID: info.messageID,
      });
    }
  );
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  if (event.senderID != handleReply.author)
    return api.sendMessage("『 🌸 』➝ Hông pé ơi", event.threaID);

  if (handleReply.type === "macbook") {
    if (event.attachments.length === 0)
      return api.sendMessage("『 🌸 』➝ Vui lòng reply ảnh!", event.threadID);

    api.unsendMessage(handleReply.messageID);
    let getdata = (
      await axios.get(event.attachments[0].url, { responseType: "arraybuffer" })
    ).data;
    fs.writeFileSync(pathImg, Buffer.from(getdata, "utf-8"));
    macbook(pathImg, api, event);
  }

  if (handleReply.type === "facebook") {
    if(handleReply.step === 'pick'){
      api.unsendMessage(handleReply.messageID);
     return api.sendMessage(
        "『 🌸 』➝ Vui lòng reply ảnh vào tin nhắn này!",
        event.threadID,
        (err, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            type: "facebook",
            step: event.body,
          });
        }
      );
    }
    if (event.attachments.length === 0)
      return api.sendMessage("『 🌸 』➝ Vui lòng reply ảnh!", event.threadID);

    api.unsendMessage(handleReply.messageID);

    let getdata = (
      await axios.get(event.attachments[0].url, { responseType: "arraybuffer" })
    ).data;
    fs.writeFileSync(pathImg, Buffer.from(getdata, "utf-8"));
    facebook(pathImg, handleReply.step, api, event);

  }

  if (handleReply.type === "iphone") {
    if (handleReply.step === 1) {
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(
        "『 🌸 』➝ Vui lòng reply tên Ca sĩ!",
        event.threadID,
        (err, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            type: "iphone",
            step: 2,
            nameM: event.body,
          });
        }
      );
    }
    if (handleReply.step === 2) {
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(
        "『 🌸 』➝ Vui lòng reply Lời bài hát!",
        event.threadID,
        (err, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            type: "iphone",
            step: 3,
            nameM: handleReply.nameM,
            nameC: event.body,
          });
        }
      );
    }
    if (handleReply.step === 3) {
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(
        "『 🌸 』➝ Vui lòng reply ảnh vào tin nhắn này!",
        event.threadID,
        (err, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            type: "iphone",
            step: 4,
            nameM: handleReply.nameM,
            nameC: handleReply.nameC,
            lyric: event.body,
          });
        }
      );
    }
    if (handleReply.step === 4) {
      if (event.attachments.length === 0)
        return api.sendMessage("『 🌸 』➝ Vui lòng reply ảnh!", event.threadID);

      api.unsendMessage(handleReply.messageID);
      let getdata = (
        await axios.get(event.attachments[0].url, {
          responseType: "arraybuffer",
        })
      ).data;
      fs.writeFileSync(pathImg, Buffer.from(getdata, "utf-8"));
      iphone(
        pathImg,
        handleReply.nameM,
        handleReply.nameC,
        handleReply.lyric,
        api,
        event
      );
    }
  }

  switch (event.args[0]) {
    case "1":
      {
        api.unsendMessage(handleReply.messageID);
        api.sendMessage(
          "『 🌸 』➝ Vui lòng reply ảnh vào tin nhắn này!",
          event.threadID,
          (err, info) => {
            global.client.handleReply.push({
              name: this.config.name,
              author: event.senderID,
              messageID: info.messageID,
              type: "macbook",
            });
          }
        );
      }
      break;
    case "2":
      {
        api.unsendMessage(handleReply.messageID);
        api.sendMessage(
          "『 🌸 』➝ Vui lòng reply tên bài hát!",
          event.threadID,
          (err, info) => {
            global.client.handleReply.push({
              name: this.config.name,
              author: event.senderID,
              messageID: info.messageID,
              type: "iphone",
              step: 1,
            });
          }
        );
      }
      break;
    case "3":
      {
        api.unsendMessage(handleReply.messageID);
        var attachment = [];

  for (const i of image1) {
    attachment.push(
      (
        await axios.get(i, {
          responseType: "stream",
        })
      ).data
    );
  }
  return api.sendMessage(
    {
      body: "『 🌸 』➝ Reply theo số thứ tự",
      attachment,
    },
          event.threadID,
          (err, info) => {
            global.client.handleReply.push({
              name: this.config.name,
              author: event.senderID,
              messageID: info.messageID,
              type: "facebook",
              step: 'pick'
            });
          }
        );
      }
      break;
  }
};

async function macbook(pathImg, api, event) {
  const macbook = await loadImage(
    "https://lh3.googleusercontent.com/-eTrImGTxJck/YXjZCQXYsHI/AAAAAAAAyss/yE0En8BCkG4yMdDlF4yScUlbZm_Sg09cwCNcBGAsYHQ/s0/macbook-2021.jpg"
  );
  const triangleImage = await loadImage(
    "https://lh3.googleusercontent.com/-HitlcROwIGs/YXjYs-JlugI/AAAAAAAAysk/FSRfJFe9BDA-uLsRgTgFHwzBDtvvxWHNgCNcBGAsYHQ/s0/mask.png"
  );
  const squareImage = await loadImage(pathImg);

  const canvas = createCanvas(macbook.width, macbook.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(macbook, 0, 0, macbook.width, macbook.height);

  const tempCanvas = createCanvas(1600, 900);
  const tempCtx = tempCanvas.getContext("2d");

  tempCtx.drawImage(triangleImage, 0, 0, macbook.width, macbook.height);

  tempCtx.globalCompositeOperation = "source-in";
  tempCtx.drawImage(squareImage, 0, 0, 1600, 900);

  ctx.drawImage(tempCanvas, 0, 0, 1600, 900, 0, 0, 1600, 900);

  ctx.restore();
  ctx.save();
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImage, imageBuffer);
  return api.sendMessage(
    {
      body: `『 🌸 』➝ Ảnh của bạn iu đây`,
      attachment: fs.createReadStream(pathImage),
    },
    event.threadID,
    event.messageID
  );
}

async function iphone(pathImg, nameM, nameC, lyric, api, event) {
  const iphone = await loadImage(
    "https://1.bp.blogspot.com/-02vZZqDvyBQ/YLd5R9wuquI/AAAAAAAAtVU/J5Y1-RhCYLgVHDqwB8PloWaLaxy4TKzjgCNcBGAsYHQ/s0/player.png"
  );
  const squareImage = await loadImage(pathImg);

  const canvas = createCanvas(iphone.width, iphone.height);
  const ctx = canvas.getContext("2d");

  const text1 = nameM;
  const text2 = nameC;
  const texta = lyric;

  //ctx.globalAlpha = 0.5;
  ctx.drawImage(squareImage, 0, 0, 750, 970);

  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(100, 120, iphone.width, iphone.height);

  ctx.drawImage(iphone, 0, 0, iphone.width, iphone.height);

  ctx.drawImage(squareImage, 293, 350, 250, 250);

  ctx.fillStyle = "#fff";
  ctx.font = "30px Farro";
  ctx.textAlign = "center";
  ctx.fillText(text1, 260 + 520 / 3.2, iphone.height / 1.8);

  ctx.fillStyle = "#fff";
  ctx.font = "27px aria";
  ctx.textAlign = "center";
  ctx.fillText(text2, 260 + 520 / 3.2, iphone.height / 1.67);

  ctx.fillStyle = "#fff";
  ctx.font = "26px aria";
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  const lines = texta.split("\n");
  const lineHeight = 30;
  let y = iphone.height / 1.58;
  let x = iphone.width / 1.3;
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i];
    ctx.fillText(line, x, y);
    y -= lineHeight;
  }

  ctx.restore();
  ctx.save();
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImage, imageBuffer);
  return api.sendMessage(
    {
      body: `『 🌸 』➝ Ảnh của bạn đây`,
      attachment: fs.createReadStream(pathImage),
    },
    event.threadID,
    event.messageID
  );
}

async function facebook(pathImg, step, api, event){
  const facebook = await loadImage(data_Tad3[step-1].dt);
    const triangleImage = await loadImage(data_Tad3[step-1].mark);
    const squareImage = await loadImage(pathImg);

    const canvas = createCanvas(facebook.width, facebook.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(facebook, 0, 0, facebook.width, facebook.height);

    const tempCanvas = createCanvas(data_Tad3[step-1].canvas.x,data_Tad3[step-1].canvas.y);
    const tempCtx = tempCanvas.getContext('2d');

    tempCtx.drawImage(triangleImage, 0, 0, facebook.width, facebook.height);

    tempCtx.globalCompositeOperation = 'source-in';
    tempCtx.translate(data_Tad3[step-1].canvas.x / data_Tad3[step-1].translate,data_Tad3[step-1].canvas.y / data_Tad3[step-1].translate);
    tempCtx.rotate(data_Tad3[step-1].rotate * (Math.PI / 180));
    tempCtx.drawImage(squareImage, data_Tad3[step-1].vitri.x, data_Tad3[step-1].vitri.y, data_Tad3[step-1].size.x, data_Tad3[step-1].size.y);
    tempCtx.resetTransform(); 

    ctx.drawImage(tempCanvas, 0, 0, data_Tad3[step-1].canvas.x,data_Tad3[step-1].canvas.y, 0, 0, data_Tad3[step-1].canvas.x,data_Tad3[step-1].canvas.y);

  ctx.restore();
  ctx.save();
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImage, imageBuffer);
  return api.sendMessage(
    {
      body: `『 🌸 』➝ Ảnh của bạn đây`,
      attachment: fs.createReadStream(pathImage),
    },
    event.threadID,
    event.messageID
  );
}