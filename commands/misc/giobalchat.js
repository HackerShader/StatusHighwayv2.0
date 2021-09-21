const Discord = require ('discord.js-selfbot')
const cf = require('../../config.json')
const prefix = cf.prefix
module.exports = {
    name:"globalchat",
    aliases: ['gbchat'],
    description: "Chat tổng, tin nhắn sẽ được gửi tới 2y2chighway/#giobalchat",
    execute(bot, msg, args) {
        var gbchat = msg.content.replace(`${prefix}globalchat`, '')
        var channel_id = '871326062263566336'
	    var channel = bot.channels.cache.get(channel_id)
        var ycchannel_id = '625715711481741324'
        var ycchannel = bot.channels.cache.get(ycchannel_id)
        const gbchatembed = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
            .setDescription(`${gbchat}`)
            .setTimestamp()
        const ycchatembed = new Discord.MessageEmbed()
            .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
            .setDescription(`${gbchat}`)
            .setTimestamp()
        channel.send(gbchatembed)
        ycchannel.send(ycchatembed)
        msg.author.send(`✅ | Đã gửi tin nhắn\nNội dung tin nhắn:${gbchat}`)
    }
}