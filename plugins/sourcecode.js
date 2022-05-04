let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
*────────「 SCRIPT 」 ────────*
NIH SC UDAH DI PUBLIC SILAHKAN DI PAKE: https://youtu.be/Vfis5u-Fnxs👍
`.trim(), '© bagus ganz', 'oke', 'ok')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler