const mongoose = require('mongoose')
const Discord = require("discord.js");
const Levels = require('discord-xp')
const config = require('./config.json');
const Client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

module.exports = (Client) => {
    Client.on("message", async (message) => {
        if (message.author.bot) return;
    
        const args = message.content.trim().split(/ +/g)
        const commandName = args.shift().toLowerCase()
        const command = Client.commands.get(commandName.slice(config.prefix.length))
        const user = await Levels.fetch(message.author.id, message.guild.id);

        const deuxRole = message.guild.roles.cache.get("811724918630645790");
        const cinqRole = message.guild.roles.cache.get("813795565708115988");
        const dixRole = message.guild.roles.cache.get("813795488285327362");
        const quinzeRole = message.guild.roles.cache.get("813795598943518732");
        const vingtRole = message.guild.roles.cache.get("813795648791904296");
        const vingtcinqRole = message.guild.roles.cache.get("813795701708030014");
        const trenteRole = message.guild.roles.cache.get("813795755080548393");
        const trentecinqRole = message.guild.roles.cache.get("813795805726113793");
        const quaranteRole = message.guild.roles.cache.get("813795871661359124");
        const quarantecinqRole = message.guild.roles.cache.get("813795921480908840");
        const cinquanteRole = message.guild.roles.cache.get("813795963805761547");

            if (!command){
                const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
                const commandName = args.shift().toLowerCase()
                const uSer = await message.author.id
                const randomXp = Math.floor(Math.random() * 49) + 1;
                const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
            
                if (hasLeveledUp) {
                    Client.channels.cache.get(`717154831823011890`).send(" - " + "<@" + `${uSer}` + ">" + ` | 𝐓u viens de passer au niveau \`${user.level + 1}\` ! - :worm:`);
                    if (user.level == 1){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le grade ${deuxRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add('811724918630645790'))
                        .then(message.member.roles.remove('825023017645899822'));
                    }
                    if(user.level == 4){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le grade ${cinqRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add("813795565708115988"))
                        .then(message.member.roles.remove('811724918630645790'));
                    }
                    if(user.level == 9){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le grade ${dixRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add('813795488285327362'))
                        .then(message.member.roles.remove('813795565708115988')); 
                    }
                    if(user.level == 14){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le grade ${quinzeRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add("813795598943518732"))
                        .then(message.member.roles.remove('813795488285327362'));
                    }
                    if(user.level == 19){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le grade ${vingtRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add('813795648791904296'))
                        .then(message.member.roles.remove('813795598943518732')); 
                    }
                    if(user.level == 24){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le grade ${vingtcinqRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add('813795701708030014'))
                        .then(message.member.roles.remove('813795648791904296')); 
                    }
                    if(user.level == 29){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le grade ${trenteRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add('813795755080548393'))
                        .then(message.member.roles.remove('813795701708030014'));
                    }
                    if(user.level == 34){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le grade ${trentecinqRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add('813795805726113793'))
                        .then(message.member.roles.remove('813795755080548393')); 
                    }
                    if(user.level == 39){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le grade ${quaranteRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add('813795871661359124'))
                        .then(message.member.roles.remove('813795805726113793'));
                    }
                    if(user.level == 44){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le grade ${quarantecinqRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add('813795921480908840'))
                        .then(message.member.roles.remove('813795871661359124')); 
                    }
                    if(user.level == 49){
                        Client.channels.cache.get(`717154831823011890`).send(` - 𝐓u débloques le dernier grade ${cinquanteRole}. 𝐅élicitation ! :tada:`)
                        .then(message.member.roles.add('813795963805761547'))
                        .then(message.member.roles.remove('813795921480908840'));
                    }
                
            }
        }
    }
)}