//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "voawiv@ghostymail.com";
global.location = "da,deep,dark.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/nigera/somewhere/everywhere";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://github.com/Hehehahat/Dweller-md";
global.website = process.env.GURL || "https://wa.link/5sf1yo";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "2348125926761";
global.sudo = process.env.SUDO || "2348125926761";
global.owner = process.env.OWNER_NUMBER || "2348125926761";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lBWHZrTXY5TFJyOEUxbzFycGtVRkVwbDlHWnZtdHhEang3QkYvK1FWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTNhVkFrZnYwZkIzZWdSWjlUeGdlcU9xemozSU05cmNJaDAzN2EvZkpnTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SGtidmVsRXBCMzIvWHI3UmVCTkx1SDMrUHpUcEJvM0hwN2JwdTY1YVVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKcmJWQm1OTmpha2p6ZVdCcnp0eVFJaFVWcEQvWWZnZ0hzSzlaV1h2N1dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitOTnd0MEJra2JMMi9jc3R5VXBJR1E1MGJ3ZFVuWlZibndrS01GVkIrSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5kVkFwb2N0U2ZzYzA1dG1PM3A0empCMzRkZitpMWIva2VsSzBWdStVR1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZNTkJjbmtQdGltUVNXMGplbUl2cjN4Y3BwWUJqRWJscTJLMi9vRlBtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmFoMnh2bzVkU3ZNZ1VkbENySHFrODdVMlU0NHhYMm5mbVB4cllONnd3az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc4R1RYeUtjbjJvelk2TEdOTnFXbVI1RGZRZ2ROQ2pPWnN3SjVJZGtGcnM3YStZdXJUNjEvckcrekRjQlE0Z1BtOU9RQ3ExcVdUeFhuQUtvb0h0UUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJHQlFFR0RZQU5ONk9xWjFqOUJiV3FvOFh5TER5NVRVLzhBaVd5MzRrQ0hBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRSFpKZlA2NlI5eTZfWUQ3VU8xd2hBIiwicGhvbmVJZCI6IjExNjgwMjAyLTkyMDktNDBkMy04NWRhLTg1MWJhNGQwMTM5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwdEUzVk5VdlVQUXo0N1IrYjhwWDNOei9mdnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnhRekgvK1lhV0pPNXNIb2J2a01JYmlzOWFjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJRNk1QSlFIIiwibWUiOnsiaWQiOiIyMzQ4MTU3MTYyMzg5OjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p1UC9Zc0dFSUhGdkxVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFiNmN4QlBhK1o0YnRkdmorRkU4eXcwVlFGcUFNK0tOd216V1gxeWNUQ1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRyS2x5aktqTE1CTDI4NW80c08ydWZ4MHVkSEhYMzJPckVLQ1ZtQWU1VEpGSkNFd3VTMDV3ZWlBT01oQVJ1TURnb3lLRGRrZTBnZ3M4dTIyMkZ6VEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNKytsN1EwczF3cndXa05RQ1VqWGVZYllyeXptajRnMzR6S2loZG1pODdYQW53Z3luZHdmYlJJNzhOZ29UNC8wOHEzWDJWTUdaRlgzcU54UUw4Z2hDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNTcxNjIzODk6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbStuTVFUMnZtZUc3WGI0L2hSUE1zTkZVQmFnRFBpamNKczFsOWNuRXdrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzUzNjc5fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using dwells bot| now bow or burn| this is Dw3ller💅🏽✨",
  author: process.env.PACK_AUTHER || "dweller",
  packname: process.env.PACK_NAME || "dwells",
  botname: process.env.BOT_NAME || "dwells-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Dw3ller",
  errorChat: process.env.ERROR_CHAT || "burn☝🏼",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "warn",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Him").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
