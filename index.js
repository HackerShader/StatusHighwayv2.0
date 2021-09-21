const Discord = require('discord.js-selfbot')
const bot = new Discord.Client()
const fs = require('fs')
const config = require('./config.json')
const prefix = config.prefix
const updatefile = require('./update.json')
const pack = require('./package.json')


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		console.log(`File ${folder}/${file} was loaded`)
		bot.commands.set(command.name, command);
	}
}





function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}

bot.on('ready', () => {
    console.log('bot on')
});
bot.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (!bot.commands.has(command)) return;

//cammands handle
fs.readdirSync('./commands')
	
//if (msg.author.id === `485419430885457930`) {
		msg.channel.startTyping();
		setTimeout(() => {
			try {
				let commandalia = bot.commands.get(command) 
            || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))
			commandalia.execute(bot, msg, args)
				msg.channel.stopTyping();
			} catch (error) {
				console.error(error);
				msg.reply('Đã có lỗi xảy ra, hãy report cho thằng @hackershader#5959 để đc dutdeet');
				msg.channel.stopTyping()
			}
		}, 50);
		
//} else return msg.reply('Bạn đang sử dụng lệnh dev và nó chưa được phát triền hoàn toàn, gõ $changelog để cập nhật thông tin release')

//nicknamechange

});

bot.login(config.token)
