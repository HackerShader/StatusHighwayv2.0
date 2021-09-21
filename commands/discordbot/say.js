const Discord = require('discord.js-selfbot')
function randColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}
const cf = require('../../config.json')
const prefix = cf.prefix
module.exports = {
    name:"say",
    execute(bot, msg, args) {
        if (msg.content === `${prefix}say`) {       
                msg.reply('**Say commands**\nCác cú pháp "$say [câu nói của bạn]"\n```Trong đó```\n**here**: Gửi tin nhắn tại đây\n**(none)**: Giống như here nhưng cho phếp bạn viết tắt\n               Ví dụ: $say 123')
        }
        var uMsg = msg.content.replace(`${prefix}say `, '')
        var channel_id = '625715711481741324'
        var channel2 = bot.channels.cache.get(channel_id)
        const checkcmd = args[0]
        if (checkcmd == 'bot') {
            if(msg.author.id === '485419430885457930') {
                var botMsg = msg.content.replace(`${prefix}say ${args[0]}`, '') 
                msg.channel.send(botMsg)
                    
                }
            }
            else if (msg.content === `${prefix}say ${uMsg}`) {
                if(msg.author.id === `485419430885457930`){
                    msg.channel.send(`**[DEV]<@${msg.author.id}> >> ${uMsg}**`)
                } else msg.channel.send(`<@${msg.author.id}> | ${uMsg}`)
        }
    }    
}
