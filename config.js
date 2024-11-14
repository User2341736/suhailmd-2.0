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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_52_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk2LFxuICAgICAgICA2MixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgOTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg2LFxuICAgICAgICA2MixcbiAgICAgICAgOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNUMERVeFN0QWVsTngrK05yRk95aEUvMDB2NzF6UFAxZmppbHdEclBPVFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzc1NjE0NjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRkQ0MUNDMDUzMDg5ODYzQzREOEUxODI5M0Q2N0ZCQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE1NzQzNjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3NzU2MTQ2MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZCOEY5OTZBNkQwRTc3Rjg0NURBNTYxOTJDNzVBQTNCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTU3NDM2N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtLUVIb2k2UlFtMjNoSXFlTzRBeXp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjM4NzQ3OGUyLWUyOTAtNGU0MS1iNmVhLWQyNDA4ZGFhYjBjNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICA3MixcbiAgICAgIDE3MixcbiAgICAgIDk2LFxuICAgICAgMjUwLFxuICAgICAgMzgsXG4gICAgICA3NSxcbiAgICAgIDE3OCxcbiAgICAgIDIyNCxcbiAgICAgIDE4MSxcbiAgICAgIDE2MCxcbiAgICAgIDE4NyxcbiAgICAgIDg0LFxuICAgICAgMTg0LFxuICAgICAgMTA3LFxuICAgICAgMTkzLFxuICAgICAgMjIwLFxuICAgICAgMTY0LFxuICAgICAgOSxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMjMzLFxuICAgICAgMTI3LFxuICAgICAgMTM2LFxuICAgICAgMTg2LFxuICAgICAgODAsXG4gICAgICAxMjYsXG4gICAgICA0MSxcbiAgICAgIDE2LFxuICAgICAgMjQ5LFxuICAgICAgMTIsXG4gICAgICAzMSxcbiAgICAgIDIyNSxcbiAgICAgIDc3LFxuICAgICAgODcsXG4gICAgICA5NixcbiAgICAgIDE5NixcbiAgICAgIDE2MCxcbiAgICAgIDExNCxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktURzJBV0tDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzU2MTQ2Mjc6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNDQ1NDE3ODA5MTA5MTo0NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCTXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVBSOThVR0VOajAxcmtHR0RVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzdkRPVWYzMWRMRWxZQTMwM1dxVEovOFhPaFc5a3Q2NFErUWNyM1o3bEZBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIloyWG04MW12R3BPeGFPTXl0bjFQSmYwaTE4N3JFOGRIQ0dFYUxHZWZ6T0JyR2xBZlZXbmN2UWNhZ2JQK2NSZWs2bGlyc29RbjJVaTNJNk5heDk2QkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhIVC9xNWxrQVJ4TDJPcDJMWTduOWx3T0lQWmtFOVZnRVJxRWpvMThucWpxRHVsTFpic1RBdk02WE44NW9zaERieVkycmJ5Vlp4ekcrdVk4ZTBnMmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3NTYxNDYyNzo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE1NzQzNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHVDhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdUOC5qc29uIjogIntcImtleURhdGFcIjpcIis0RmZTTTllMmM5R3pSV1NnejFuaVRQTmJXRVF1NE5rZnR2Qk5LZjMxWWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1NzI3NjM1NSxcImN1cnJlbnRJbmRleFwiOjIyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIxLDIyLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" 


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
