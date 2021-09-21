const cf = require('../../config.json')
const prefix = cf.prefix
module.exports = {
    name:"request",
    execute(bot, msg, args) {
            var channel_id = '862547939952164875'
	        var channel = bot.channels.cache.get(channel_id)
            var channel_id2 = '862549021200351242'
	        var channel2 = bot.channels.cache.get(channel_id2)
            var checkrq = args[0]
            var uMsg = msg.content.replace(`${prefix}request suggest`, '')
            var oMsg = msg.content.replace(`${prefix}request report`, '')
            if(msg.content === `${prefix}request`) {
                //msg.reply('Sử dụng $request [suggest/report] [lời nói của bạn] để chia sẻ với DEVBOT')
                msg.reply('**Request commands**\nCú pháp: $request [suggest/report]\n```Trong đó```\n**suggest**: Đề xuất ý kiến tới đội ngũ đào đường\n**report**: Báo cáo tình trạng hư hỏng đường\n*Tất cả tin nhắn của bạn được gửi tại channel #báo-cáo/#ý-kiến tại servers 2Y2C HightWay\nLink invite: $invite')
            }
            if (checkrq === `suggest`) {
                channel2.send(`💚 Ý tưởng từ ***${msg.author.tag}***\n\n${uMsg}`)
                msg.reply('💚 Đã gửi ý kiến')
                msg.author.send(`Đã gửi sự chia sẻ của bạn tới DEV\nLời chia sẻ của bạn\n>${uMsg}\n> Inbox HackerShader#5959 nếu muốn đưa hình ảnh`)

            }else if (checkrq === `report`) {
                channel.send(`⚠ Báo cáo từ ***${msg.author.tag}***\n\n${oMsg}`)
                msg.reply('🧡 Đã gửi báo cáo')
                msg.author.send(`Đã gửi sự chia sẻ của bạn tới DEV\nLời chia sẻ của bạn\n>${oMsg}\n> Inbox HackerShader#5959 nếu muốn đưa hình ảnh`)
        } else return
    }
}
