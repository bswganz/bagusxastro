let handler = async (m, { conn }) => {
let caption = `bot masih aktif nih silahkan klik button di bawah ini atau ketik #menu untuk melihat list menu bot`

conn.sendButton( m.chat, caption, `tesbot`, `LIST MENU`, `.menu`, m)

       }

handler.customPrefix = /^(tes|test|tesbot|testbot)/i
handler.command = new RegExp
module.exports = handler