let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _5k/grup (1 minggu)_
║┊ ⌲ Sewa = _15k/grup (1 bulan)_
║┊ ⌲ Sewa = _20k/grup (2 bulan)_
║┊ ⌲ Sewa = _35k/grup (8 bulan)_                                                                      ║┊ ⌲ Sewa = _45k/grup (12 bulan)_
╰═ ┅ ═══════
╭═══ *〘 BELI PREMIUM 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Premium = _10k/minggu_
║┊ ⌲ Premium = _35k/bulan_
║┊ ⌲ Premium = _46k/permanen
║┊ ⌲ Jadi Owner = _75k/permanen
╰═ ┅ ═══════

༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*[❗] Jika Group Sepi 2 minggu, bot akan leave*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/L3vqKEnh9BA2rbqcfywZ6W_

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `astro bot`, 'Payment', '#payment', 'Owner', '#owner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot)?$/i

module.exports = handler
