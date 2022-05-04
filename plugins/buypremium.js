let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
bang/kak mau buy premium? klik di bawah👇`.trim()
    const button = {
        buttonText: 'KLIK DI SINI',
        description: kamisato,
        sections:  [{title: "BUY PREMIUM", rows: [
        {title: 'Rp. 10.000', description: "1 minggu", rowId:".donasi"},
        {title: 'Rp. 15.000', description: "2 minggu", rowId:".donasi"},
        {title: 'Rp. 20.000', description: "1 bulan", rowId:".donasi"},
        {title: 'Rp. 30.000', description: "2 bulan", rowId:".donasi"},
        {title: 'Rp. 45.000', description: "3 bulan", rowId:".donasi"},
        {title: 'Rp. 50.000', description: "unlimited", rowId:".donasi"},
        {title: 'OWNER BOT', description: "jika minat hub owner", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^buypremium$/i
handler.help = ['buypremium']
module.exports = handler
//bagus ganz