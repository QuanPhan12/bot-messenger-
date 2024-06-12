const axios = require("axios");
const moment = require("moment-timezone");

const linkapi = "https://vitieubao.click/capcut";

module.exports = {
    config: {
        name: "capcut",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "tnt",
        description: "Down CapCut",
        commandCategory: "Tiện ích",
        usages: "",
        cooldowns: 5
    },
    
    run: ({ api, event, args }) => {},    
    handleEvent: async ({ api, event }) => {
        const { body, senderID } = event;
        const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
        
        if (!body || (!body.includes('https://www.capcut.com/template-detail/') && !body.includes('https://www.capcut.com/t/')) || senderID === api.getCurrentUserID() || senderID === '') return;

        try {
            const { title, description, usage, video } = (await axios.get(`${linkapi}?url=${body}`)).data;
            const stream = (await axios.get(video, { responseType: "stream" })).data;

            api.sendMessage({
                body: `
====[AutoDown CapCut]====
━━━━━━━━━━━━━━━━━━━
📝Tên mẫu: ${title} 
🗒Mô tả: ${description}
📸Lượt dùng: ${usage}
━━━━━━━━━━━━━━━━━━━
⏰${gio}
🌸Link mẫu: ${body}`,
                attachment: stream
            }, event.threadID, event.messageID);
        } catch (error) {
            console.error(error);
        }
    }
};