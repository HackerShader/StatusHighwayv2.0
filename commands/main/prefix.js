const cf = require('../../config.json')
const prefix = cf.prefix
module.exports = {
    name: "prefix",
    execute(bot, msg, args) {
         if(msg.content === `${prefix}prefix`) {
             msg.reply('**Prefix commands**\nCú pháp: $prefix [change/use]\n```Trong đó```\n**change**: thay đổi prefix\n**use**: Xem prefix bạn đang dùng')

         }
         var checkcmd = args[0]
         var prefixcmd = args[1]
         if (checkcmd === `use`) {
            if (msg.author.id === `485419430885457930`) {
                msg.reply(`\`\`\`Prefix using:\`\`\`\n\n**Default prefix: $**\n**Your prefix: ${prefixcmd}**\nDEV prefix: &`)
            } else msg.reply('Prefix bạn đang dùng: [BETA]')
         }
         else if (checkcmd === `change`) {
             if (msg.content === `${prefix}prefix change`) { 
                 msg.reply('```Prefix change```\nCú pháp: $prefix change [prefix mà bạn muốn đặt]')
             }
            if (msg.content === `&prefix change ${prefixcmd}`) {
                msg.reply(`Bạn đã đổi prefix thành: ${prefixcmd}`)
            }
         }
    }
}