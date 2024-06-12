const path = require("path");
const axios = require("axios");
module.exports.config = {
    name: "minecraft",
    version: "2.0.1",
    hasPermssion: 0,
    credits: "D-Jukie", // Data mine by Q.Cường, cũng chỉ là thay xíu th nên k bán
    description: "Minecraft mini",
    commandCategory: "GAME",
    usages: "[]",
    cooldowns: 0,
    envConfig: {
        APIKEY: ""
    }
};

module.exports.checkPath = function (type, senderID) {
    const pathItem = path.join(__dirname, 'mine', `item.json`);
    const pathUser = path.join(__dirname, 'mine', 'datauser', `${senderID}.json`);
    const pathUser_1 = require("./mine/datauser/" + senderID + '.json');
    const pathItem_1 = require("./mine/item.json");
    if (type == 1) return pathItem
    if (type == 2) return pathItem_1
    if (type == 3) return pathUser
    if (type == 4) return pathUser_1
}

module.exports.onLoad = async () => {
    const fs = require("fs-extra");
    const axios = require("axios");

    const dir = __dirname + `/mine/`;
    const dirCache = __dirname + `/mine/cache/`;
    const dirData = __dirname + `/mine/datauser/`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, {
        recursive: true
    });
    if (!fs.existsSync(dirData)) fs.mkdirSync(dirData, {
        recursive: true
    });
    if (!fs.existsSync(dirCache)) fs.mkdirSync(dirCache, {
        recursive: true
    });

    if (!fs.existsSync(dir + "data.json")) (await axios({
        url: "https://raw.githubusercontent.com/KhangGia1810/mine123/main/data.json",
        method: 'GET',
        responseType: 'stream'
    })).data.pipe(fs.createWriteStream(dir + "data.json"));

    if (!fs.existsSync(dir + "item.json")) (await axios({
        url: "https://raw.githubusercontent.com/KhangGia1810/mine123/main/item.json",
        method: 'GET',
        responseType: 'stream'
    })).data.pipe(fs.createWriteStream(dir + "item.json"));
    return;
}

module.exports.run = async function ({
    api,
    event,
    args,
    Users,
    Currencies
}) {
    const {
        threadID,
        messageID,
        senderID
    } = event;
    const {
        readFileSync,
        writeFileSync,
        existsSync,
        createReadStream,
        readdirSync
    } = require("fs-extra")
    const axios = require("axios")
    const pathData = path.join(__dirname, 'mine', 'datauser', `${senderID}.json`);
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
            obj.mainROD = null,
                obj.GPS = {};
            obj.GPS.locate = null,
                obj.GPS.area = null,
                obj.fishBag = [];
            obj.item = [];
            obj.timeRegister = nDate
            obj.fishBag.push({
                ID: 0,
                name: 'Bedrock',
                category: 'Legendary',
                size: 999999,
                sell: 0
            });
            writeFileSync(pathData, JSON.stringify(obj, null, 4));
            var msg = {body: "[ Minecraft ] => Đăng ký Minecraft thành công", attachment: await this.subnautica()}
            return api.sendMessage(msg, threadID, messageID);
        } else return api.sendMessage({body: "[ Minecraft ] => Bạn đã có trong cơ sở dữ liệu", attachment: await this.subnautica()}, threadID, messageID);
    }
    case 'shop':
    case '-s': {
        if (!existsSync(pathData)) {
            return api.sendMessage({body: `[ ERROR ] => Bạn chưa đăng kí tài khoản Minecraft\n『 🌸 』➝ Dùng ${global.config.PREFIX}${this.config.name} register để đăng ký`, attachment: await this.subnautica()}, threadID, messageID);
        }
        return api.sendMessage({body: "💮=[Shop Villager🎫]=💮\n━━━━━━━━━━━━━━━\n1.🐼-> ⚒️Mua cúp⛏️\n2.🐼-> ⚖️Bán vật phẩm đào được\n3.🐼-> Nâng cấp⚙️Sửa chửa vật phẩm🔩\n━━━━━━━━━━━━━━━\n『 🌸 』➝ Reply tin nhắn này với lựa chọn của bạn", attachment: await this.subnautica()}, threadID, (error, info) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                type: "shop"
            })
        }, messageID);
    }
    case 'bag':
    case '-b': {
        if (!existsSync(pathData)) {
            return api.sendMessage({body: `[ ERROR ] => Bạn chưa đăng kí tài khoản Minecraft\n『 🌸 』➝ Dùng ${global.config.PREFIX}${this.config.name} register để đăng ký`, attachment: await this.subnautica()}, threadID, messageID);
        }
        var data = this.checkPath(4, senderID)

        return api.sendMessage({body: `💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n1.🐼-> Vật Phẩm SL: ${data.fishBag.length}\n2.🐼-> Cúp SL: ${data.item.length}\n━━━━━━━━━━━━━━━\n『 🌸 』➝ Vui lòng reply vật phẩm cần xem!`, attachment: await this.subnautica()}, threadID, (error, info) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                type: "choosebag"
            })
        }, messageID);
    }
    case 'custom':
    case '-c': {
        if (!existsSync(pathData)) {
            return api.sendMessage({body: `[ ERROR ] => Bạn chưa đăng kí tài khoản Minecraft\n『 🌸 』➝ Dùng ${global.config.PREFIX}${this.config.name} register để đăng ký`, attachment: await this.subnautica()}, threadID, messageID);
        }
        if (args[1] == 'pickaxel') {
            var data = this.checkPath(4, senderID)
            var listItem = '💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n',
                number = 1;
            for (let i of data.item) {
                listItem += `${number++}.🐼-> ${i.name} - Thời gian chờ: ${i.countdown}s - Độ bền: ${i.durability}\n`
            }
            listItem += '『 🌸 』➝ Vui lòng reply để chọn cúp chính của bạn!'
            return api.sendMessage(listItem, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "rodMain",
                    data: data,
                    item: data.item
                })
            }, messageID);
        }
        if (args[1] == 'locate') {
            return api.sendMessage({body: "💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n1.🐼-> The Earth\n2.🐼-> Nether Worl And The End🎭", attachment: await this.subnautica()}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "location"
                })
            }, messageID);
        }
    }
    case 'help': {
            return api.sendMessage({body: `💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n🐼-> ${global.config.PREFIX}${this.config.name} register -> Đăng kí\n🐼-> ${global.config.PREFIX}${this.config.name} custom -> Lựa chọn khu vực đào\n🐼-> ${global.config.PREFIX}${this.config.name} bag -> Xem túi đồ\n🐼-> ${global.config.PREFIX}${this.config.name} shop -> Cửa hàng`, attachment: await this.subnautica()}, threadID, messageID);
        }
    default: {
        async function checkTime(cooldown, dataTime) {
            if (cooldown - (Date.now() - dataTime) > 0) {

                var time = cooldown - (Date.now() - dataTime),
                    minutes = Math.floor(time / 60000),
                    seconds = ((time % 60000) / 1000).toFixed(0);
                return api.sendMessage(`『 🌸 』➝ Vui lòng mua cúp cấp bậc cao hơn để đào liên tiếp trong thời gian ngắn!\n⌚ Chờ gian chờ còn lại: ${minutes}:${seconds}!`, threadID, messageID);
            }
        }
        if (!existsSync(pathData)) {
            return api.sendMessage({body: `[ ERROR ] => Bạn chưa đăng kí tài khoản Minecraft\n『 🌸 』➝ Dùng ${global.config.PREFIX}${this.config.name} register để đăng ký`, attachment: await this.subnautica()}, threadID, messageID);
        }
        var data = this.checkPath(4, senderID)
        if (data.item.length == 0) return api.sendMessage(`『 🌸 』➝ Bạn chưa có cúp, vui lòng vào mine shop để mua!`, threadID, messageID);
        if (data.mainROD == null) return api.sendMessage(`『 🌸 』➝ Bạn chưa chọn cúp để đào!\n『 🌸 』➝ Vui lòng nhập ${global.config.PREFIX}${this.config.name} custom pickaxel để chọn cúp đào!`, threadID, messageID);
        if (data.GPS.locate == null || data.GPS.area == null) return api.sendMessage(`『 🌸 』➝ Bạn chưa chọn địa điểm để đào!\n『 🌸 』➝ Vui lòng nhập ${global.config.PREFIX}${this.config.name} custom locate để chọn địa điểm đào!`, threadID, messageID);
        var rod = data.mainROD
        var location = data.GPS.locate
        var area = data.GPS.area
        var type = this.getFish()
        var findRod = data.item.find(i => i.name == rod)
        if (findRod.durability <= 0) return api.sendMessage('『 🌸 』➝ Cúp đã hỏng, bạn cần sửa chữa hoặc chọn cúp mới!', threadID, messageID);
        await checkTime(findRod.countdown * 1000, findRod.countdownData)
        findRod.countdownData = Date.now();
        findRod.durability = findRod.durability - 10;
        writeFileSync(this.checkPath(3, senderID), JSON.stringify(this.checkPath(4, senderID), null, 2));
        if (type == false) return api.sendMessage('『 🌸 』➝ Oh, không dính gì cả', threadID, messageID);
        var fil = (await this.dataFish(location, area)).filter(i => i.category == type)
        if (fil.length == 0) return api.sendMessage('『 🌸 』➝ Oh, không dính gì cả', threadID, messageID);
        var getData = fil[Math.floor(Math.random() * fil.length)];
        var IDF = ((this.checkPath(4, senderID)).fishBag)[parseInt(((this.checkPath(4, senderID)).fishBag).length - 1)].ID + 1;
        (this.checkPath(4, senderID)).fishBag.push({
            ID: IDF,
            name: getData.name,
            category: getData.category,
            size: getData.size,
            sell: getData.sell,
            image: getData.image
        });
        writeFileSync(this.checkPath(3, senderID), JSON.stringify(this.checkPath(4, senderID), null, 2));
        var msg = {body: `💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n『 🌸 』➝ Chúc mừng bạn đã đào được\n『 🌸 』➝ Tên: ${getData.name} (${getData.sell}$)\n『 🌸 』➝ Loại: ${getData.category}\n『 🌸 』➝ Size: ${getData.size}cm`, attachment: await this.image(getData.image)}
        return api.sendMessage(msg, threadID, messageID);
    }
    }
}
module.exports.data = async function () {
    const data = (await axios.get(`https://raw.githubusercontent.com/KhangGia1810/mine123/main/data.json`)).data;  
    return data
}

module.exports.dataFish =async function (a, b) {
    const data = await this.data()
    console.log(data)
    var loc = data.find(i => i.location == a)
    var are = loc.area.find(i => i.name == b)

    return are.creature
}

module.exports.image = async function(link) {
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    var images = [];
    let download = (await axios.get(link, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/mine/cache/minecraft.png`, Buffer.from(download, "utf-8"));
        images.push(fs.createReadStream(__dirname + `/mine/cache/minecraft.png`));
    return images
}
module.exports.subnautica = async function() {
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    var images = [];
    let download = (await axios.get('https://i.imgur.com/vnXze66.jpg', { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/mine/cache/minecraft.png`, Buffer.from(download, "utf-8"));
        images.push(fs.createReadStream(__dirname + `/mine/cache/minecraft.png`));
    return images
}

module.exports.getFish = function () {
    var rate = Math.floor(Math.random() * 100) + 1
    if (rate <= 4) return false
    if (rate > 4 && rate <= 34) return 'Common';
    if (rate > 34 && rate <= 59) return 'Uncommon';
    if (rate > 59 && rate <= 79) return 'Rare';
    if (rate > 79 && rate <= 94) return 'Epic';
    if (rate > 94 && rate <= 99) return 'Legendary';
    if (rate > 99 && rate <= 100) return 'Mythical';
}
module.exports.handleReply = async function ({
    event,
    api,
    Currencies,
    handleReply,
    Users
}) {

    const {
        body,
        threadID,
        messageID,
        senderID
    } = event;
    const axios = require("axios")
    const {
        readFileSync,
        writeFileSync,
        existsSync,
        createReadStream,
        unlinkSync,
        writeFile
    } = require("fs-extra")
    const pathItem = this.checkPath(2, senderID);
    async function checkDur(a, b, c) {
        var data = require("./mine/item.json");
        var find = data.find(i => i.name == a)
        if (c == 'rate') return (b / find.durability) * 100
        if (c == 'reset') return find.durability
        return `${b}/${find.durability} (${((b/find.durability)*100).toFixed(0)}%)`
    }
    switch (handleReply.type) {
    case 'shop': {
        if (body == 1) {
            api.unsendMessage(handleReply.messageID)
            var listItem = '💮====[ SHOP ]====💮\n━━━━━━━━━━━━━━━\n',
                number = 1;
            for (let i of pathItem) {
                listItem += `${number++}.🐼-> ${i.name} (${i.price}$) - Thời gian chờ ${i.countdown} (Độ bền: ${i.durability})\n━━━━━━━━━━━━━━━\n`
            }
            return api.sendMessage(listItem + '『 🌸 』➝ Reply tin nhắn này để chọn cúp cho bạn. Mỗi lần đào trừ 10 độ bền', threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "buyfishingrod"
                })
            }, messageID);
        }
        if (body == 2) {
            api.unsendMessage(handleReply.messageID)
            var data = this.checkPath(4, senderID).fishBag;
            if (data.length == 0) return api.sendMessage('『 🌸 』➝ Túi của bạn không có gì cả', threadID, messageID);
            var Common = data.filter(i => i.category == 'Common')
            var Uncommon = data.filter(i => i.category == 'Uncommon')
            var Rare = data.filter(i => i.category == 'Rare')
            var Epic = data.filter(i => i.category == 'Epic')
            var Legendary = data.filter(i => i.category == 'Legendary')
            var Mythical = data.filter(i => i.category == 'Mythical')
            var listCategory = [Common, Uncommon, Rare, Epic, Legendary, Mythical];
            return api.sendMessage(`『 🌸 』➝ Chọn loại quặng muốn bán:\n1.🐼-> Common - ${Common.length}\n2.🐼-> Uncommon - ${Uncommon.length}\n3.🐼-> Rare - ${Rare.length}\n4.🐼-> Epic - ${Epic.length}\n5.🐼-> Legendary - ${Legendary.length}\n6.🐼-> Mythical - ${Mythical.length}`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "chooseFish",
                    listCategory
                })
            }, messageID);
        }
        if (body == 3) {
            api.unsendMessage(handleReply.messageID)
            var data = this.checkPath(4, senderID).item;
            var msg = `💮====[ SHOP ]====💮\n━━━━━━━━━━━━━━━\n`,
                number = 1;
            for (let i of data) {
                msg += `${number++}.🐼-> ${i.name} - Độ bền: ${await checkDur(i.name, i.durability, 0)}\n━━━━━━━━━━━━━━━\n`
            }
            return api.sendMessage(msg + '『 🌸 』➝ Vui lòng reply vật phẩm muốn sửa!, giá sửa bằng 1/3 giá vật phẩm', threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "fixfishingrod",
                    list: data
                })
            }, messageID);
        } else return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
    }
    case 'choosebag': {
        api.unsendMessage(handleReply.messageID)
        var data = this.checkPath(4, senderID)
        if (body == 1) {
            if (data.fishBag.length == 0) return api.sendMessage('『 🌸 』➝ Trong túi của bạn không có quặng nào!', threadID, messageID);
            var listFish = `💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n`,
                number = 1;
            for (let i of data.fishBag) {
                listFish += `${number++}.🐼-> ${i.name} (${i.size}cm) - ${i.category} (${i.sell}$)\n`
            }
            return api.sendMessage(listFish, threadID, messageID);
        }
        if (body == 2) {
            api.unsendMessage(handleReply.messageID)
            if (data.item.length == 0) return api.sendMessage('『 🌸 』➝ Trong túi của bạn không có vật phẩm nào!', threadID, messageID);
            var listItemm = `💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n`,
                number = 1;
            for (let i of data.item) {
                listItemm += `${number++}.🐼-> ${i.name} (${i.price}$) - Độ bền: ${i.durability} (${i.countdown}s)\n`
            }
            return api.sendMessage(listItemm, threadID, messageID);
        } else return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
    }
    case 'rodMain': {
        var data = handleReply.data;
        var item = handleReply.item;
        if (parseInt(body) > item.length || parseInt(body) <= 0) return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
        api.unsendMessage(handleReply.messageID)
        data.mainROD = item[parseInt(body) - 1].name
        writeFileSync(this.checkPath(3, senderID), JSON.stringify(data, null, 2));
        return api.sendMessage(`💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n『 🌸 』➝ Đặt '${item[parseInt(body) - 1].name}' thành cúp chính thành công!`, threadID, messageID);
    }
    case 'location': {
        const data = require("./mine/data.json");
        if (body != 1 && body != 2) return api.sendMessage("Lựa chọn không hợp lệ!", threadID, messageID);
        api.unsendMessage(handleReply.messageID)
        var listLoca = '💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n',
            number = 1;
        for (let i of data[parseInt(body) - 1].area) {
            listLoca += `${number++}.🐼-> ${i.name}\n━━━━━━━━━━━━━━━\n`
        };
        (this.checkPath(4, senderID)).GPS.locate = data[parseInt(body) - 1].location
        writeFileSync(this.checkPath(3, senderID), JSON.stringify(this.checkPath(4, senderID), null, 2));
        if(body == 1) var images = 'https://i.imgur.com/s6u6HDt.jpg'
        if(body == 2) var images = 'https://i.imgur.com/CxbxCy9.jpg'
        return api.sendMessage({body: listLoca + '『 🌸 』➝ Vui lòng chọn vùng bạn muốn đào!', attachment: await this.image(images)}, threadID, (error, info) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                type: "chooseArea",
                area: data[parseInt(body) - 1]
            })
        }, messageID);
    }
    case 'chooseArea': {
        var area = handleReply.area;
        var pathh = this.checkPath(4, senderID)
        var pathhh = this.checkPath(3, senderID)
        if (parseInt(body) > area.area.length || parseInt(body) <= 0) return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
        api.unsendMessage(handleReply.messageID)
        pathh.GPS.area = area.area[parseInt(body) - 1].name
        writeFileSync(pathhh, JSON.stringify(pathh, null, 2));
        return api.sendMessage(`💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n『 🌸 』➝ Chuyển tới vùng '${area.location} - ${area.area[parseInt(body) - 1].name}' thành công`, threadID, messageID);
    }
    case 'fixfishingrod': {
        if (parseInt(body) > handleReply.list.length || parseInt(body) <= 0) return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
        var rod = handleReply.list[parseInt(body) - 1]
        if (await checkDur(rod.name, rod.durability, 'rate') > 75) return api.sendMessage('『 🌸 』➝ Chỉ sửa được cúp có độ bền dưới 75%', threadID, messageID);
        api.unsendMessage(handleReply.messageID)
        await checkMoney(senderID, parseInt((rod.price * (1 / 3)).toFixed(0)))
        await Currencies.decreaseMoney(senderID, parseInt((rod.price * (1 / 3)).toFixed(0)));
        rod.durability = await checkDur(rod.name, rod.durability, 'reset')
        writeFileSync(this.checkPath(3, senderID), JSON.stringify(this.checkPath(4, senderID), null, 2));
        return api.sendMessage(`💮==[ Minecraft ]==💮\n━━━━━━━━━━━━━━━\n『 🌸 』➝ Sửa thành công ${rod.name} (${parseInt((rod.price*(1/3)).toFixed(0))}$)`, threadID, messageID);
    }
    case 'buyfishingrod': {
        if (parseInt(body) > pathItem.length || parseInt(body) <= 0) return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
        var data = pathItem[parseInt(body) - 1]
        var checkM = await checkMoney(senderID, data.price);
        if ((this.checkPath(4, senderID)).item.some(i => i.name == data.name)) return api.sendMessage('『 🌸 』➝ Bạn đã sở hữu vật phẩm này rồi!', threadID, messageID);
        (this.checkPath(4, senderID)).item.push({
            name: data.name,
            price: data.price,
            durability: data.durability,
            countdown: data.countdown,
            countdownData: null,
            image: data.image
        })
        writeFileSync(this.checkPath(3, senderID), JSON.stringify(this.checkPath(4, senderID), null, 2));
        api.unsendMessage(handleReply.messageID)
        var msg = { body: `💰 Mua thành công ${data.name}\n💵 Giá mua: ${data.price}$\n🛡️ Độ bền: ${data.durability}\n⏰ Thời gian chờ: ${data.countdown}`, attachment: await this.image(data.image)}
        return api.sendMessage(msg, threadID, messageID);
    }
    case 'chooseFish': {
        if (parseInt(body) > handleReply.listCategory.length || parseInt(body) <= 0) return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
        api.unsendMessage(handleReply.messageID);
        if (handleReply.listCategory[parseInt(body) - 1].length == 0) return api.sendMessage('『 🌸 』➝ Không có quặng nào hết', threadID, messageID);
        var fish = "\n",
            number = 1;
        for (let i of handleReply.listCategory[parseInt(body) - 1]) {
            fish += `${number++}.🐼-> ${i.name} (${i.size}cm) - Loại: ${i.category} - ${i.sell}$\n━━━━━━━━━━━━━━━\n`
        }
        return api.sendMessage(fish + "『 🌸 』➝ Reply số thứ tự để bán (có thể rep nhiều số) hoặc reply 'all' để bán tất cả cá!", threadID, (error, info) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                type: "sell",
                list: handleReply.listCategory[parseInt(body) - 1]
            })
        }, messageID);
    }
    case 'sell': {
        if ((parseInt(body) > handleReply.list.length || parseInt(body) <= 0) && body.toLowerCase() != 'all') return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
        api.unsendMessage(handleReply.messageID)
        var bag = (this.checkPath(4, senderID)).fishBag
        var coins = 0;
        if (body.toLowerCase() == 'all') {
            for (let i of handleReply.list) {
                await Currencies.increaseMoney(senderID, parseInt(i.sell));
                coins += parseInt(i.sell)
                console.log(i.ID)
                var index = (this.checkPath(4, senderID)).fishBag.findIndex(item => item.ID == i.ID);
                bag.splice(index, 1);
                writeFileSync(this.checkPath(3, senderID), JSON.stringify((this.checkPath(4, senderID)), null, 2));
            }
            return api.sendMessage(`『 🌸 』➝ Bán thành công ${handleReply.list.length} quặng và thu về được ${coins}$`, threadID, messageID);
        }
        else {
            var msg = '[Code fix by Niiozic]' + body
            var chooses = msg.split(" ").map(n => parseInt(n));
            chooses.shift();
            var text = `💮====[ SELL ]====💮\n━━━━━━━━━━━━━━━\n`,
                number = 1;
            for (let i of chooses) {
                const index = (this.checkPath(4, senderID)).fishBag.findIndex(item => item.ID == handleReply.list[i - 1].ID);
                text += `${number++}.🐼-> ${bag[index].name} +${bag[index].sell}$\n━━━━━━━━━━━━━━━`
                coins += parseInt(bag[index].sell)
                await Currencies.increaseMoney(senderID, parseInt(bag[index].sell));
                bag.splice(index, 1);
                writeFileSync(this.checkPath(3, senderID), JSON.stringify((this.checkPath(4, senderID)), null, 2));
            }
            return api.sendMessage(text + `\n『 🌸 』➝ Thu về được ${coins}$`, threadID, messageID);
        }
    }
    default: {
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage('『 🌸 』➝ Lựa chọn không hợp lệ!', threadID, messageID);
    }
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return api.sendMessage('『 🌸 』➝ Bạn không đủ tiền để thực hiện giao dịch này!', threadID, messageID);
    }
        }