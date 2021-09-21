const Discord = require('discord.js-selfbot')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
module.exports = {
    name:"source",
    description: "Source code StatusHighway v1.7",
    execute(bot, msg, args) {
        const srcembed = new Discord.MessageEmbed()
            .setColor(randColor())
            .setAuthor('main/misc/source', 'https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
            .setDescription('⚠ Đây là source code bot của StatusHighway\nTất cả thông tin sẽ được gửi vào cuộc trò chuyện riêng (Direct Messages) của bạn')
            .setTitle('Sourcecode v1.7')
            .setTimestamp()
            .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
        msg.reply(srcembed).then(msg.author.send('Update 18/9/2021: https://github.com/HackerShader/StatusHighwayv11'))
    }
}
