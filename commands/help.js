const { RichEmbed } = require("discord.js");

exports.run = async (client, msg, args, color) => {
    if (!args[0]) {
        const embed = new RichEmbed()
        .setAuthor(`${client.user.username}\'s Prefix`, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/High-contrast_utilities_console.svg/1024px-High-contrast_utilities_console.svg.png")
        .setThumbnail(`${client.user.displayAvatarURL}`)
        .setDescription(`Command Me like a Dog..`)
        .addField("❯ toki random",'-- Get random doujinshi', true)
        .addField("❯ toki read `<nuclear>`", '-- Read doujinshi by the Id you provided', true)
        .addField("❯ toki lang `<english/japanese/chinese>`",'-- Get random doujinshi by the language you provided. alias=true', true)
        .addField("❯ toki download `<nuclear>`",'-- Download doujinshi by the Id you provided', true)
        .addField("❯ toki bash",'-- with bash', true)
        .setFooter(`📶 ${client.user.username} 2019`)
        .setColor("RANDOM")
        .setTimestamp()
        msg.channel.send(embed);
    } else {
        let cmd = args[0];
        if (client.commands.has(cmd) || client.commands.get(client.aliases.get(cmd))) {
            let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
            if (command.conf.owner) return msg.channel.send(`Sorry **${msg.author.username}**, I can't find command \`${cmd}\`.`);
            let name = `${client.config.PREFIX} ${command.help.name}`;
            let desc = command.help.description;
            let aliases = command.conf.aliases;
            let usage = command.help.usage;
            let usages = Array.isArray(usage) ? usage : [usage];

            let embed = new RichEmbed()
            .setAuthor(client.user.username + ' Help Description', client.user.displayAvatarURL)
            .setTitle(aliases[0] ? `${name} ❱ ${client.config.PREFIX} ${aliases.join(` ❱ ${client.config.PREFIX} `)}` : name)
            .setDescription(desc)
            .setColor(color)
            .addField('Usage', usages[0] ? `${client.config.PREFIX} ${usages.join(`\n${client.config.PREFIX} `)}` : usages);
            return msg.channel.send(embed);
        }
        if (!client.commands.has(cmd) || !client.commands.get(client.aliases.get(cmd))) {
            msg.channel.send(`Sorry **${msg.author.username}**, I can't find command \`${cmd}\`.`);
        }
    }
    
}

exports.conf = {
  aliases: []
}

exports.help = {
    name: "help",
    description: "Display bot command list",
    usage: "help"
}
