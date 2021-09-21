const Discord = require('discord.js-selfbot')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
module.exports = {
    name:"invite",
    aliases: ['inv', 'i'],
    description:"Lời mời vào server đội đào đường",
    execute(bot, msg, args) {
        const eb = new Discord.MessageEmbed()
            .setAuthor('main/discordbot/invite', 'https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
            .setColor(randColor())
            .setDescription('Link invite Discord Server **2Y2C Highway**\nhttps://discord.gg/QyManVzGQn')
            .setTitle('Invite commands')
            .setTimestamp()
            .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
        msg.reply(eb)
    }
}