let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO

•Allah swt
•My ortu
•Nurutomo
•Adiwajshing
•Ariffb
•Amel
•IrwanX
•Dawnfrosty
•Rteam1
•Beniismael
•Raditya 
•AlyaaXzy
•Furqan
•Elyas
•Rasel
•Xteam
•khael
•Atenabot
•Baka Botz
•ZeeoneOfc
•Zeks
•Rendycraft  
•Nadin
•astro bot (gua)
•Aca Mirabel
•Penyedia Layanan API
•Orang-orang yang Berdonasi
`.trim(), watermark, 'Back to menu', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh

