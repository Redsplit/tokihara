const Discord = require("discord.js");

exports.run = async (client, message, args, color) => {
  let start = Date.now(); message.channel.send(':warning:').then(message => {
    message.delete();
    let diff = (Date.now() - start).toLocaleString();
    let API = (client.ping).toFixed(2)
    let embed = new Discord.RichEmbed()
    
    .setAuthor(`${client.user.username}\'s Tools`, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/High-contrast_utilities_console.svg/1024px-High-contrast_utilities_console.svg.png")
    .setThumbnail(`${client.user.displayAvatarURL}`)
    .setDescription(`Hensuki.sh is merged with Tokihara with different bash implementation.`)
    .addField("❯ Installation\n",'```$ curl https://hensuki.now.sh/tokihara\n$ ./tokihara```\n❯ or using ```toki ppa``` to run instead curl.', true)

    .setFooter(`💎 ${client.user.username} 2019`)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embed);
  });
};

exports.conf = {
  aliases: ['bash'],
  cooldown: '10'
}

exports.help = {
  name: "tools",
  description: 'bash only',
  usage: '{prefix}bash'
}
