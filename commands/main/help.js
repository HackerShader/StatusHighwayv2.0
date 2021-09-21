const Discord = require('discord.js-selfbot')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
const fs = require('fs')
let cmds_amount;
function getCommandsFromDir(dir) {
  let commands = ''
  let description = ''
  fs.readdirSync(`./commands/${dir}`).forEach(files => {
      if(files.endsWith('.js')) {
          var file = require(`../${dir}/${files}`)
          cmds_amount++
          commands += `\`${file.name}\` ` 
      }
  })
  return commands
}



module.exports = {
    name:"help",
    aliases: ['cmds','?','Lệnh','sus'],
    execute(bot, msg, args) {
        async function modembed() {
            function appendZeroToLength(value, length) {
              return `${value}`.padStart(length, 0);
            }
            
             function getDateAsText() {
              const now = new Date(Date.now()+25200000);
              const nowText = appendZeroToLength(
                appendZeroToLength(now.getHours(), 2) + ':'
                + appendZeroToLength(now.getMinutes(), 2) + ':'
                + appendZeroToLength(now.getSeconds(), 2)
                + ' ('
                + appendZeroToLength(now.getDate(), 2) + '/'
                + appendZeroToLength(now.getMonth()+1, 2) + '/'
                + appendZeroToLength(now.getUTCFullYear(), 2) + ')'
                )
              return nowText;
            }
            const modembed = new Discord.MessageEmbed()
                    .setColor(randColor())
                    .setDescription(`Nơi trợ giúp bạn mọi thứ liên quan tới bot\n**Bây giờ là: ${getDateAsText()}**`)
                    .setAuthor('Help Commands', 'https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
                    .addField('Highway', '```$help highway```', true)
                    .addField('Miscellaneous', '```$help misc```', true)
                    .addField('Servers', '```$help servers```', true)
                    .addField('Discord Bot', '```$help discordbot```', true)
                    .addField('Moderator', '```$help moderator```', true)
                    .setTimestamp()
                    .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
                   msg.reply(modembed).then(msg => msg.react('❔'))
        }
      
       var checkcmd = args[0]
       if (checkcmd === `misc`) {
       const misc = new Discord.MessageEmbed()
                    .setColor(randColor())
                    .setAuthor('main/help/misc', 'https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
                    .setTitle('Miscellaneous')
                    .setDescription('**Những thứ lặt vặt có trong bot**\n$help misc {commands} để biết thêm thông tin chi tiết')
                    .addField('Commands',`${getCommandsFromDir('misc')}`)
                    .setTimestamp()
                    .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
                    msg.channel.send(misc)
        }
        else if (checkcmd === `highway`) {
        const highway2 = new Discord.MessageEmbed()
          .setColor(randColor())
          .setAuthor('main/help/Highway', 'https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
          .setTitle('Highway')
          .setDescription('**Cao tốc 2Y2C**\n$help highway {commands} để biết thêm thông tin chi tiết')
          .addField('Commands',`${getCommandsFromDir('highway')}`)
          .setTimestamp()
          .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
          msg.reply(highway2)
      } else if (checkcmd === `discordbot`) {
        const botdisc = new Discord.MessageEmbed()
          .setColor(randColor())
          .setAuthor('main/help/discordbot', 'https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
          .setTitle('DiscordBOT')
          .setDescription('**Những thứ liên quan tới BOT**\n$help discordbot {commands} để biết thêm thông tin chi tiết')
          .addField('Commands',`${getCommandsFromDir('discordbot')}`)
          .setTimestamp()
          .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
          msg.reply(botdisc)
      } else if (checkcmd === `servers`) {
        const sv = new Discord.MessageEmbed()
          .setColor(randColor())
          .setAuthor('main/help/server', 'https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
          .setTitle('Servers')
          .setDescription('**Những thứ liên quan tới server 2Y2C**\n$help servers {commands} để biết thêm thông tin chi tiết')
          .addField('Commands',`${getCommandsFromDir('servers')}`)
          .setTimestamp()
          .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
          msg.reply(sv)
      }
          else if (checkcmd === `moderator`) {
            if (msg.author.id === `485419430885457930`) {
            const sv = new Discord.MessageEmbed()
              .setColor(randColor())
              .setAuthor('main/help/moderator', 'https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
              .setTitle('Moderator')
              .setDescription('**Lệnh cho admin**')
              .addField('Commands',`${getCommandsFromDir('moderator')}`)
              .setTimestamp()
              .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
              msg.reply(sv)
              
          } else msg.reply('\n❌ | Bạn không có quyền truy cập lệnh này')
          
      }else return modembed()
    }
  }
