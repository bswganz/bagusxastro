let handler = function (m) {
	this.sendContact(m.chat, '6283163686691', 'Owner astro bot :)', m)
}

handler.customPrefix = ['@6283163686691', 'astro bot'] 
handler.command = new RegExp

module.exports = handler