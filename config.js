const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_48_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDMwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTGhFM3Q1U3NxS3ZtSFJUZk8zWkcxUDBOWjQxb2s5ZFVWcTJKWk9IUnJjaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3Njk1NDM5MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU1RUY3RUU5NEEwMzNCRDkxNjk2MEMyMTA5MDBDNUY4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIwNjEwNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjc2OTU0MzkwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOERCODQ5NTRBNzFFN0YxM0RFMURBQ0Q4QjRCNjJGNjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjA2MTA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzY5NTQzOTAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0N0ZGMTY0RkRCOTJGNzJBMEEwNDk3NEE1M0Q3MURDQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyMDYxMDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3Njk1NDM5MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJBOUY3QTZDRkUyMDJDOTI2MDI0MjQwN0JEMzYyMDNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIwNjEwOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJObmRpS0NLd1J1V2lRSXVtMzI5WUJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImMyZGVlMGI0LTBhNmUtNGExNC04MThiLWY0Mjg2OTQyOWI3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICA0MyxcbiAgICAgIDAsXG4gICAgICAxMDcsXG4gICAgICAxODQsXG4gICAgICAyMjYsXG4gICAgICA0MixcbiAgICAgIDQwLFxuICAgICAgMTUwLFxuICAgICAgNzMsXG4gICAgICAxNzAsXG4gICAgICAyNTIsXG4gICAgICAyMjcsXG4gICAgICAxODYsXG4gICAgICA0NyxcbiAgICAgIDY3LFxuICAgICAgMjIwLFxuICAgICAgMTcxLFxuICAgICAgMTM2LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAxOTEsXG4gICAgICAxMTUsXG4gICAgICAzLFxuICAgICAgNjgsXG4gICAgICAxMzAsXG4gICAgICAxMjMsXG4gICAgICAyMDksXG4gICAgICAxNzMsXG4gICAgICAxLFxuICAgICAgMjA2LFxuICAgICAgMTM5LFxuICAgICAgMTQ2LFxuICAgICAgMjA2LFxuICAgICAgMTEsXG4gICAgICAxODgsXG4gICAgICA0NyxcbiAgICAgIDI1MSxcbiAgICAgIDEzMyxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUlpFSjhDVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNzY5NTQzOTAwOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTEzMjkxNTQ5MzI4MjA6MTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwieGVub25cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOS3N0dGdCRU5TSzNyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZYa2pybmRsdXVjRnFFcXh6U2s0bkFDbTVQUkxZTzl6TXRPS3l5YmV3VlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUcrbWowR2dPekV3L3FCaWs3a2dPNWFoYlRZTG9BWmV6VG9qbkJuUVAzUHlOMUtKRTczczlEUW9RdDE1N2VseGVBMlB2ZzFyVnlRVHhhdVJsQSsvQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTDNsVmlvVGtmakxoUEJyeEhBMEtPbk9qc1IvclROZGJMekViWnVtQVVmNGxuTVBMWmRkSlVvaXdoOU5HMHBCMjc0c1lOdmpYT3lrVGhLNGRJcEdvQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNzY5NTQzOTAwOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMDYxMDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCZkFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJmQS5qc29uIjogIntcImtleURhdGFcIjpcInA0UmJqMkk1a0YxTEFGU0hjRzRSSGRaTFpwMVhtQjJkT0Y0QzA4K1pKbEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDUzODc1MjgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyMDYxMDQ5MzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
