let handler = async (m, { conn }) => {
    conn.reply(m.chat, `*Link Group:*\n\nbantu share cuy\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat), m)
  }
  handler.help = ['linkgroup', 'linkgc']
  handler.tags = ['group']
  handler.command = /^link(g(c)?ro?up)?$/i
  
  handler.group = true
  handler.botAdmin = true
  
  module.exports = handler