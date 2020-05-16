const { Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { TOKEN } = require("./bot.json");
const Toki = require("./lib/Client");


const client = new Toki({
    fetchAllMembers: true,
    disableEvents: [
        "GUILD_SYNC",
        "PRESENCE_UPDATE",
        "TYPING_START"
    ]
});

// status
client.on('ready', () => {
    console.log('Abandon all hope, ye who enter here..\nHosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
        client.user.setStatus('online')
        function heystats() {
  
            let status = [
                "./hensuki",
                "Senpai Dog",
                "with Okita sensei",
                "hensuki.now.sh",
                "nhentai.net",
                "codename: sayuki",
                "ダイスキ。"
            ]
        
            let statusR = Math.floor(Math.random() * status.length);
            client.user.setActivity(status[statusR] , {type : "Playing" , status : "Idle"});
          }
          setInterval(heystats, 10000);
        
    });

// main prefix

client.on('message', msg => {
    if (msg.content === 'toki') {
      msg.reply('hey your prefix: ```toki help```')
    }
  })


// events
for (const event of readdirSync("./events")) {
    client.on(event.split(".")[0], (...args) => require(`./events/${event}`)(client, ...args));
}

// modules
client.commands = new Collection();
client.aliases = new Collection();

for (const command of (readdirSync(`./commands`).filter(x => x.endsWith(".js")))) {
    let cmd = require(`./commands/${command}`);
    client.commands.set(cmd.help.name.toLowerCase(), cmd);
    // get aliases command
    for (const alias of cmd.conf.aliases) {
        client.aliases.set(alias.toLowerCase(), cmd.help.name.toLowerCase());
    }
}

client.login(TOKEN);
