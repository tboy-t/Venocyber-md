//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/tboy-t/Venocyber-md";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5";
global.website = process.env.GURL || "https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b192f1f9184299e6f6f96.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349130371354";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RxaVE3T1lTNmNVNmVrUEpEc3lhZnl6QzhqUEhBRDk2YTIzVDMvbnUxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3ZsNVhGeTdFVi9pTythWFdBc1N1UHZwSk54dFRqc2MreURwdnVDSEtSaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQ3drUWZQTE5JTVN1SUhOdE9LSit6UHJ1QzZoOCtKR29DTVJVYlprRkc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzTUJBNzNxTVN4eDNaZGkyQUJ3UHVTWGJKdFV5VTdsS0F4QkxNc20xU1FrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFQdmcxelpISkZyY1cxVGNhM3dWZ2wrOVc2a1dWWUFoekF0Y0VjZGJta3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllrazRjTlhZWW9mTjZBczc0TjVvcVYxcDNUOEhwVFpiU2x2WHAyM0FpejQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZZZnkyS2N1NXZ5aEh4NGdPQWZ5UDg3REJIZm1rZ3VYaDVmMWpEMklsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFJWNmYweUlscEd5d1lHWjR5RDgzWUhqTTA5ZElmdTFhNE9XakducHFDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ1RDV0aElDME82VDRhM1lLOTBibmxJbmoyOGZpQ29Gb3hxK1VEdXdtT2dYRllhb2F5eWZmd0lJc2M4clpZZmdzTHE2SFoyZWIybW5NR2poSllWaUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiI5OGgzV0ZFVUxYZlR5QTgvWjQzWUhoTWZnTjkyY1JraVdyVkxYV3JsV1BRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtUlhEWlpab1JiQ0t6bWJsZWVWQW9BIiwicGhvbmVJZCI6ImVjMGY4YzZhLWM2MGItNDQ5MC1iZTk0LTUzYjhmZmZkMTRhZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZOE5Bd3BYN25zTTkyN3VtcW4xV1ZMY0xYaGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzlqSUdCWnlmMElTU3dFeC9LUzNaV2k4NWxRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdMWEI4WDNHIiwibWUiOnsiaWQiOiIyMzQ5MTMwMzcxMzU0OjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIZTFPd0hFTktxMkxNR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhGd0JMMkFjaFpBcmYzU3JGUDNCNVpEZWQ3aGhXRnQya3Vsd2lNUzBUMWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9tbUlYNlBUT2szT3QvVlBxWTg1YlhKWG50ZG8wQ2E3dDlFL2xlQVhPS3pNMVdySG11TTVocW1BYUNNbzUwVXJ2ZHNpWURLWFIvYi9SSjFDcVRzT0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJadm5HQTRWT1M1K1VHUjdEQ2V4UDdHOCtqRUdpUUpTSE5ZbzlFdlhHQkVLU2pkUmM0dURRYXFrd2dMT3MwVWE1RjdzZ091c3ZoMkRhWnI1czBFcEdCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzAzNzEzNTQ6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZUmNBUzlnSElXUUszOTBxeFQ5d2VXUTNuZTRZVmhiZHBMcGNJakV0RTlZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5MDE0NzUyfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ꪻ᥇ꪮꪗ",
  author: process.env.PACK_AUTHER || "ꪻ᥇ꪮꪗ",
  packname: process.env.PACK_NAME || "†",
  botname: process.env.BOT_NAME || "ꪻ᥇ꪮꪗ™",
  ownername: process.env.OWNER_NAME || "ꪻ᥇ꪮꪗ™",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "eM8Wi4GuwnipWihNVFe65rAJ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "601a300339f538ac289f4f731cc4815d",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
