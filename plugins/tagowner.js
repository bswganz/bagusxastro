let handler = async (m, { conn }) => {
let caption = `kenapa bro tag owner ku ada apa?`

conn.sendButton( m.chat, caption, `astro bot`, `MENU`, `.menu`, m)

       }

handler.customPrefix = /^(@6283163686691|@astrobot)$/i
handler.command = new RegExp

module.exports = handler
