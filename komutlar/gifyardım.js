const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Gif Komutları')
.setTimestamp()
.addField('.gif-ara','Gif Ararsınız')
.addField('.mangif','Erkek gifi')
.addField('.womangif','Kadın gifi')
.addField('.animegif','Anime gif')
.addField('.babygif','Bebek gif')
.addField('.hayvangif','Hayvan gifi')
.setFooter('Lion Gif Altyapısı', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'gifyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};