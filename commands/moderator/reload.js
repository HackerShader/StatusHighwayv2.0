const fs = require('fs')
const Discord = require('discord.js-selfbot')
const config = require('./../../config.json')
const prefix = config.prefix
module.exports = {
    name:"reload",
    execute(bot, msg, args) {
        if(msg.author.id === `485419430885457930`) {
            if(msg.content === `${prefix}reload`) {
                return msg.reply('**Reload commands**\nCú pháp: $reload [category] [commands]\n```Trong đó```\n**Category**: Thư mục của bot\n**commands**: Tên file/commands')
            } else if (msg.content === `${prefix}reload ${args[0]} ${args[1]}`)
            try {
                delete require.cache[require.resolve(`../../commands/${args[0]}/${args[1]}.js`)];
        
                const cmd = require(`../../commands/${args[0]}/${args[1]}`);
                bot.commands.set(cmd.name, cmd);
                
                msg.reply(`Đã tải lại command \`\`${args[0]}/${args[1]}\`\``)
                console.log(`Sucessful to reload ${args[0]}/${args[1]}`)
                } catch (error) {
                    console.log(`failed to reload ${args[0]}/${args[1]}`)
                    msg.reply(`Không thể reload \`\`${args[0]}/${args[1]}\`\``)
                }
        } else return msg.reply('⚠ | Lệnh dành cho DEV')
    }
}