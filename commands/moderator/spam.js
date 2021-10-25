module.exports = {
    name:"spam",
    execute(bot, msg, args) {
        if(msg.author.id === `485419430885457930`) {
            setInterval(() => {
                msg.channel.send('')
            }, 1500);
        } else return msg.reply('err')
    }
}
