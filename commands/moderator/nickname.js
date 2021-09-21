const config = require('./../../config.json')
const prefix = config.prefix
module.exports = {
    name:"nickname",
    execute(bot, msg, args) {
        if(msg.author.id === `485419430885457930`){
        var checkcmd = args[0]
        if(checkcmd === 'change'){
        const input = msg.content.replace(`${prefix}nickname change`, '')
        msg.guild.members.cache.get('843425621060354110').setNickname(`[$]${input}`)
        msg.reply(`✅ Đã đổi biệt danh bot thành: ${input}`)
            } else if (checkcmd === `reset`) {
            msg.guild.members.cache.get('843425621060354110').setNickname(`[$] StatusHighway`)
            msg.reply(`❕ Đã đổi biệt danh bot lại`)
            } else return msg.reply('**Nickname commands**\nCú pháp: $nickname [change/reset]\n```Trong đó```\n**change**: Thay đổi biệt danh bot\n**reset**: Trở lại biệt danh cũ')
        }
    }
}