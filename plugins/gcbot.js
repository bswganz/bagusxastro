let handler = async (m, { conn }) => {
let caption = `yu join group ku 
Linkgc: chat.whatsapp.com/L3vqKEnh9BA2rbqcfywZ6W

Link bitly: https://bit.ly/3EUeXwA`

conn.sendButton( m.chat, caption, `group official`, `owner`, `.owner`, m)

       }

handler.customPrefix = /^(gcbot)/i
handler.command = new RegExp
module.exports = handler