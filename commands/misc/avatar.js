module.exports = {
    name:"avatar",
    execute(bot, msg, args) {
            const user = msg.mentions.users.first() || msg.author;
            if (user) {
			msg.reply(`Ảnh đại diện của ${user.tag}: ${user.displayAvatarURL({ dynamic: false })}`);
        }
	}
}
