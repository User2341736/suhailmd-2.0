const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="madyanenhiradon@gmail.com"
global.location="Chinhoyi, Zimbabwe."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263775614627";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_15_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3TWF6MWNweXorSk8yUTdvQ3ZRTnhoY2FGYUFCalE3RUgxMmFCV0lpMUZrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaeHRaNFIxUFFPNlZuTnBKbmg5WGVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImJmNzQyY2Y3LTkwYmUtNDJiMC04NDUxLWUxNTZmMjU1OTkwZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAxMjcsXG4gICAgICA1MyxcbiAgICAgIDgwLFxuICAgICAgMzIsXG4gICAgICAyMzcsXG4gICAgICAxMDQsXG4gICAgICA4MCxcbiAgICAgIDI3LFxuICAgICAgMTE4LFxuICAgICAgMjU1LFxuICAgICAgODgsXG4gICAgICAxODksXG4gICAgICA0NixcbiAgICAgIDIwMixcbiAgICAgIDkxLFxuICAgICAgNzAsXG4gICAgICAyNyxcbiAgICAgIDEzOSxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICA5OCxcbiAgICAgIDIxOSxcbiAgICAgIDEyNixcbiAgICAgIDM5LFxuICAgICAgMTQyLFxuICAgICAgMjQ2LFxuICAgICAgMTEsXG4gICAgICA4NyxcbiAgICAgIDIwMSxcbiAgICAgIDE2OCxcbiAgICAgIDI1MSxcbiAgICAgIDIwNixcbiAgICAgIDE3OSxcbiAgICAgIDYsXG4gICAgICAyMDEsXG4gICAgICAxMDEsXG4gICAgICAxNzgsXG4gICAgICA0NSxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYR1BMRE5ORVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc1NjE0NjI3OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzQ0NTQxNzgwOTEwOTE6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVBSOThVR0VLK3Z5YmtHR0RFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzdkRPVWYzMWRMRWxZQTMwM1dxVEovOFhPaFc5a3Q2NFErUWNyM1o3bEZBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNtNGg3L3o2NEFLYmcvcW5iT2ZkaXVldjRYRExPNVFmVktGWWttL2lEK0ZycUJvV3NKV3pDc3RBblB6NDVGWDQ5RzJUdHZsMm1NK0M5dkN0cXZCNUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkY4SUFJWUwzZ0IxTTl5cjlYYkpTaE1SRVR2M1JVOUJSVWV1aFVsSkZHVlQwVmdaUVF3L2lOWGp4dWpXNGhwQjlzcmVHSHFOelhXYjl0V1JPVVkwbUJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3NTYxNDYyNzo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzNTI0OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHVDhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdUOC5qc29uIjogIntcImtleURhdGFcIjpcIis0RmZTTTllMmM5R3pSV1NnejFuaVRQTmJXRVF1NE5rZnR2Qk5LZjMxWWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1NzI3NjM1NSxcImN1cnJlbnRJbmRleFwiOjIyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIxLDIyLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DON-XMD",
  ownername:process.env.OWNER_NAME|| "DON-A",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
