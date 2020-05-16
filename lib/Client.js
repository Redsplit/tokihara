const { Client } = require("discord.js");
const TokiEmbeds = require("./Embeds");

class Toki extends Client {
    
    constructor(opt){
        super(opt);

        this.config = require("../bot");
        this.util = require("./Utils");
        this.embeds = new TokiEmbeds(this);
        this.nHlogo = 'https://cdn.discordapp.com/avatars/634164534118187040/380ac3ca888f7604e6bae453e0526227.png?size=2048';
    }
}

module.exports = Toki;
