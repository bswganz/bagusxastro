let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
HAI 👋 SILAHKAN KLIK BUTTON DI BAWAH INI`.trim()
    const button = {
        buttonText: 'KLIK DI SINI',
        description: kamisato,
        sections:  [{title: "Silahkan pilih salah satu", rows: [
        {title: '1', description: "pilih", rowId:".daftar nama.1"},
        {title: '2', description: "pilih", rowId:".daftar nama.2"},
        {title: '3', description: "pilih", rowId:".daftar nama.3"},
        {title: '4', description: "pilih", rowId:".daftar nama.4"},
        {title: '5', description: "pilih", rowId:".daftar nama.5"},
        {title: '6', description: "pilih", rowId:".daftar nama.6"},
        {title: '7', description: "pilih", rowId:".daftar nama.7"},
        {title: '8', description: "pilih", rowId:".daftar nama.8"},
        {title: '9', description: "pilih", rowId:".daftar nama.9"},
        {title: '10', description: "pilih", rowId:".daftar nama.10"},
        {title: '11', description: "pilih", rowId:".daftar nama.11"},
        {title: '12', description: "pilih", rowId:".daftar nama.12"},
        {title: '13', description: "pilih", rowId:".daftar nama.13"},
        {title: '14', description: "pilih", rowId:".daftar nama.14"},
        {title: '15', description: "pilih", rowId:".daftar nama.15"},
        {title: '16', description: "pilih", rowId:".daftar nama.16"},
        {title: '17', description: "pilih", rowId:".daftar nama.17"},
        {title: '18', description: "pilih", rowId:".daftar nama.18"},
        {title: '19', description: "pilih", rowId:".daftar nama.19"},
        {title: '20', description: "pilih", rowId:".daftar nama.20"},
        {title: '21', description: "pilih", rowId:".daftar nama.21"},
        {title: '22', description: "pilih", rowId:".daftar nama.22"},
        {title: '23', description: "pilih", rowId:".daftar nama.23"},
        {title: '24', description: "pilih", rowId:".daftar nama.24"},
        {title: '25', description: "pilih", rowId:".daftar nama.25"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^button$/i
handler.help = ['button']
module.exports = handler
//bagus ganz
