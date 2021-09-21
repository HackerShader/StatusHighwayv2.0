module.exports = {
    name:"ping",
    execute(bot, msg, args) {
        msg.channel.send('Checking...').then(m =>{
            var ping = m.createdTimestamp - msg.createdTimestamp;
            m.edit(`\nResponse: ${ping}ms\nAPI response: ${Math.round(bot.ws.ping)}ms`)
        })
    }
}
