const Discord = require('discord.js-selfbot')
const fs = require('fs')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}


//progress math


module.exports = {
    name:"status",
    execute(bot, msg, args) {
        const checkcmd = args[0]
        const date = new Date()
        if (checkcmd === 'all') {
        delete require.cache[require.resolve(`./status.json`)];
        const kek = require('./status.json')
        var sumstraight = Number(+kek['X+'] + +kek['X-'] + +kek['Z+'] + +kek['Z-'])
        var sumdiagonal = Number(+kek['X+Z+'] + +kek['X-Z-'] + +kek['X+Z-'] + +kek['X-Z+'])
        var progressx00 = Number(+kek['X-']/+kek.Maxreach*100).toFixed(2)
        var progressx11 = Number(+kek['X+']/+kek.Maxreach*100).toFixed(2)
        var progressz00 = Number(+kek['Z-']/+kek.Maxreach*100).toFixed(2)
        var progressz11 = Number(+kek['Z+']/+kek.Maxreach*100).toFixed(2)
        var sumeprogress1 = Number(+progressx00 + +progressx11 + +progressz00 + +progressz11)
        var sumprogress1 = Number(sumeprogress1/400*100).toFixed(2)
        const announcement = kek.announcement
        //progressbar 
        const embed = new Discord.MessageEmbed()
                .setTitle('Trạng thái Highway của 2Y2C')
                .setColor(randColor())
                .setAuthor('main/highway/status/all','https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
                .setDescription(`Hôm nay là: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
                .addFields(
                    {name: `Dự án hiện tại: ${kek.Project}`, value:`Tiến độ: ${sumprogress1}%\n`,inline: false},
                    {name: `Thông báo`, value:`${announcement}`,inline: false},
                    {name: "Tổng độ dài Highway thẳng", value: `${sumstraight} Blocks`, inline: true},
                    {name: "Tổng độ dài Highway chéo", value: `${sumdiagonal} Blocks`, inline: true},
                )
                .setTimestamp()
                .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
        msg.reply(embed)
        delete require.cache[require.resolve(`./status.json`)];
        }
        else if (checkcmd === 'straight') {
            delete require.cache[require.resolve(`./status.json`)];
            const buh = require('./status.json')
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Trạng thái Highway thẳng')
            .setColor(randColor())
            .setAuthor('main/highway/status/straight','https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
            .setDescription(`Hôm nay là: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
            .addFields(
                {name: "X+", value:`${buh['X+']}`,inline: true},
                {name: "X-", value:`${buh['X-']}`,inline: false},
                {name: "Z+", value:`${buh['Z+']}`,inline: false},
                {name: "Z-", value:`${buh['Z-']}`,inline: false},

            )
            .setTimestamp()
            .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
                msg.reply(embed2)
            
            }






        else if (checkcmd === `diagonal`) {
            delete require.cache[require.resolve(`./status.json`)];
            const ng = require('./status.json')
            const embed3 = new Discord.MessageEmbed()
            .setTitle('Trạng thái Highway chéo')
            .setColor(randColor())
            .setAuthor('main/highway/status/diagonal','https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
            .setDescription(`Hôm nay là: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
            .addFields(
                {name: "X+Z+", value:`${ng['X+Z+']}`,inline: true},
                {name: "X-Z+", value:`${ng['X-Z+']}`,inline: false},
                {name: "X-Z+", value:`${ng['X-Z+']}`,inline: false},
                {name: "X-Z-", value:`${ng['X-Z-']}`,inline: false},
            )
            .setTimestamp()
            .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
            msg.reply(embed3)
            
        }
        else if (checkcmd === `announce`) {
            delete require.cache[require.resolve(`./status.json`)];
            const pl = require('./status.json')
            const embedan = new Discord.MessageEmbed()
            .setTitle('Thông báo')
            .setColor(randColor())
            .setAuthor('main/highway/status/announcement','https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
            .setDescription(`Hôm nay là: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
            .addFields(
                {name:"Việc đã hoàn thành", value:`${pl.announceviecdahoanthanh}`, inline: true},
                {name:"Thông báo chính", value:`${pl.announcement}`, inline: false},
            )
            .setTimestamp()
            .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
            msg.reply(embedan)
        }
        else if (checkcmd === `project`) {
            //config
            delete require.cache[require.resolve(`./status.json`)];
            const ngu = require('./status.json') 
            var progressx0 = Number(+ngu['X-']/+ngu.Maxreach*100).toFixed(2)
            var progressx1 = Number(+ngu['X+']/+ngu.Maxreach*100).toFixed(2)
            var progressz0 = Number(+ngu['Z-']/+ngu.Maxreach*100).toFixed(2)
            var progressz1 = Number(+ngu['Z+']/+ngu.Maxreach*100).toFixed(2)

            //progressbar 
            var progressbarx1 = ''
            switch(true) {
                case progressx1 < 10:
                progressbarx1 = '[□□□□□□□□□□]'  
                break;
                case progressx1>=10 && progressx1<20:
                progressbarx1 = '[■□□□□□□□□□]'
                break;
                case progressx1>=20 && progressx1<30:
                progressbarx1 = '[■■□□□□□□□□]'
                break;
                case progressx1>=30 && progressx1<40:
                progressbarx1 = '[■■■□□□□□□□]'
                break;
                case progressx1>=40 && progressx1<50:
                progressbarx1 = '[■■■■□□□□□□]'
                break;
                case progressx1>=50 && progressx1<60:
                progressbarx1 = '[■■■■■□□□□□]'
                break;
                case progressx1>=60 && progressx1<70:
                progressbarx1 = '[■■■■■■□□□□]'
                break;
                case progressx1>=70 && progressx1<80:
                progressbarx1 = '[■■■■■■■□□□]'
                break;
                case progressx1>=80 && progressx1<90:
                progressbarx1 = '[■■■■■■■■□□]'
                break;
                case progressx1>=90 && progressx1<100:
                progressbarx1 = '[■■■■■■■■■□]'
                break;
                case progressx1>=100:
                progressbarx1 = '[■■■■■■■■■■]'
                break;
            }
            var progressbarx0 = ''
            switch(true) {
                case progressx0 < 10:
                progressbarx0 = '[□□□□□□□□□□]'  
                break;
                case progressx0>=10 && progressx0<20:
                progressbarx0 = '[■□□□□□□□□□]'
                break;
                case progressx0>=20 && progressx0<30:
                progressbarx0 = '[■■□□□□□□□□]'
                break;
                case progressx0>=30 && progressx0<40:
                progressbarx0 = '[■■■□□□□□□□]'
                break;
                case progressx0>=40 && progressx0<50:
                progressbarx0 = '[■■■■□□□□□□]'
                break;
                case progressx0>=50 && progressx0<60:
                progressbarx0 = '[■■■■■□□□□□]'
                break;
                case progressx0>=60 && progressx0<70:
                progressbarx0 = '[■■■■■■□□□□]'
                break;
                case progressx0>=70 && progressx0<80:
                progressbarx0 = '[■■■■■■■□□□]'
                break;
                case progressx0>=80 && progressx0<90:
                progressbarx0 = '[■■■■■■■■□□]'
                break;
                case progressx0>=90 && progressx0<100:
                progressbarx0 = '[■■■■■■■■■□]'
                break;
                case progressx0>=100:
                progressbarx0 = '[■■■■■■■■■■]'
                break;
            }
            var progressbarz0 = ''
            switch(true) {
                case progressz0 < 10:
                progressbarz0 = '[□□□□□□□□□□]'  
                break;
                case progressz0>=10 && progressz0<20:
                progressbarz0 = '[■□□□□□□□□□]'
                break;
                case progressz0>=20 && progressz0<30:
                progressbarz0 = '[■■□□□□□□□□]'
                break;
                case progressz0>=30 && progressz0<40:
                progressbarz0 = '[■■■□□□□□□□]'
                break;
                case progressz0>=40 && progressz0<50:
                progressbarz0 = '[■■■■□□□□□□]'
                break;
                case progressz0>=50 && progressz0<60:
                progressbarz0 = '[■■■■■□□□□□]'
                break;
                case progressz0>=60 && progressz0<70:
                progressbarz0 = '[■■■■■■□□□□]'
                break;
                case progressz0>=70 && progressz0<80:
                progressbarz0 = '[■■■■■■■□□□]'
                break;
                case progressz0>=80 && progressz0<90:
                progressbarz0 = '[■■■■■■■■□□]'
                break;
                case progressz0>=90 && progressz0<100:
                progressbarz0 = '[■■■■■■■■■□]'
                break;
                case progressz0>=100:
                progressbarz0 = '[■■■■■■■■■■]'
                break;
            }
            var progressbarz1 = ''
            switch(true) {
                case progressz1 < 10:
                progressbarz1 = '[□□□□□□□□□□]'  
                break;
                case progressz1>=10 && progressz1<20:
                progressbarz1 = '[■□□□□□□□□□]'
                break;
                case progressz1>=20 && progressz1<30:
                progressbarz1 = '[■■□□□□□□□□]'
                break;
                case progressz1>=30 && progressz1<40:
                progressbarz1 = '[■■■□□□□□□□]'
                break;
                case progressz1>=40 && progressz1<50:
                progressbarz1 = '[■■■■□□□□□□]'
                break;
                case progressz1>=50 && progressz1<60:
                progressbarz1 = '[■■■■■□□□□□]'
                break;
                case progressz1>=60 && progressz1<70:
                progressbarz1 = '[■■■■■■□□□□]'
                break;
                case progressz1>=70 && progressz1<80:
                progressbarz1 = '[■■■■■■■□□□]'
                break;
                case progressz1>=80 && progressz1<90:
                progressbarz1 = '[■■■■■■■■□□]'
                break;
                case progressz1>=90 && progressz1<100:
                progressbarz1 = '[■■■■■■■■■□]'
                break;
                case progressz1>=100:
                progressbarz1 = '[■■■■■■■■■■]'
                break;
            }

            //sum progress
            var sumeprogress = Number(+progressx0 + +progressx1 + +progressz0 + +progressz1)
            var sumprogress = Number(sumeprogress/400*100).toFixed(2)

            //sim progressbar
            var sumbarprogress = ''
            switch(true) {
                case sumprogress < 3.225:
                sumbarprogress = '[□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 3.225 && sumprogress < 6.45:
                sumbarprogress = '[■□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 6.45 && sumprogress < 9.67:
                sumbarprogress = '[■■□□□□□□□□□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 9.67 && sumprogress < 12.89:
                sumbarprogress = '[■■■□□□□□□□□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 12.89 && sumprogress < 16.11 :
                sumbarprogress = '[■■■■□□□□□□□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 16.11 && sumprogress < 19.33:
                sumbarprogress = '[■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 19.33 && sumprogress < 22.55:
                sumbarprogress = '[■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 22.55 && sumprogress < 25.77:
                sumbarprogress = '[■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 25.77 && sumprogress < 28.99:
                sumbarprogress = '[■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 28.99 && sumprogress < 32.21:
                sumbarprogress = '[■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 32.21 && sumprogress < 35.43:
                sumbarprogress = '[■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 35.43 && sumprogress < 38.65:
                sumbarprogress = '[■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□]'
                break;

                case sumprogress >= 38.65 && sumprogress < 41.87:
                sumbarprogress = '[■■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 41.87 && sumprogress < 45.09:
                sumbarprogress = '[■■■■■■■■■■■■■□□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 45.09 && sumprogress < 48.31:
                sumbarprogress = '[■■■■■■■■■■■■■■□□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 48.31 && sumprogress < 51.53:
                sumbarprogress = '[■■■■■■■■■■■■■■■□□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 51.53 && sumprogress < 54.75:
                sumbarprogress = '[■■■■■■■■■■■■■■■■□□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 54.75 && sumprogress < 57.97:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■□□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 57.97 && sumprogress < 61.19:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 61.19 && sumprogress < 64.41:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■□□□□□□□□□□□□□]'
                break;
                case sumprogress >= 64.41 && sumprogress < 67.63    :
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■□□□□□□□□□□□]'
                break;
                case sumprogress >= 67.63 && sumprogress < 70.85:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■□□□□□□□□□□]'
                break;
                case sumprogress >= 70.85 && sumprogress < 74.07:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■■□□□□□□□□□]'
                break;
                case sumprogress >= 74.07 && sumprogress < 77.29:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■■■□□□□□□□□]'
                break;
                case sumprogress >= 77.29 && sumprogress < 80.51:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■■■■□□□□□□□]'
                break;
                case sumprogress >= 80.51 && sumprogress < 83.73:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■■■■■□□□□□□]'
                break;
                case sumprogress >= 83.73 && sumprogress < 86.95:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■■■■■■□□□□□]'
                break;
                case sumprogress >= 86.95 && sumprogress < 90.17:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■■■■■■■□□□□]'
                break;
                case sumprogress >= 90.17 && sumprogress < 93.39:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■■■■■■■■□□□]'
                break;
                case sumprogress >= 93.39 && sumprogress < 96.61:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■■■■■■■■■□□]'
                break;
                case sumprogress >= 96.61 && sumprogress < 100:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■□]'
                break;
                case sumprogress >= 100:
                sumbarprogress = '[■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■]'
                break;


            }



            //embed

            const embed4 = new Discord.MessageEmbed()
            .setTitle('Dự án')
            .setColor(randColor())
            .setAuthor('main/highway/status/project','https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
            .setDescription(`Hôm nay là: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
            .addFields(
                {name: `${ngu.Project}`, value:`${ngu.Descriptionproject}`,inline: false},
                {name: `Tiến trình`, value:`X+ | ${progressx1}%\nX-  | ${progressx0}%\nZ+ | ${progressz1}%\nZ-  | ${progressz0}%`,inline: true},
                {name: "\u200B", value:`${progressbarx1}\n${progressbarx0}\n${progressbarz1}\n${progressbarz0}`,inline: true},
                {name: `Tổng tiến trình: ${sumprogress}%`, value: `${sumbarprogress}`, inline: false}
            )
            .setTimestamp()
            .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
            msg.reply(embed4)
        
       
    
        //return back 
        } else return msg.reply('**Status Commands**\nCác cú pháp: $status [all/straight/diagonal/project/announce]\n```Trong đó```\n**all**: Toàn bộ những thứ liên quan tới highway\n**straight**: Tiến trình cao tốc thẳng\n**diagonal**: Tiến trình cao tốc chéo\n**project**: Dự án chúng mình đang làm\n**announce**: Thông báo về cao tốc')
    
    }
} 
