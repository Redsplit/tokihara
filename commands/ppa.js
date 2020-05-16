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
    
    // The sendFile method has been deprecated 
    // because they wanted to implement DataStore to increase efficiency of the API. You need to use send instead of sendFile to avoid errors in future.

    .setFooter(`💎 ${client.user.username} 2019`)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embed);
    message.channel.send('>>> ',{
      files: ['./commands/hensuki']
  });
  });
};

exports.conf = {
  aliases: ['ppa'],
  cooldown: '10'
}

exports.help = {
  name: "ppa",
  description: 'ppa',
  usage: '{prefix}ppa'
}
