<div align="center">
   <img width="260" src="https://i.imgur.com/K6GYY36.png" alt="logo"></br><h2>Tokihara</h2>

[![CodeFactor](https://www.codefactor.io/repository/github/sinkaroid/tokihara/badge)](https://www.codefactor.io/repository/github/sinkaroid/tokihara) [![](https://img.shields.io/npm/v/nhentai-api-js)](https://www.npmjs.com/package/nhentai-api-js?activeTab=versions) [![](https://img.shields.io/node/v/discord.js)](https://discord.js.org/#//) [![Depfu](https://badges.depfu.com/badges/6c9eeeca88c0a827bb31e818ce980e29/overview.svg)](https://depfu.com/github/sinkaroid/tokihara?project_id=12347) [![Build Status](https://travis-ci.com/sinkaroid/tokihara.svg?branch=master)](https://travis-ci.com/sinkaroid/tokihara)  


----
</div>

# NSFW CORE  
Doujin helper through discordjs with actionable Artist gathering.  

[![](https://img.shields.io/badge/tokihara-master-green)](https://github.com/sinkaroid/hensuki/tree/master) [![](https://img.shields.io/badge/tokihara-dev-purple)](https://github.com/sinkaroid/hensuki/tree/dev)  
Choose master if u wanna run in your own vps  
or, dev if u run in limited server, ie heroku.

Dev branch is different dependency .env config var with encrypted token.
## Installation  
```sh
$ npm i
$ node app.js
``` 

```js
const embed = new RichEmbed();
   let res = (await this.getById(id))
   let info = this.getInfo(res);
   embed.setDescription(`Made by: **${info.artist[0] ? info.artist.join(', ') : info.artist}**`);

   // info.artist[0].replace(' ','-').toLowerCase() #nhentai
   // or continuous pattern from each separated vendor
```
## issues
test the api with get books or randoms, if had error below, check your local/bot provider, seems like its just block request to nhentai api.
```
(node:6808) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'status' of undefined
   at Parse.details.getHTML.catch.e (\tokihara\node_modules\nhentai-api-js\index.js:15:18)
``` 

## using bash feature
```sh
$ toki ppa
```  