let handler = async (m, { conn }) => {
let caption = `OKE πππ`

conn.sendButton( m.chat, caption, `π`, `β°MENU`, `.menu`, m)

       }

handler.customPrefix = /^(oke|ok)/i
handler.command = new RegExp
module.exports = handler