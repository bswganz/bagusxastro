let handler = async (m, { conn }) => {
let caption = `OKE 👌👍😘`

conn.sendButton( m.chat, caption, `👌`, `☰MENU`, `.menu`, m)

       }

handler.customPrefix = /^(oke|ok)/i
handler.command = new RegExp
module.exports = handler