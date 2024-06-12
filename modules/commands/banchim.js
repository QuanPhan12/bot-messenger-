const path = require("path");
const { mkdirSync, writeFileSync, existsSync, createReadStream, readdirSync } = require("fs-extra")
const axios = require("axios")

module.exports.config = {
    name: "banchim",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NVTIEN",
    description: "...nó giống bắn chim",
    commandCategory: "GAME",
    usages: "[]",
    cooldowns: 0
};


module.exports.onLoad = async () => {
    const dir = __dirname + `/banchim/datauser/`;
    const _dir = __dirname + `/banchim/datauser/`;
    const __dir = __dirname + `/banchim/cache/`;
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    if (!existsSync(_dir)) mkdirSync(_dir, { recursive: true });
    if (!existsSync(__dir)) mkdirSync(__dir, { recursive: true });
    return;
}

module.exports.checkPath = function (type, senderID) {
    const pathGame = path.join(__dirname, 'banchim', 'datauser', `${senderID}.json`);
    const pathGame_1 = require("./banchim/datauser/" + senderID + '.json');
    if (type == 1) return pathGame
    if (type == 2) return pathGame_1
}

module.exports.image = async function(link) {
    var images = [];
    let download = (await axios.get(link, { responseType: "arraybuffer" } )).data; 
        writeFileSync( __dirname + `/banchim/cache/banchim.png`, Buffer.from(download, "utf-8"));
        images.push(createReadStream(__dirname + `/banchim/cache/banchim.png`));
    return images
}

module.exports.run = async function ({ api, event, args, client,Threads,__GLOBAL, Users, Currencies,getText }) {
   const { senderID, messageID, threadID } = event;
     const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');
    const pathData = path.join(__dirname, 'banchim', 'datauser', `${senderID}.json`);
    switch (args[0]) {
        case 'register':
        case '-r': {
            const nDate = new Date().toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh'
            });
            if (!existsSync(pathData)) {
                var obj = {};
                obj.name = (await Users.getData(senderID)).name;
                obj.ID = senderID;
                obj.shield = 3
                obj.coins = 20000
                obj.Island = {};
                obj.Island.level = 1
                obj.Island.coinsLV = 200
                obj.Island.data = {};
                obj.Island.data.tower = 0
                obj.Island.data.tree = 0
                obj.Island.data.pool = 0
                obj.Island.data.pet = 0
                obj.spin = 20
                obj.timeRegister = nDate
                writeFileSync(pathData, JSON.stringify(obj, null, 4));
                return api.sendMessage("⚔️Đăng kí thành công", threadID, messageID);
            } else return api.sendMessage("⚔️Bạn đã có trong cơ sở dữ liệu⚔️", threadID, messageID);

        }
        case 'spin': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: `Bạn chưa đăng kí game!`, attachment: await this.image('https://i.imgur.com/dwVYAXv.gif')}, threadID, messageID);
            }
            if(this.checkPath(2, senderID).spin == 0) return api.sendMessage('『 🌸 』➝ Bạn đã hết lượt quay, vui lòng mua thêm hoặc đợi 5p hệ thống sẽ tặng bạn 5 lượt', threadID, messageID);
            this.checkPath(2, senderID).spin = parseInt(this.checkPath(2, senderID).spin) - 1;
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(this.checkPath(2, senderID), null, 4));
            var items = [`${this.checkPath(2, senderID).Island.level * 1000} coins`, `${this.checkPath(2, senderID).Island.level * 3000} coins`, `${this.checkPath(2, senderID).Island.level * 5000} coins`, 'cái nịt của tiến bịp', 'súng', ' đạn nâng cấp', '1 lượt quay', '2 lượt quay', '5 lượt quay'];
            var getItem = items[Math.floor(Math.random() * items.length)];
            var i = this.getSpin(items, getItem, senderID);
            api.sendMessage({body: `『 🌸 』➝ Chúc mừng bạn quay chúng : ${getItem}`, attachment: await this.image('https://i.imgur.com/nVLZf17.gif')}, threadID, messageID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = readdirSync(__dirname + `/banchim/datauser`);
            if(i == 3) {
                if(data.length < 4) return api.sendMessage(`『 🌸 』➝ Cần ít nhất có 3 người chơi trên server để trộm chim`, threadID, messageID);
                const dem = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        dem.push(require(`./banchim/datauser/${i}`));
                    }
                }
                dem.sort((a, b) => a.coins + b.coins);
                var msg = `『 🌸 』➝ Số tiền cao nhất là: ${dem[0].coins / 2}\n`
                const randomIndex = dem.sort(function() { return .5 - Math.random() });
                for(var i = 0; i < 3; i ++) {
                    msg += `${i+1}. ${randomIndex[i].name} - Chuồng chim level ${randomIndex[i].Island.level}\n`
                }
                msg += 'Vui lòng phản hồi với lựa chọn bạn muốn trộm!!'
                return api.sendMessage(`==========\n${msg}`, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "steal",
                        dem,
                        randomIndex
                    })
                }, messageID);
            }
            else if(i == 5) {
                if(data.length < 4) return api.sendMessage(`『 🌸 』➝ Cần ít nhất có 3 người chơi trên server để tấn công chuồng chim`, threadID, messageID);
                var msgf = `[====ATTACK====]\n`, number = 1, p = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        var o = require(`./banchim/datauser/${i}`);
                        p.push(o)
                        msgf += `${number++}. ${o.name} - Đảo level ${o.Island.level}\n`
                    }
                }
                return api.sendMessage(msgf, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "attack",
                        p
                    })
                }, messageID);
            }
            break;
        }
        case 'build': 
        case 'xaydung': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "『 🌸 』➝ Bạn chưa đăng kí game!", attachment: await this.image('https://i.imgur.com/ej311PB.jpg')}, threadID, messageID);
            }
            var a = require(`./banchim/datauser/${senderID}.json`);
            return api.sendMessage(`💮Bạn muốn xây dựng ở khu vực nơi nào ở chuồng chim!💮\n1.🐼-> Thân Chuồng - ${a.Island.coinsLV * (a.Island.data.tower + 1)} coins (${a.Island.data.tower}/50)\n2.🐼-> Cây xanh quanh chuồng cho chim đậu - ${a.Island.coinsLV * (a.Island.data.tree + 1)} coins(${a.Island.data.tree}/50)\n3.🐼-> Khu vực chơi cho chim - ${a.Island.coinsLV * (a.Island.data.pool + 1)} coins (${a.Island.data.pool}/50)\n4.🐼-> Khu vực đồ ăn cho chim - ${a.Island.coinsLV * (a.Island.data.pet + 1)} coins (${a.Island.data.pet}/50)\n==============`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "build"
                })
            }, messageID);
        }
        case 'shop': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "『 🌸 』➝ Bạn chưa đăng kí game!", attachment: await this.image('https://i.imgur.com/NKSF8hg.png')}, threadID, messageID);
            }
     return api.sendMessage({body: `── [ Banchim Shop ] ──  \n\n🐸Danh sách súng bạn có thể mua\n[🔫1]. A47K\n[🐉2]. M4A\n[🦋3].ASM10\n[🎀4]. LK24\n[🍁5]. Type 25\n[🛡6]. AK117\n[🧨7]. M16\n[🔪8]. BK57\n[🧬9]. ICR-1`, attachment: await this.image('https://i.imgur.com/NKSF8hg.png')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "shop"
                })
            }, messageID);
        }
        case 'bắn': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "『 🌸 』➝ Bạn chưa đăng kí game!", attachment: await this.image('https://i.imgur.com/tNnZMY4.png')}, threadID, messageID);
            }
     return api.sendMessage({body: `── [ Banchim Attack ] ──  \n\n🐸Danh sách khu vực bắn chim\n[🔫1]. Rừng Rậm Amazon\n[🐉2]. Rừng nhiệt đới\n[🦋3].khu đồi núi\n`, attachment: await this.image('https://i.imgur.com/Mxd9nxR.png')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "bắn"
                })
            }, messageID);
        }
        case 'me':
        case 'info': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "Bạn chưa đăng kí game!", attachment: await this.image('https://i.imgur.com/SbmeBZd.jpg')}, threadID, messageID);
            }
            var a = require(`./banchim/datauser/${senderID}.json`);
            return api.sendMessage(`💮====BANCHIM====💮\n👤 Bạn đang ở Chuồng mức độ ${a.Island.level}\n🎡 Số lượt quay còn lại: ${a.spin}\n🪙 Coins: ${a.coins}\nℹ️ Thông tin Chuồng:\n🏚️ Chuồng (${a.Island.data.tower}/50)\n🌳 Cây xanh cho chim đậu (${a.Island.data.tree}/50)\n🐦 Khu vực chơi cho chim nhỏ (${a.Island.data.pool}/50)\n🍴 Khu vực đồ ăn cho chim (${a.Island.data.pet}/50)`, threadID, messageID);
        }
        case 'top': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "『 🌸 』➝ Bạn chưa đăng kí game!", attachment: await this.image('https://i.imgur.com/SbmeBZd.jpg')}, threadID, messageID);
            }
            const data = readdirSync(__dirname + `/banchim/datauser`);
            if(data.length < 3) return api.sendMessage(`『 🌸 』➝ Cần ít nhất có 3 người chơi trên server để xem top`, threadID, messageID);
            var p = []
            for (let i of data) { 
                var o = require(`./banchim/datauser/${i}`);
                p.push(o)
                msgf += `${number++}. ${o.name} - Đảo level ${o.Island.level}\n`
            }
            p.sort((a, b) => b.Island.level - a.Island.level);
            var msg = '💮===TOP 3 CHUỒNG LEVEL CAO NHẤT===💮\n'
            for(var i = 0; i < 3; i++) {
                msg += `${i+1}. ${p[i].name} với đảo level ${p[i].Island.level}\n`
            }
            return api.sendMessage(msg, threadID, messageID);
        }
        default: {
            return api.sendMessage({body: `💮===[ Bắn Chim ]===💮\n🐼-> R: Đăng kí\n🐼-> SPIN: Vòng quay game\n🐼-> BUILD: Xây dựng chuồng chim\n🐼-> SHOP: Shop mua súng\n🐼-> INFO: Xem thông tin về bạn\n🐼-> TOP: Xem top level trên server\n🐼-> CHANGE: Quy đổi tiền của bot sang tiền game và ngược lại`, attachment: await this.image('https://i.imgur.com/4qnIIUJ.jpg')}, threadID, messageID);
        }
    }
}
module.exports.handleReply = async ({ event, api, Currencies, handleReply, Users, getText}) => {

  const { body, threadID, messageID, senderID } = event;
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    switch (handleReply.type) {
        case 'build': {
            var a = require(`./banchim/datauser/${senderID}.json`);
            var l = ['tower', 'tree', 'pool', 'pet']
            if(a.coins < a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1)) return api.sendMessage(`『 🌸 』➝ Bạn không đủ số coins trong game để xây dựng!`, threadID, messageID);
            a.coins = a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1);
            await Currencies.decreaseMoney(senderID, a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1));
            api.unsendMessage(handleReply.messageID)
            if(body == 1) {
                if(a.Island.data.tower == 50) return api.sendMessage('『 🌸 』➝ Cấp bậc khu vực này đang ở mức tối đa nên không thể xây dựng', threadID, messageID);
                a.Island.data.tower = a.Island.data.tower + 10;
                api.sendMessage(`『 🌸 』➝ Xây dựng thành công: ${a.Island.data.tower}/50`, threadID, messageID);
            }
            if(body == 2) {
                if(a.Island.data.tree == 50) return api.sendMessage('『 🌸 』➝ Cấp bậc khu vực này đang ở mức tối đa nên không thể xây dựng', threadID, messageID);
                a.Island.data.tree = a.Island.data.tree + 10;
                api.sendMessage(`『 🌸 』➝ Xây dựng thành công: ${a.Island.data.tree}/50`, threadID, messageID);
            }
            if(body == 3) {
                if(a.Island.data.pool == 50) return api.sendMessage('『 🌸 』➝ Cấp bậc khu vực này đang ở mức tối đa nên không thể xây dựng', threadID, messageID);
                a.Island.data.pool = a.Island.data.pool + 10;
                api.sendMessage(`『 🌸 』➝ Xây dựng thành công: ${a.Island.data.pool}/50`, threadID, messageID);
            }
            if(body == 4) {
                if(a.Island.data.pet == 50) return api.sendMessage('『 🌸 』➝ Cấp bậc khu vực này đang ở mức tối đa nên không thể xây dựng', threadID, messageID);
                a.Island.data.pet = a.Island.data.pet + 10;
                api.sendMessage(`『 🌸 』➝ Xây dựng thành công: ${a.Island.data.pet}/50`, threadID, messageID);
            }
            if(a.Island.data.tower == 50 && a.Island.data.tree == 50 && a.Island.data.pool == 50 && a.Island.data.pet == 50) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                api.sendMessage(`『 🌸 』➝ Xây dựng chuồng của bạn đã đạt được cấp tối đa!\n『 🌸 』➝ Bạn sẽ được nâng cấp lên đ���o LV ${(a.Island.level) + 1}`, threadID, messageID);
                a.Island.level = a.Island.level + 1;
                a.Island.coinsLV = a.Island.coinsLV + 100;
                a.Island.data.tower = 0;
                a.Island.data.tree = 0;
                a.Island.data.pool = 0;
                a.Island.data.pet = 0;
            }
            return writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
        }
        case 'shop': {
            if(body == 1) {
                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🔫]Tên : A47K\n[🍁]Thông Tin : Súng Trường tự động, sát thương và độ giật cao.\n[🩸]Số dame thực : 70\n[🛡]Tốc độ bắn : 55 \n[🧨] Độ chính xác : 48 \n[🔪]Khoảng cách: 66 \n[🧬] Độ linh hoạt: 60`, attachment: await this.image('https://i.imgur.com/Jm5j2SI.png')}, threadID, messageID);
            }
            else if(body == 2) {
                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🔫]Tên : M4A
[🍁]Thông Tin : Súng Trường tự động, cự ly bắn trung bình với độ chuẩn xác cao.
[🩸]Số dame thực : 45
[🛡]Tốc độ bắn : 60 
[🧨] Độ chính xác : 70 
[🔪]Khoảng cách: 45 
[🧬] Độ linh hoạt: 60`, attachment: await this.image('https://i.imgur.com/jfzm6lp.png')}, threadID, messageID);
            }
            else if(body == 3) {

                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🔫]Tên : ASM10
[🍁]Thông Tin : Súng Trường tự động, ba phát bắn chùm đầu tiên có độ chuẩn xác cao.
[🩸]Số dame thực : 60
[🛡]Tốc độ bắn : 65 
[🧨] Độ chính xác : 51 
[🔪]Khoảng cách: 55 
[🧬] Độ linh hoạt: 55`, attachment: await this.image('https://i.imgur.com/OBlt7BN.png')}, threadID, messageID);
             }
            else if(body == 4) {
                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🔫]Tên : LK24
[🍁]Thông Tin : Súng Trường tự động, tốc độ bắn cao. Hiệu quả khi bắn ở cự ly trung.
[🩸]Số dame thực : 46
[🛡]Tốc độ bắn : 62 
[🧨] Độ chính xác : 66 
[🔪]Khoảng cách: 50 `, attachment: await this.image('https://i.imgur.com/4GPoXQX.png')}, threadID, messageID);
            }
            else if(body == 5) {
                return api.sendMessage({body: `💮---> Thành công <---💮\n🔫]Tên : Type 25
[🍁]Thông Tin : Súng Trường tự động, tốc độ bắn nhanh và độ giật trung bình.
[🩸]Số dame thực : 55
[🛡]Tốc độ bắn : 70 
[🧨] Độ chính xác : 44 
[🔪]Khoảng cách: 35 
[🧬] Độ linh hoạt: 60`, attachment: await this.image('https://i.imgur.com/zBUgyOa.png')}, threadID, messageID);
            }
            else if(body == 6) {
                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🔫]Tên : AK117
[🍁]Thông Tin : Súng Trường tự động, tốc độ bắn cao.
[🩸]Số dame thực : 60
[🛡]Tốc độ bắn : 70 
[🧨] Độ chính xác : 55 
[🔪]Khoảng cách: 45 
[🧬] Độ linh hoạt: 60`, attachment: await this.image('https://i.imgur.com/loHPoeW.png')}, threadID, messageID);
            }
            else if(body == 7) {
                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🔫]Tên : M16
[🍁]Thông Tin : Súng Trường bán tự động với khả năng bắn burst 3 viên. Hiệu quả khi bắn từ cự ly trung đến cự ly xa..
[🩸]Số dame thực : 65
[🛡]Tốc độ bắn : 45 
[🧨] Độ chính xác : 60 
[🔪]Khoảng cách: 60 
[🧬] Độ linh hoạt: 60`, attachment: await this.image('https://i.imgur.com/s9Mvsqr.png')}, threadID, messageID);
            }
            else if(body == 8) {
                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🔫]Tên : BK57
[🍁]Thông Tin : Tăng tốc độ di chuyển trong khoảng thời gian nhất định lúc hồi sinh (nâng cấp súng level 11).
[🩸]Số dame thực : 48
[🛡]Tốc độ bắn : 63 
[🧨] Độ chính xác : 65 
[🔪]Khoảng cách: 50 
[🧬] Độ linh hoạt: 60`, attachment: await this.image('https://i.imgur.com/utWOxf4.png')}, threadID, messageID);
            }
            else if(body == 9) {
                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🔫]Tên : ICR-1
[🍁]Thông Tin : Tăng cự ly bắn của vũ khí.
[🩸]Số dame thực : 45
[🛡]Tốc độ bắn : 57 
[🧨] Độ chính xác : 76 
[🔪]Khoảng cách: 48 
[🧬] Độ linh hoạt: 60`, attachment: await this.image('https://i.imgur.com/JXIskLe.png')}, threadID, messageID);
            }
            else {
                return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
            }
        }

         case 'change': {
            if(body == 1) {
                return api.sendMessage('『 🌸 』➝ Vui lòng phản hồi tin nhắn này với số tiền bạn muốn đổi! Chiết khấu 0%', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "botcoins"
                    })
                }, messageID);
            }
            else if(body == 2) {
                return api.sendMessage('『 🌸 』➝ Vui lòng phản hồi tin nhắn này với số tiền bạn muốn đổi! Chiết khấu 0%', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "coinsbot"
                    })
                }, messageID);
            }
            else if(body == 3) {
                return api.sendMessage('『 🌸 』➝ Vui lòng phản hồi tin nhắn này với số lượt quay bạn muốn mua! (10 lượt quay 2000$)', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "spinn"
                    })
                }, messageID);
            }
            else {
                return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
            }
        }
        case 'bắn': {
            if(body == 1) {
  var coinbanchim = Math.floor(Math.random() * 80000) + 10000;
  var dohiem = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🐉] Vị trí : Rừng rậm amazon.\n[🔫]Bạn đã bắn chúng con chim ${coinbanchim}$\n[🍁] Độ hiếm : ${dohiem}%`, attachment: await this.image('https://i.imgur.com/tkTJ3qM.gif')}, threadID, messageID);
        }
            else if(body == 2) {
               var coinbanchim = Math.floor(Math.random() * 80000) + 10000;
  var dohiem = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🐉] Vị trí : Rừng nhiệt đới.\n[🔫]Bạn đã bắn chúng con chim ${coinbanchim}$\n[🍁] Độ hiếm : ${dohiem}%`, attachment: await this.image('https://imgur.com/0HJ7KbS.gif')}, threadID, messageID);
        }
            else if(body == 3) {
   var coinbanchim = Math.floor(Math.random() * 80000) + 10000;
  var dohiem = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `💮---> Thành công <---💮 \n[🐉] Vị trí : khu đồi núi.\n[🔫]Bạn đã bắn chúng con chim ${coinbanchim}$\n[🍁] Độ hiếm : ${dohiem}%`, attachment: await this.image('https://i.imgur.com/tkTJ3qM.gif')}, threadID, messageID);
            }
        }        
        case 'spinn': {
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.spin = a.spin + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`『 🌸 』➝ Mua thành công ${body} lượt quay (${parseInt(body) * 200}$`, threadID, messageID);
        }
        case 'botcoins': {
            var a = require(`./banchim/datauser/${senderID}.json`);
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.coins = a.coins + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`『 🌸 』➝ Nạp thành công ${body} coins vào game!`, threadID, messageID);
        }
        case 'coinsbot': {
            var a = require(`./banchim/datauser/${senderID}.json`);
            if(a.coins < parseInt(body)) return api.sendMessage('『 🌸 』➝ Bạn không đủ tiền để thực hiện giao dịch này!', threadID, messageID);
            api.unsendMessage(handleReply.messageID)
            await Currencies.increaseMoney(senderID, parseInt(body));
            a.coins = a.coins - parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`『 🌸 』➝ Rút thành công ${body} coins về tài khoản bot!`, threadID, messageID);
        }
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return api.sendMessage('『 🌸 』➝ Bạn không đủ tiền để thực hiện giao dịch này!', threadID, messageID);
    }
}
module.exports.getSpin = function (items, getItem, senderID) {
    const path = this.checkPath(1, senderID)
    var pathData = this.checkPath(2, senderID)
    var i = items.findIndex(index => index == getItem);
    if(i == 0) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 1000
    if(i == 1) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 3000
    if(i == 2) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 5000
    if(i == 4) {
        if(pathData.shield != 3) {
            pathData.spin = parseInt(pathData.spin) + 1
            pathData.shield = parseInt(pathData.shield) + 1;
        }
    }
    if(i == 6) pathData.spin = parseInt(pathData.spin) + 1
    if(i == 7) pathData.spin = parseInt(pathData.spin) + 2
    if(i == 8) pathData.spin = parseInt(pathData.spin) + 5
    writeFileSync(path, JSON.stringify(pathData, null, 4));
    return i
}