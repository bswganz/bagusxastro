let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Bentar yaaa Kak...')
  let res = `https://bx-hunter.herokuapp.com/api/canvas/gfx1?apikey=FuckBitch&nama=${response[0]}`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `Sudah jadi...`, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(logokaneki)$/i
handler.register = true

handler.limit = true

module.exports = handler
