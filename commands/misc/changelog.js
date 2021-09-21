const Discord = require('discord.js-selfbot')
const updatefile = require('./../../update.json')
const package = require('./../../package.json')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
module.exports = {
    name:"changelog",
    execute(bot, msg, args) {
        const eb = new Discord.MessageEmbed()
            .setAuthor('main/misc/changelog','https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
            .setColor(randColor())
            .setTitle('Change-logs')
            .setDescription(`Nhật ký những thứ thay đổi của bot\nPhiên bản: **${updatefile.Version}**\nAdmin: <@485419430885457930>`)
            //.addField(`${version.version}`,`\`\`\`Update:\`\`\`\n${updatefile.Update}\n\`\`\`Edit:\`\`\`${updatefile.Edit}\n\`\`\`Remove:\`\`\`${updatefile.Remove}\n\`\`\`Info\`\`\`\nOpen source: &source`)
            .addFields(
                {name: "\`\`\`Update\`\`\`", value: `${updatefile.Update}`, inline: true},
                {name: "\`\`\`Edit\`\`\`", value: `${updatefile.Rewrite}`, inline: true},
                {name: "\`\`\`Remove\`\`\`", value: `${updatefile.Remove}`, inline: true},
                {name: "\`\`\`Info\`\`\`", value: `${updatefile.Info}`}
            )
            .setTimestamp()
            .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
        msg.reply(eb)    
    }
}