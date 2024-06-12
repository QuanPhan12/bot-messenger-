const fs = require("fs-extra");
const login = require("FCA-HZI");
const readline = require("readline");
const totp = require("totp-generator");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const option = {
  logLevel: "silent",
  forceLogin: true,
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
};

const config = require(`./config.json`);
const email = config.EMAIL;
const password = config.PASSWORD;
const otpkey = config.OTPKEY.replace(/\s+/g, '2fa').toLowerCase();
console.log('Đang làm mới appstate!');
login({ email, password }, option, (err, api) => {
  if (err) {
    switch (err.error) {
      case "login-approval":
        if (otpkey) err.continue(totp(otpkey));
        else {

          console.log('Vui lòng nhập mã 2fa: ')
          rl.on("line", line => {
            err.continue(line);
            rl.close();
          });
        }
        break;
      default:
      console.error(err);
      process.exit(1);
    }
    return;
  }
  const json = JSON.stringify(api.getAppState(), null, 2);
  fs.writeFileSync(`./appstate.json`, json);
  console.log('Đã làm mới appstate thành công!');
  process.exit(0);
});