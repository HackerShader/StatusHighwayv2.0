const superagent = require("superagent")
const util = require('minecraft-server-util');
const Discord = require('discord.js-selfbot')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}

module.exports = {
    name:"queue",
    description: "Hàng chờ 2y2c và 2b2t",
    execute(bot, msg, args) {
            superagent.get("https://2b2t.io/api/queue?last=true").end((err, data) => {
                let bt = data.body[0][1];
                util.status('2y2c.org').then((response) => {
                    let yc = response.onlinePlayers - 100;
                    console.log(response.samplePlayers[2].name.split("§")[2])
                    let yct = parseInt(response.samplePlayers[2].name.split("§")[2].replace("l", "")) 
                    let ycq = parseInt(response.samplePlayers[1].name.split("§")[2].replace("l", "")) 
                    superagent.get("https://api.2b2t.dev/prioq").end((err, dataq) => {
                        var yqueue = ''
                        if(yct <= 2) {yqueue = '💙 [■□□□□□]'}
                        if(yct > 2 && yct <= 10)  {yqueue = '💚 [■■□□□□]'}
                        if(yct > 10 && yct <= 25) {yqueue = '💛 [■■■□□□]'}
                        if(yct > 25 && yct <= 50) {yqueue = '🧡 [■■■■□□]'}
                        if(yct > 50 && yct <= 75) {yqueue = '❤  [■■■■■□]'}
                        if(yct > 75) {yqueue = '💥 [■■■■■■]'}
                        var ypqueue = ''
                        if (ycq <= 1) {ypqueue = '❗ [■■□□□□]'}
                        if (ycq > 1 && ycq <= 4) {ypqueue = '⭕ [■■■■□□]'}
                        if (ycq > 4 && ycq <= 10) {ypqueue = '⛔ [■■■■■■]'}
                        if (ycq > 10) {ypqueue = '💥'}
                        var bqueue = ''
                        if(bt <= 10) {bqueue = '💙 [■□□□□□]'}
                        if (bt > 10 && bt <= 75) {bqueue = '💚 [■■□□□□]'}
                        if (bt > 75 && bt <= 250 ) {bqueue = '💛 [■■■□□□]'}
                        if (bt > 250 && bt <= 450) {bqueue = '🧡 [■■■■□□]'}
                        if (bt > 450 && bt <= 675) {bqueue = '❤  [■■■■■□]'}      
                        if (bt > 675) {bqueue = '💥 [■■■■■■]'}   
                        var bpqueue = ''
                        if (dataq.body[1] <= 25) {bpqueue = '❗ [■■□□□□]'}
                        if (dataq.body[1] > 25 && dataq.body[1] <= 75) {bpqueue = '⭕ [■■■■□□]'}
                        if (dataq.body[1] > 75) {bpqueue = '💥'}             
                        const embedq = new Discord.MessageEmbed()
                        .setColor(randColor())
                        .setTitle('Hàng chờ')
                        .setDescription(`[2Y2C] Normal queues: ${yct} | ${yqueue}\n[2Y2C] Priority queues: ${ycq} | ${ypqueue}\n[2B2T] Normal queues: ${bt} | ${bqueue}\n[2B2T] Priority queues: ${dataq.body[1]} | ${bpqueue}\n[Code bay namanhishere#9333 and Moka Sakura#5864]`)
                        .setTimestamp()
                        .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
                        msg.reply(embedq)
                    })
                })
            })
        }
    }
