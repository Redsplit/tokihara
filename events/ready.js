require("../package.json");
const Discord = require('discord.js');
const client = new Discord.Client()

module.exports = client => {
  

  
    console.log(`${client.user.username} is playing with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds...`);
    
}




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})


