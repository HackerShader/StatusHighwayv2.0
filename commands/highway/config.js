const Discord = require('discord.js-selfbot')
const config = require('../../config.json')
const prefix = config.prefix
const fs = require('fs')
//const req_status = fs.readFileSync('./status.json', 'utf8')
//var status = JSON.parse(req_status)
const board = {
	"X+": "0",
	"X-": "0",
	"Z+": "0",
	"Z-": "0",
	"X+Z+": "0",
	"X+Z-": "0",
	"X-Z+": "0",
	"X-Z-": "0",
    "Project": "none",
    "Descriptionproject":"none",
    "Maxreach": "0",
    "announceviecdahoanthanh": "none",
    "announcement": "none",
}
function update(direction, distance) {
	try {
		board[direction] = distance
		fs.writeFile('./commands/highway/status.json', JSON.stringify(board), (err) => { if(err) { console.log(err) } })
	} catch(err) {console.log(err)}
}

module.exports = {
    name:"config",
    execute(bot, msg, args) {
        if(msg.author.id === `485419430885457930`) {
            const checkcmd = args[0]
                if(checkcmd === `announcement`) {
                    var checkcmd1 = args[1]
                if(checkcmd1 === `main`) {
                var inputannounce = msg.content.replace(`${prefix}config announcement main`, '')
                update('announcement', inputannounce)
                console.log(`#status.json/announcement ${inputannounce}`)
                msg.reply(inputannounce)
                }



                if(checkcmd1 === `complete`) {
                var inputcomplete = msg.content.replace(`${prefix}config announcement complete`, '')
                update("announceviecdahoanthanh", inputcomplete)
                console.log(`#status.json logs/announceviecdahoanthanh >> ${inputcomplete}`)
                msg.reply(inputcomplete)
                    }
                }
                else if (checkcmd === `maxreach`) {
                var inputmaxrach = args[1]
                update('Maxreach', inputmaxrach)
                console.log(`#status.json logs >> ${inputmaxrach}`)
                msg.reply(inputmaxrach)
                }

                else if (checkcmd === `project`) {
                    var checkcmdproject = args[1]
                    if(checkcmdproject === `name`) {
                    var inputnameproject = msg.content.replace(`${prefix}config project name`, '')
                    update('Project', inputnameproject)
                    console.log(`#status.json logs >> ${inputnameproject}`)
                    msg.reply(inputnameproject)
                    }
                    if(checkcmdproject === `description`) {
                        var inputdproject = msg.content.replace(`${prefix}config project description`, '')
                        update('Descriptionproject', inputdproject)
                        console.log(`#status.json logs >> ${inputdproject}`)
                        msg.reply(inputdproject)
                    }
                }
                else if(checkcmd === `update`) {
                //input
                var input = args[1]
                var input2 = args[2]
                

                //write progress
                if(input === 'X+' || input === 'X-' || input === 'Z+' || input === 'Z-' || input === 'X+Z+' || input === 'X+Z-' || input === 'X-Z+' || input === 'X-Z-') {
                    update(input, input2)
                    console.log(input, input2)
                   
                }   
                //embed / output
                const announceembed = new Discord.MessageEmbed()
                .setAuthor('main/highway/update', 'https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
                .setTitle('❕ Write completed')
                .setDescription(`Đã đổi value : ${input} thành : ${input2}`)
                .setTimestamp()
                .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
                msg.reply(announceembed)
            } else return msg.reply('**Config commands**\nCú pháp: $config [announcement/project/update/maxreach]\n```Trong đó```**announcement**: Viết thống báo\n*./main*: Viết thông báo chính\n*./complete*: Viết thông báo nhiệm vụ hoàn thành\n**Project**: Viết dự án\n*./name*: Tên dự án\n*./description*: Phần chú thích dự án\n**Maxreach**: Viết cột mốc của dự án\n**Update**: Cập nhật số liệu về cao tốc 2y2c\n./[Hướng]/[Độ dài]')
                //embed / output
		} else return msg.reply('\n❌ | Bạn không có quyền truy cập lệnh này')
	}
}