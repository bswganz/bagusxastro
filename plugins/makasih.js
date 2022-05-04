let handler = async (m, { conn }) => {
let caption = `SAMA-SAMA KAK🤗😘`

conn.sendButton( m.chat, caption, `sama²`, `oke bot`, `oke`, m)

       }

handler.customPrefix = /^(makasih|terimakasih)/i
handler.command = new RegExp
module.exports = handler