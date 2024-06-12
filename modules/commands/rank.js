const sendWaiting = true; // bật hoặc tắt gửi tin nhắn "đang tạo hình ảnh, vui ồng chờ đợi...";
const textWaiting = "Đang khởi tạo hình ảnh, vui lòng chờ đợi trong giây lát";
const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 20
const fontsInfo = 28
const colorName = "#00FFFF"

module.exports.config = {
name: "rank",
version: "1.0.0",
hasPermssion: 0,
credits: "SenProject mod by Quất",
description: "check tương tác theo phong cách liên quân",
commandCategory: "BOX",
usages: "checktt",
cooldowns: 0,
dependencies: {
"fs-extra": ""
}
}

const path = __dirname + '/count-by-thread/';

module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
}
module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.handleEvent = function ({ event }) {
    const { messageID, threadID, senderID } = event;
    if (!global.data.allThreadID.some(tid => tid == threadID)) return;
    const fs = global.nodemodule['fs'];
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 0;
    }
    getThreadJSON[senderID]++;
    fs.writeFileSync(threadPath, JSON.stringify(getThreadJSON, null, 4));
}


const getRankName = count => {
    return count > 4259 ? 'Chiến Tướng ( ⭐ )'
    : count > 3239 ? 'Cao Thủ ( 50 ⭐ )'
    : count > 3219 ? 'Cao Thủ ( 49 ⭐ )'
    : count > 3199 ? 'Cao Thủ ( 48 ⭐ )'
    : count > 3179 ? 'Cao Thủ ( 47 ⭐ )'
    : count > 3159 ? 'Cao Thủ ( 46 ⭐ )'
    : count > 3139 ? 'Cao Thủ ( 45 ⭐ )'
    : count > 3119 ? 'Cao Thủ ( 44 ⭐ )'
    : count > 3099 ? 'Cao Thủ ( 43 ⭐ )'
    : count > 3079 ? 'Cao Thủ ( 42 ⭐ )'
    : count > 3059 ? 'Cao Thủ ( 41 ⭐ )'
    : count > 3039 ? 'Cao Thủ ( 40 ⭐ )'
    : count > 3019 ? 'Cao Thủ ( 39 ⭐ )'
    : count > 2999 ? 'Cao Thủ ( 38 ⭐ )'
    : count > 2979 ? 'Cao Thủ ( 37 ⭐ )'
    : count > 2959 ? 'Cao Thủ ( 36 ⭐ )'
    : count > 2939 ? 'Cao Thủ ( 35 ⭐ )'
    : count > 2919 ? 'Cao Thủ ( 34 ⭐ )'
    : count > 2899 ? 'Cao Thủ ( 33 ⭐ )'
    : count > 2879 ? 'Cao Thủ ( 32 ⭐ )'
    : count > 2859 ? 'Cao Thủ ( 31 ⭐ )'
    : count > 2839 ? 'Cao Thủ ( 30 ⭐ )'
    : count > 2819 ? 'Cao Thủ ( 29 ⭐ )'
    : count > 2799 ? 'Cao Thủ ( 28 ⭐ )'
    : count > 2779 ? 'Cao Thủ ( 27 ⭐ )'
    : count > 2759 ? 'Cao Thủ ( 26 ⭐ )'
    : count > 2739 ? 'Cao Thủ ( 25 ⭐ )'
    : count > 2719 ? 'Cao Thủ ( 24 ⭐ )'
    : count > 2699 ? 'Cao Thủ ( 23 ⭐ )'
    : count > 2679 ? 'Cao Thủ ( 22 ⭐ )'
    : count > 2659 ? 'Cao Thủ ( 21 ⭐ )'
    : count > 2639 ? 'Cao Thủ ( 20 ⭐ )'
    : count > 2619 ? 'Cao Thủ ( 19 ⭐ )'
    : count > 2599 ? 'Cao Thủ ( 18 ⭐ )'
    : count > 2579 ? 'Cao Thủ ( 17 ⭐ )'
    : count > 2559 ? 'Cao Thủ ( 16 ⭐ )'
    : count > 2539 ? 'Cao Thủ ( 15 ⭐ )'
    : count > 2519 ? 'Cao Thủ ( 14 ⭐ )'
    : count > 2499 ? 'Cao Thủ ( 13 ⭐ )'
    : count > 2479 ? 'Cao Thủ ( 12 ⭐ )'
    : count > 2459 ? 'Cao Thủ ( 11 ⭐ )'
    : count > 2439 ? 'Cao Thủ ( 10 ⭐ )'
    : count > 2419 ? 'Cao Thủ ( 9 ⭐ )'
    : count > 2399 ? 'Cao Thủ ( 8 ⭐ )'
    : count > 2379 ? 'Cao Thủ ( 7 ⭐ )'
    : count > 2359 ? 'Cao Thủ ( 6 ⭐ )'
    : count > 2339 ? 'Cao Thủ ( 5 ⭐ )'
    : count > 2319 ? 'Cao Thủ ( 4 ⭐ )'
    : count > 2999 ? 'Cao Thủ ( 3 ⭐ )'
    : count > 2279 ? 'Cao Thủ ( 2 ⭐ )'
    : count > 2259 ? 'Cao Thủ ( 1 ⭐ )'
    : count > 2239 ? 'Tinh Anh I ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 2219 ? 'Tinh Anh I ( ⭐ ⭐ ⭐ ⭐)'
    : count > 2199 ? 'Tinh Anh I ( ⭐ ⭐ ⭐ )'
    : count > 2179 ? 'Tinh Anh I ( ⭐ ⭐ )'
    : count > 2159 ? 'Tinh Anh I ( ⭐ )'
    : count > 2139 ? 'Tinh Anh II ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 2119 ? 'Tinh Anh II ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 2099 ? 'Tinh Anh II ( ⭐ ⭐ ⭐ )'
    : count > 2079 ? 'Tinh Anh II ( ⭐ ⭐ )'
    : count > 2059 ? 'Tinh Anh II ( ⭐ )'
    : count > 2039 ? 'Tinh Anh III ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 2019 ? 'Tinh Anh III ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 1999 ? 'Tinh Anh III ( ⭐ ⭐ ⭐ )'
    : count > 1979 ? 'Tinh Anh III ( ⭐ ⭐ )'
    : count > 1959 ? 'Tinh Anh III ( ⭐ )'
    : count > 1939 ? 'Tinh Anh IV ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 1919 ? 'Tinh Anh IV ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 1899 ? 'Tinh Anh IV ( ⭐ ⭐ ⭐ )'
    : count > 1879 ? 'Tinh Anh IV ( ⭐ ⭐ )'
    : count > 1859 ? 'Tinh Anh IV ( ⭐ )'
    : count > 1839 ? 'Tinh Anh V ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 1819 ? 'Tinh Anh V ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 1799 ? 'Tinh Anh V ( ⭐ ⭐ ⭐ )'
    : count > 1779 ? 'Tinh Anh V ( ⭐ ⭐ )'
    : count > 1759 ? 'Tinh Anh V ( ⭐ )'
    : count > 1739 ? 'Kim Cương I ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 1719 ? 'Kim Cương I ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 1699 ? 'Kim Cương I ( ⭐ ⭐ ⭐ )'
    : count > 1679 ? 'Kim Cương I ( ⭐ ⭐ )'
    : count > 1659 ? 'Kim Cương I ( ⭐ )'
    : count > 1639 ? 'Kim Cương II ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 1619 ? 'Kim Cương II ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 1599 ? 'Kim Cương II ( ⭐ ⭐ ⭐ )'
    : count > 1579 ? 'Kim Cương II ( ⭐ ⭐ )'
    : count > 1559 ? 'Kim Cương II ( ⭐ )'
    : count > 1539 ? 'Kim Cương III ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 1519 ? 'Kim Cương III ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 1499 ? 'Kim Cương III ( ⭐ ⭐ ⭐ )'
    : count > 1479 ? 'Kim Cương III ( ⭐ ⭐ )'
    : count > 1459 ? 'Kim Cương III ( ⭐ )'
    : count > 1439 ? 'Kim Cương IV ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 1419 ? 'Kim Cương IV ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 1399 ? 'Kim Cương IV ( ⭐ ⭐ ⭐ )'
    : count > 1379 ? 'Kim Cương IV ( ⭐ ⭐ )'
    : count > 1359 ? 'Kim Cương IV ( ⭐ )'
    : count > 1339 ? 'Kim Cương V ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 1319 ? 'Kim Cương V ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 1299 ? 'Kim Cương V ( ⭐ ⭐ ⭐ )'
    : count > 1279 ? 'Kim Cương V ( ⭐ ⭐ )'
    : count > 1259 ? 'Kim Cương V ( ⭐ )'
    : count > 1239 ? 'Bạch Kim I ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 1219 ? 'Bạch Kim I ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 1199 ? 'Bạch Kim I ( ⭐ ⭐ ⭐ )'
    : count > 1179 ? 'Bạch Kim I ( ⭐ ⭐ )'
    : count > 1159 ? 'Bạch Kim I ( ⭐ )'
    : count > 1139 ? 'Bạch Kim II ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 1119 ? 'Bạch Kim II ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 1099 ? 'Bạch Kim II ( ⭐ ⭐ ⭐ )'
    : count > 1079 ? 'Bạch Kim II ( ⭐ ⭐ )'
    : count > 1059 ? 'Bạch Kim II ( ⭐ )'
    : count > 1039 ? 'Bạch Kim III ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 1019 ? 'Bạch Kim III ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 999 ? 'Bạch Kim III ( ⭐ ⭐ ⭐ )'
    : count > 979 ? 'Bạch Kim III ( ⭐ ⭐ )'
    : count > 959 ? 'Bạch Kim III ( ⭐ )'
    : count > 939 ? 'Bạch Kim IV ( ⭐ ⭐ ⭐ ⭐ ⭐)'
    : count > 919 ? 'Bạch Kim IV ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 899 ? 'Bạch Kim IV ( ⭐ ⭐ ⭐ )'
    : count > 879 ? 'Bạch Kim IV ( ⭐ ⭐ )'
    : count > 859 ? 'Bạch Kim IV ( ⭐ )'
    : count > 839 ? 'Bạch Kim V ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 819 ? 'Bạch Kim V ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 799 ? 'Bạch Kim V ( ⭐ ⭐ ⭐ )'
    : count > 779 ? 'Bạch Kim V ( ⭐ ⭐ )'
    : count > 759 ? 'Bạch Kim V ( ⭐ )'
    : count > 739 ? 'Vàng I ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 719 ? 'Vàng I ( ⭐ ⭐ ⭐ )'
    : count > 699 ? 'Vàng I ( ⭐ ⭐ )'
    : count > 679 ? 'Vàng I ( ⭐ )'
    : count > 659 ? 'Vàng II ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 639 ? 'Vàng II ( ⭐ ⭐ ⭐ )'
    : count > 619 ? 'Vàng II ( ⭐ ⭐ )'
    : count > 599 ? 'Vàng II ( ⭐ )'
    : count > 579 ? 'Vàng III ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 559 ? 'Vàng III ( ⭐ ⭐ ⭐ )'
    : count > 539 ? 'Vàng III ( ⭐ ⭐ )'
    : count > 519 ? 'Vàng III ( ⭐ )'
    : count > 499 ? 'Vàng IV ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 479 ? 'Vàng IV ( ⭐ ⭐ ⭐ )'
    : count > 459 ? 'Vàng IV ( ⭐ ⭐ )'
    : count > 439 ? 'Vàng IV ( ⭐ )'
    : count > 419 ? 'Bạc I ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 399 ? 'Bạc I ( ⭐ ⭐ ⭐ )'
    : count > 379 ? 'Bạc I ( ⭐ ⭐ )'
    : count > 359 ? 'Bạc I ( ⭐ )'
    : count > 339 ? 'Bạc II ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 319 ? 'Bạc II ( ⭐ ⭐ ⭐ )'
    : count > 299 ? 'Bạc II ( ⭐ ⭐ )'
    : count > 279 ? 'Bạc II ( ⭐ )'
    : count > 259 ? 'Bạc III ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 239 ? 'Bạc III ( ⭐ ⭐ ⭐ )'
    : count > 219 ? 'Bạc III ( ⭐ ⭐ )'
    : count > 199 ? 'Bạc III ( ⭐ )'
    : count > 179 ? 'Đồng I ( ⭐ ⭐ ⭐ )'
    : count > 159 ? 'Đồng I ( ⭐ ⭐ )'
    : count > 139 ? 'Đồng I ( ⭐ )'
    : count > 119 ? 'Đồng II ( ⭐ ⭐ ⭐ )'
    : count > 99 ? 'Đồng II ( ⭐ ⭐ )'
    : count > 79 ? 'Đồng II ( ⭐ )'
    : count > 59 ? 'Đồng III ( ⭐ ⭐ ⭐ )'
    : count > 39 ? 'Đồng III ( ⭐ ⭐ )'
    : count > 19 ? 'Đồng III ( ⭐ )'
    : 'Đồng III'
}
const getRankBox = count => {
    return count > 42599 ? 'Thách Đấu ( ⭐ )'
    : count > 32599 ? 'Chiến Tướng ( ⭐ )'
    : count > 32399 ? 'Cao Thủ ( 50 ⭐ )'
    : count > 32199 ? 'Cao Thủ ( 49 ⭐ )'
    : count > 31999 ? 'Cao Thủ ( 48 ⭐ )'
    : count > 31799 ? 'Cao Thủ ( 47 ⭐ )'
    : count > 31599 ? 'Cao Thủ ( 46 ⭐ )'
    : count > 31399 ? 'Cao Thủ ( 45 ⭐ )'
    : count > 31199 ? 'Cao Thủ ( 44 ⭐ )'
    : count > 30999 ? 'Cao Thủ ( 43 ⭐ )'
    : count > 30799 ? 'Cao Thủ ( 42 ⭐ )'
    : count > 30599 ? 'Cao Thủ ( 41 ⭐ )'
    : count > 30399 ? 'Cao Thủ ( 40 ⭐ )'
    : count > 30199 ? 'Cao Thủ ( 39 ⭐ )'
    : count > 29999 ? 'Cao Thủ ( 38 ⭐ )'
    : count > 29799 ? 'Cao Thủ ( 37 ⭐ )'
    : count > 29599 ? 'Cao Thủ ( 36 ⭐ )'
    : count > 29399 ? 'Cao Thủ ( 35 ⭐ )'
    : count > 29199 ? 'Cao Thủ ( 34 ⭐ )'
    : count > 28999 ? 'Cao Thủ ( 33 ⭐ )'
    : count > 28799 ? 'Cao Thủ ( 32 ⭐ )'
    : count > 28599 ? 'Cao Thủ ( 31 ⭐ )'
    : count > 28399 ? 'Cao Thủ ( 30 ⭐ )'
    : count > 28199 ? 'Cao Thủ ( 29 ⭐ )'
    : count > 27999 ? 'Cao Thủ ( 28 ⭐ )'
    : count > 27799 ? 'Cao Thủ ( 27 ⭐ )'
    : count > 27599 ? 'Cao Thủ ( 26 ⭐ )'
    : count > 27399 ? 'Cao Thủ ( 25 ⭐ )'
    : count > 27199 ? 'Cao Thủ ( 24 ⭐ )'
    : count > 26999 ? 'Cao Thủ ( 23 ⭐ )'
    : count > 26799 ? 'Cao Thủ ( 22 ⭐ )'
    : count > 26599 ? 'Cao Thủ ( 21 ⭐ )'
    : count > 26399 ? 'Cao Thủ ( 20 ⭐ )'
    : count > 26199 ? 'Cao Thủ ( 19 ⭐ )'
    : count > 25999 ? 'Cao Thủ ( 18 ⭐ )'
    : count > 25799 ? 'Cao Thủ ( 17 ⭐ )'
    : count > 25599 ? 'Cao Thủ ( 16 ⭐ )'
    : count > 25399 ? 'Cao Thủ ( 15 ⭐ )'
    : count > 25199 ? 'Cao Thủ ( 14 ⭐ )'
    : count > 24999 ? 'Cao Thủ ( 13 ⭐ )'
    : count > 24799 ? 'Cao Thủ ( 12 ⭐ )'
    : count > 24599 ? 'Cao Thủ ( 11 ⭐ )'
    : count > 24399 ? 'Cao Thủ ( 10 ⭐ )'
    : count > 24199 ? 'Cao Thủ ( 9 ⭐ )'
    : count > 23999 ? 'Cao Thủ ( 8 ⭐ )'
    : count > 23799 ? 'Cao Thủ ( 7 ⭐ )'
    : count > 23599 ? 'Cao Thủ ( 6 ⭐ )'
    : count > 23399 ? 'Cao Thủ ( 5 ⭐ )'
    : count > 23199 ? 'Cao Thủ ( 4 ⭐ )'
    : count > 29999 ? 'Cao Thủ ( 3 ⭐ )'
    : count > 22799 ? 'Cao Thủ ( 2 ⭐ )'
    : count > 22599 ? 'Cao Thủ ( 1 ⭐ )'
    : count > 22399 ? 'Tinh Anh I ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 22199 ? 'Tinh Anh I ( ⭐ ⭐ ⭐ ⭐)'
    : count > 21999 ? 'Tinh Anh I ( ⭐ ⭐ ⭐ )'
    : count > 21799 ? 'Tinh Anh I ( ⭐ ⭐ )'
    : count > 21599 ? 'Tinh Anh I ( ⭐ )'
    : count > 21399 ? 'Tinh Anh II ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 21199 ? 'Tinh Anh II ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 20999 ? 'Tinh Anh II ( ⭐ ⭐ ⭐ )'
    : count > 20799 ? 'Tinh Anh II ( ⭐ ⭐ )'
    : count > 20599 ? 'Tinh Anh II ( ⭐ )'
    : count > 20399 ? 'Tinh Anh III ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 20199 ? 'Tinh Anh III ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 19999 ? 'Tinh Anh III ( ⭐ ⭐ ⭐ )'
    : count > 19799 ? 'Tinh Anh III ( ⭐ ⭐ )'
    : count > 19599 ? 'Tinh Anh III ( ⭐ )'
    : count > 19399 ? 'Tinh Anh IV ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 19199 ? 'Tinh Anh IV ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 18999 ? 'Tinh Anh IV ( ⭐ ⭐ ⭐ )'
    : count > 18799 ? 'Tinh Anh IV ( ⭐ ⭐ )'
    : count > 18599 ? 'Tinh Anh IV ( ⭐ )'
    : count > 18399 ? 'Tinh Anh V ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 18199 ? 'Tinh Anh V ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 17999 ? 'Tinh Anh V ( ⭐ ⭐ ⭐ )'
    : count > 17799 ? 'Tinh Anh V ( ⭐ ⭐ )'
    : count > 17599 ? 'Tinh Anh V ( ⭐ )'
    : count > 17399 ? 'Kim Cương I ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 17199 ? 'Kim Cương I ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 16999 ? 'Kim Cương I ( ⭐ ⭐ ⭐ )'
    : count > 16799 ? 'Kim Cương I ( ⭐ ⭐ )'
    : count > 16599 ? 'Kim Cương I ( ⭐ )'
    : count > 16399 ? 'Kim Cương II ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 16199 ? 'Kim Cương II ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 15999 ? 'Kim Cương II ( ⭐ ⭐ ⭐ )'
    : count > 15799 ? 'Kim Cương II ( ⭐ ⭐ )'
    : count > 15599 ? 'Kim Cương II ( ⭐ )'
    : count > 15399 ? 'Kim Cương III ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 15199 ? 'Kim Cương III ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 14999 ? 'Kim Cương III ( ⭐ ⭐ ⭐ )'
    : count > 14799 ? 'Kim Cương III ( ⭐ ⭐ )'
    : count > 14599 ? 'Kim Cương III ( ⭐ )'
    : count > 14399 ? 'Kim Cương IV ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 14199 ? 'Kim Cương IV ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 13999 ? 'Kim Cương IV ( ⭐ ⭐ ⭐ )'
    : count > 13799 ? 'Kim Cương IV ( ⭐ ⭐ )'
    : count > 13599 ? 'Kim Cương IV ( ⭐ )'
    : count > 13399 ? 'Kim Cương V ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 13199 ? 'Kim Cương V ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 12999 ? 'Kim Cương V ( ⭐ ⭐ ⭐ )'
    : count > 12799 ? 'Kim Cương V ( ⭐ ⭐ )'
    : count > 12599 ? 'Kim Cương V ( ⭐ )'
    : count > 12399 ? 'Bạch Kim I ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 12199 ? 'Bạch Kim I ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 11999 ? 'Bạch Kim I ( ⭐ ⭐ ⭐ )'
    : count > 11799 ? 'Bạch Kim I ( ⭐ ⭐ )'
    : count > 11599 ? 'Bạch Kim I ( ⭐ )'
    : count > 11399 ? 'Bạch Kim II ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 11199 ? 'Bạch Kim II ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 10999 ? 'Bạch Kim II ( ⭐ ⭐ ⭐ )'
    : count > 10799 ? 'Bạch Kim II ( ⭐ ⭐ )'
    : count > 10599 ? 'Bạch Kim II ( ⭐ )'
    : count > 10399 ? 'Bạch Kim III ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 10199 ? 'Bạch Kim III ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 9999 ? 'Bạch Kim III ( ⭐ ⭐ ⭐ )'
    : count > 9799 ? 'Bạch Kim III ( ⭐ ⭐ )'
    : count > 9599 ? 'Bạch Kim III ( ⭐ )'
    : count > 9399 ? 'Bạch Kim IV ( ⭐ ⭐ ⭐ ⭐ ⭐)'
    : count > 9199 ? 'Bạch Kim IV ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 8999 ? 'Bạch Kim IV ( ⭐ ⭐ ⭐ )'
    : count > 8799 ? 'Bạch Kim IV ( ⭐ ⭐ )'
    : count > 8599 ? 'Bạch Kim IV ( ⭐ )'
    : count > 8399 ? 'Bạch Kim V ( ⭐ ⭐ ⭐ ⭐ ⭐ )'
    : count > 8199 ? 'Bạch Kim V ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 7999 ? 'Bạch Kim V ( ⭐ ⭐ ⭐ )'
    : count > 7799 ? 'Bạch Kim V ( ⭐ ⭐ )'
    : count > 7599 ? 'Bạch Kim V ( ⭐ )'
    : count > 7399 ? 'Vàng I ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 7199 ? 'Vàng I ( ⭐ ⭐ ⭐ )'
    : count > 6999 ? 'Vàng I ( ⭐ ⭐ )'
    : count > 6799 ? 'Vàng I ( ⭐ )'
    : count > 6599 ? 'Vàng II ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 6399 ? 'Vàng II ( ⭐ ⭐ ⭐ )'
    : count > 6199 ? 'Vàng II ( ⭐ ⭐ )'
    : count > 5999 ? 'Vàng II ( ⭐ )'
    : count > 5799 ? 'Vàng III ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 5599 ? 'Vàng III ( ⭐ ⭐ ⭐ )'
    : count > 5399 ? 'Vàng III ( ⭐ ⭐ )'
    : count > 5199 ? 'Vàng III ( ⭐ )'
    : count > 4999 ? 'Vàng IV ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 4799 ? 'Vàng IV ( ⭐ ⭐ ⭐ )'
    : count > 4599 ? 'Vàng IV ( ⭐ ⭐ )'
    : count > 4939 ? 'Vàng IV ( ⭐ )'
    : count > 4199 ? 'Bạc I ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 3999 ? 'Bạc I ( ⭐ ⭐ ⭐ )'
    : count > 3799 ? 'Bạc I ( ⭐ ⭐ )'
    : count > 3599 ? 'Bạc I ( ⭐ )'
    : count > 3399 ? 'Bạc II ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 3199 ? 'Bạc II ( ⭐ ⭐ ⭐ )'
    : count > 2999 ? 'Bạc II ( ⭐ ⭐ )'
    : count > 2799 ? 'Bạc II ( ⭐ )'
    : count > 2599 ? 'Bạc III ( ⭐ ⭐ ⭐ ⭐ )'
    : count > 2399 ? 'Bạc III ( ⭐ ⭐ ⭐ )'
    : count > 2199 ? 'Bạc III ( ⭐ ⭐ )'
    : count > 1999 ? 'Bạc III ( ⭐ )'
    : count > 1799 ? 'Đồng I ( ⭐ ⭐ ⭐ )'
    : count > 1599 ? 'Đồng I ( ⭐ ⭐ )'
    : count > 1399 ? 'Đồng I ( ⭐ )'
    : count > 1199 ? 'Đồng II ( ⭐ ⭐ ⭐ )'
    : count > 999 ? 'Đồng II ( ⭐ ⭐ )'
    : count > 799 ? 'Đồng II ( ⭐ )'
    : count > 599 ? 'Đồng III ( ⭐ ⭐ ⭐ )'
    : count > 399 ? 'Đồng III ( ⭐ ⭐ )'
    : count > 199 ? 'Đồng III ( ⭐ )'
    : 'Đồng III'
}


module.exports.run = async function ({ api, event, args, Users, Threads }) {
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/1.png`;
  let pathAvata = __dirname + `/cache/2.png`;

   // const fs = global.nodemodule['fs'];
    const { messageID, threadID, senderID, mentions } = event;
    if (args[0] == 'topsv') {
       const { readdirSync, readFileSync } = require('fs-extra');
       const dir = __dirname + '/count-by-thread/';
       const r_dir = readdirSync(dir);
       const send = text => api.sendMessage(text, threadID);
       const compare = k => (a, b) => (a[k] > b[k] ? 1: a[k] > b[k] ? -1: 0)*-1;
       var array = [];
       for (const file of r_dir) {
          const data = JSON.parse(readFileSync(dir + file));
          const idf = file.replace('.json', '');
          var arrt = [];
          for (const [a, b] of Object.entries(data)) arrt.push({
              threadID: idf,
              userID: a,
              message: b
             });
       ;
       arrt.sort(compare('message'));
       array.push(arrt[0]);};
       array.sort(compare('message'));
       var text = '';
       for (var i = 0; i < 10; i++) {
           const user = await Users.getData(array[i].userID) || {};
           const thread = await Threads.getData(array[i].threadID) || {thradInfo:{}};
           text += `🏆 𝗧𝗼𝗽 ${i+1} : ${user.name || null}\n🏅 𝗧𝗶𝗻 𝗻𝗵𝗮̆́𝗻 : ${array[i].message}\n🎖️ 𝗥𝗮𝗻𝗸 : ${array[i].message >= 4259 ? 'Thách Đấu ( ⭐ )': getRankName(array[i].message)}\n🥇 𝗕𝗼𝘅 : ${thread.threadInfo.threadName || null}\n🥈 𝗨𝗶𝗱 : ${array[i].userID}\n🥉 𝗧𝗶𝗱 : ${array[i].threadID}\n\n`;
       };
       send(text);
    };
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const query = args[0] ? args[0].toLowerCase() : '';
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 1;
    }
    var storage = [],
        msg = '';
    if (query == 'all') {
        const allThread = await api.getThreadInfo(threadID) || { participantIDs: [] };
        for (id of allThread.participantIDs) {
            if (!getThreadJSON.hasOwnProperty(id)) {
                getThreadJSON[id] = 0;
            }
        }
    }
    for (const id in getThreadJSON) {
        const name = await Users.getNameUser(id);
        storage.push({ id, name, count: getThreadJSON[id] });
    }
    storage.sort((a, b) => {
        if (a.count > b.count) return -1;
        else if (a.count < b.count) return 1;
       // else return a.name.localeCompare(b.name);
    });
    if (query == 'all') {
        let count = 1;
        msg += '💮=〘  𝐂𝐇𝐄𝐂𝐊 𝐀𝐋𝐋 〙=💮\n━━━━━━━━━━━━━━━';
        const topTD = getTopTD(storage);
        for (const user of storage) {
            const infoTD = topTD.find(index => +index.userID == +user.id) || false;
            const rank_name = !infoTD ? getRankName(user.count): infoTD.rank;
            msg += `\n${count++}.🐼-> ${user.name} với ${user.count} tin nhắn\n『 🌸 』➝ Rank : ${rank_name}\n-----------------------------------------`;
        };
        return api.sendMessage({body: msg, attachment: await responseStream(' https://i.postimg.cc/RFGgRmPb/rankall.jpg')}, threadID)
    } else if (query == 'best') {
    var txt, count = 0;
    const topTD = getTopTD(storage);
    if (topTD.length == 0) return api.sendMessage(`『 🌸 』➝ 𝗡𝗵𝗼́𝗺 𝗖𝗵𝘂̛𝗮 𝗖𝗼́ 𝗔𝗶 𝗧𝗵𝗮́𝗰𝗵 Đ𝗮̂́𝘂 , 𝗣𝗵𝗮̉𝗶 𝗧𝘂̛𝗼̛𝗻𝗴 𝗧𝗮́𝗰 𝗧𝗿𝗲̂𝗻 𝗥𝗮𝗻𝗸 𝗖𝗵𝗶𝗲̂́𝗻 𝗧𝘂̛𝗼̛́𝗻𝗴 ( 3260 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 ) 𝗩𝗮̀ 𝗡𝗮̆̀𝗺 𝗧𝗿𝗼𝗻𝗴 𝗧𝗼𝗽 𝟱 𝗧𝘂̛𝗼̛𝗻𝗴 𝗧𝗮́𝗰 𝗠𝗼̛́𝗶 Đ𝘂̛𝗼̛̣𝗰 𝗫𝗲̂́𝗽 𝗛𝗮̣𝗻𝗴`, threadID, messageID);
    else {
        txt = '💮===〘 𝗧𝗼𝗽 𝟱 𝗖𝗵𝗶𝗲̂́𝗻 𝗧𝗵𝗮̂̀𝗻 𝗧𝗵𝗮́𝗰𝗵 Đ𝗮̂́𝘂 〙===💮\n━━━━━━━━━━━━━━━\n'.toUpperCase();
    for (const info of topTD) txt += `🏆 𝗧𝗼𝗽 ${++count} : ${info.name}\n🏅 𝗧𝗶𝗻 𝗻𝗵𝗮̆́𝗻 : ${info.count}\n🎖️ 𝗥𝗮𝗻𝗸 : ${info.rank}\n-----------------------------------------`;
         return api.sendMessage(txt, threadID);
    };
      }else if (query == 'box') {

        var option = parseInt(args[1] || 10); 
      var threadList = [];  
    try {
          data = await api.getThreadList(option + 20, null, ["INBOX"]);
    }
    catch (e) {
      console.log(e);
    }

    for (const thread of data) {


      if (thread.isGroup == true) {
          const IDthread = path + thread.threadID + '.json';
          const dataBox = JSON.parse(fs.readFileSync(IDthread)) || {}
     let sum = 0;
for (let i = 0; i < Object.keys(dataBox).length; i++) {
    sum += Object.values(dataBox)[i];
}
        threadList.push({ threadName: thread.name, threadID: thread.threadID, messageCount: sum });
                                  }

    threadList.sort((a, b) => {
      if (a.messageCount > b.messageCount) return -1;
            if (a.messageCount < b.messageCount) return 1;
    })
      }
         var i = 0;
    for(const dataThread of threadList) {
      if (i == option) break;
      msg += `🏅 𝗧𝗼𝗽 ${i+1} : ${(dataThread.threadName)||"Không tên"}\n💎 𝗧𝗶𝗱 : [ ${dataThread.threadID} ]\n💬 𝗦𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 : ${dataThread.messageCount} tin nhắn\n🏆 𝗥𝗮𝗻𝗸 𝗻𝗵𝗼́𝗺 : ${getRankBox(dataThread.messageCount)}\n👤 User name: ${storage[0].name}\n🫂 User id: ${storage[0].id}\n${getRankName(storage[0].count)}\n\n`;
      i+=1;
    }
    return api.sendMessage(`💮==〘 𝗧𝗼𝗽 𝟭𝟬 𝗻𝗵𝗼́𝗺 𝗰𝗼́ 𝗰𝗵𝗶̉ 𝘀𝗼̂́ 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁 〙==💮\n━━━━━━━━ ⋆ ⭐ ⋆ ━━━━━━━━\n『 🌸 』➝ ${msg}\n━━━━━━━━ ⋆ ⭐ ⋆ ━━━━━━━━`, threadID, messageID);

//console.log(sum);
        //return api.sendMessage(JSON.stringify(sum),threadID)
      }
    else if (query == 'top') {
       let threadInfo = await api.getThreadInfo(event.threadID);
       let getAvatarOne = (await axios.get(`${threadInfo.imageSrc}`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/cJZCB2y.png`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));
    /*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

        let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 80, 110, 285, 285);
       Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `30px Play-Bold`;
  ctx.fillStyle = "#00FFFF";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`👤 Top 1 : ${storage[0].name} -> ${getRankName(storage[0].count)}`, 445, 174);
  ctx.fillText(`👤 Top 2 : ${storage[1].name} -> ${getRankName(storage[1].count)}`, 445, 218);
  ctx.fillText(`👤 Top 3 : ${storage[2].name} -> ${getRankName(storage[2].count)}`, 445, 262);
  ctx.fillText(`👤 Top 4 : ${storage[3].name} -> ${getRankName(storage[3].count)}`, 445, 306);
  ctx.fillText(`👤 Top 5 : ${storage[4].name} -> ${getRankName(storage[4].count)}`, 445, 350);
       ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);

  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
     }

    else if (query == 'help') {
const msg = '🐼-> !𝗥𝗮𝗻𝗸 𝗯𝗲𝘀𝘁: 𝗫𝗲𝗺 𝘁𝗼𝗽 𝟱 𝗧𝗵𝗮́𝗰𝗵 Đ𝗮̂́𝘂\n🐼-> !𝗥𝗮𝗻𝗸 𝗮𝗹𝗹: 𝗫𝗲𝗺 𝘁𝗼𝗽 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗰𝘂̉𝗮 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴\n🐼-> !𝗥𝗮𝗻𝗸 𝘁𝗼𝗽: 𝗧𝗮̣𝗼 𝗮̉𝗻𝗵 𝗴𝗼̂̀𝗺 𝘁𝗼𝗽 𝟱 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁 𝗻𝗵𝗼́𝗺\n🐼-> !𝗥𝗮𝗻𝗸 𝗯𝗼𝘅: 𝗫𝗲𝗺 𝘁𝗼𝗽 𝟭𝟬 𝗯𝗼𝘅 𝗰𝗼́ 𝗰𝗵𝗶̉ 𝘀𝗼̂́ 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁\n━━━━━━━━━━━━━━━\n『 🌸 』➝ Đ𝗼̂̀𝗻𝗴 ( 0 tin nhắn )\n『 🌸 』➝ 𝗕𝗮̣𝗰 ( 200 tin nhắn )\n『 🌸 』➝ 𝗩𝗮̀𝗻𝗴 ( 440 tin nhắn )\n『 🌸 』➝ 𝗕𝗮̣𝗰𝗵 𝗞𝗶𝗺 ( 760 tin nhắn )\n『 🌸 』➝ 𝗞𝗶𝗺 𝗖𝘂̛𝗼̛𝗻𝗴 ( 1260 tin nhắn )\n『 🌸 』➝ 𝗧𝗶𝗻𝗵 𝗔𝗻𝗵 ( 1760 tin nhắn )\n『 🌸 』➝ 𝗖𝗮𝗼 𝗧𝗵𝘂̉ ( 2260 tin nhắn )\n『 🌸 』➝ 𝗖𝗵𝗶𝗲̂́𝗻 𝗧𝘂̛𝗼̛́𝗻𝗴 ( 3260 tin nhắn )\n『 🌸 』➝ 𝗥𝗮𝗻𝗸 𝗧𝗵𝗮́𝗰𝗵 Đ𝗮̂́𝘂 𝘀𝗲̃ 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗶́𝗻𝗵 𝘁𝗵𝗲𝗼 𝗰𝗵𝗶̉ 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝘁𝗶́𝗻𝗵 𝘁𝗵𝗲𝗼 𝘁𝗼𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗿𝗲̂𝗻 𝗿𝗮𝗻𝗸 𝗖𝗵𝗶𝗲̂́𝗻 𝗧𝘂̛𝗼̛́𝗻𝗴 ( 3260 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 ) 𝗻𝗵𝘂̛𝗻𝗴 𝗰𝗵𝗶̉ 𝗰𝗼́ 𝟱 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗼́ 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁 𝘁𝗿𝗲̂𝗻 3260 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗼̛́𝗶 đ𝗮̣𝘁 𝗧𝗵𝗮́𝗰𝗵 Đ𝗮̂́𝘂\n━━━━━━━━━━━━━━━\n『 🌸 』➝ 𝗦𝗮̆́𝗽 𝘅𝗲̂́𝗽 𝘁𝗵𝗲𝗼 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝘁𝘂̛̀ đ𝗼̂̀𝗻𝗴 𝗜𝗜𝗜 -> 𝗖𝗵𝗶𝗲̂́𝗻 𝗧𝘂̛𝗼̛́𝗻𝗴 𝗻𝗵𝘂̛ 𝗿𝗮𝗻𝗸 𝗟𝗶𝗲̂𝗻 𝗤𝘂𝗮̂𝗻 𝗠𝗼𝗯𝗶𝗹𝗲\n『 🌸 』➝ 𝗠𝗼̂̃𝗶 𝟮𝟬 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗯𝗮̣𝗻 𝘀𝗲̃ đ𝘂̛𝗼̛̣𝗰 𝟭⭐\n『 🌸 』➝ 𝗠𝗼̂̃𝗶 𝟮𝟬𝟬 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺 , 𝗻𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝘀𝗲̃ đ𝘂̛𝗼̛̣𝗰 𝟭 ⭐'

        return api.sendMessage({body: msg, attachment: await responseStream('https://i.postimg.cc/rpHs3nhy/rankhelp.jpg')}, threadID, messageID);
    } else if (!query) {
        const userID = event.type == "message_reply" && !event.args[1] ? event.messageReply.senderID : !event.args[1] ? event.senderID : Object.keys(event.mentions)[0];
        const index = storage.findIndex(index => +index.id == +userID);
        const topTD = getTopTD(storage);
        const infoTD = topTD.find(index => +index.userID == +userID) || false;
            const rank_name = !infoTD ? getRankName(storage[index].count): infoTD.rank;
        const msg = ` 💮====〘 RANK 〙====💮\n━━━━━━━━━━━━━━━\n🏆 𝗧𝗼𝗽 𝗰𝘂̉𝗮 ${userID == senderID ? '𝗯𝗮̣𝗻' : storage[index].name}: ${index + 1}\n💬 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${storage[index].count}\n🏅 𝗥𝗮𝗻𝗸: ${rank_name}\n-----------------------------------------\n❔ [ 𝗵𝗲𝗹𝗽 ] , [ 𝗮𝗹𝗹 ] , [ 𝘁𝗼𝗽 ]  , [ 𝗯𝗼𝘅 ] , [ 𝗯𝗲𝘀𝘁 ]\n🔷 𝗠𝗼̂̃𝗶 𝟮𝟬 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗯𝗮̣𝗻 𝘀𝗲̃ đ𝘂̛𝗼̛̣𝗰 𝟭⭐`;
     const rank_image = !infoTD ? await responseStream(imagesRank(storage[index].count)): await responseStream(infoTD.image);
   return api.sendMessage({
        body: msg,
        attachment: rank_image
    }, threadID, messageID);
    };
};
function imagesRank(exp) {
    var url;
if (exp > 0) url = 'https://i.imgur.com/QGBpxNB.png';
if (exp > 199) url = 'https://i.imgur.com/6wnfHSI.png';
if (exp > 439) url = 'https://i.imgur.com/pFynHX0.png'; 
if (exp > 759) url = 'https://i.imgur.com/pmTuUCL.png'; 
if (exp > 1259) url = 'https://i.imgur.com/6CwDnm0.png'; 
if (exp > 1759) url = 'https://i.imgur.com/JdXkNJ5.png';
if (exp > 2259) url = 'https://i.imgur.com/NKd6wIr.png'; 
if (exp > 3259) url = 'https://i.imgur.com/FUiDCRo.png'; 
return url;
};
async function responseStream(url){
    const axios = require('axios');
    const stream = (await axios.get(url, {
        responseType: 'stream'
    })).data;
    return stream;
};
function prefix(a){
    const z = global.data.threadData(a) || {};
    return z.PREFIX || global.config.PREFIX;
};
function getTopTD(a) {
         const newArr = [];
         const fil = a.filter(i => i.count >= 4259);
         if (fil.length == 0) return [];
         const compare = k => (a, b) => (a[k] > b[k] ? 1: a[k] > b[k] ? -1: 0)*-1;
        fil.sort(compare('count'));
         for (var i = 0; i < (fil.length <5 ? fil.length: 5); i++) newArr.push({
             userID: fil[i].id,
             name: fil[i].name,
             count: fil[i].count,
             rank: 'Thách Đấu ( ⭐ )',
             image: 'https://i.imgur.com/d7tITHm.png'
         });
        return newArr;
    };