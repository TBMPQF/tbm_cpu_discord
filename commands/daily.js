const Discord = require('discord.js');
const Client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const Levels = require('discord-xp')

module.exports = {
    run: async (message, user) => {
      message.delete()
      const channele = message.guild.channels.cache.find(channel => channel.name === '丨𝐋og')
      const dailyXP = Math.floor(Math.random() * 1) + 200;
      const dailyRecup = await Levels.appendXp(message.author.id, message.guild.id, dailyXP);
      const dailyEmbed = new Discord.MessageEmbed()
      .setColor("GOLD")
      .setTitle(`\`${message.author.username}\` 𝐓u viens de récuperer ton bonus quotidien ! \`+200 𝐗p\` :tada:`)
      .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
      .setTimestamp()
      message.channel.send(dailyEmbed).then(sent => sent.delete({timeout: 15e3}))
      const quiaDaily = new Discord.MessageEmbed()
      .setColor("ORANGE")
      .setTitle(`\`${message.author.username}\` 𝐕ient de récuperer son bonus quotidien.`)
      .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
      .setTimestamp()
      channele.send(quiaDaily)

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

      const channel = message.guild.channels.cache.find(channel => channel.name === '🏆丨𝐈mplications')

      if (dailyRecup) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        const uSer = await message.author.id
        channel.send(" - " + "<@" + `${uSer}` + ">" + ` | 𝐓u viens de passer au niveau \`${user.level}\` ! - :worm:`);
        if(user.level == 2){
            channel.send(` - 𝐓u débloques le grade ${deuxRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add('811724918630645790'))
            .then(message.member.roles.remove('825023017645899822')); 
        }
        if(user.level == 5){
            channel.send(` - 𝐓u débloques le grade ${cinqRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add("813795565708115988"))
            .then(message.member.roles.remove('811724918630645790'));
        }
        if(user.level == 10){
            channel.send(` - 𝐓u débloques le grade ${dixRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add('813795488285327362'))
            .then(message.member.roles.remove('813795565708115988'));
        }
        if(user.level == 15){
            channel.send(` - 𝐓u débloques le grade ${quinzeRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add("813795598943518732"))
            .then(message.member.roles.remove('813795488285327362'));
        }
        if(user.level == 20){
            channel.send(` - 𝐓u débloques le grade ${vingtRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add('813795648791904296'))
            .then(message.member.roles.remove('813795598943518732'));
        }
        if(user.level == 25){
            channel.send(` - 𝐓u débloques le grade ${vingtcinqRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add('813795701708030014'))
            .then(message.member.roles.remove('813795648791904296'));
        }
        if(user.level == 30){
            channel.send(` - 𝐓u débloques le grade ${trenteRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add('813795755080548393'))
            .then(message.member.roles.remove('813795701708030014'));
        }
        if(user.level == 35){
            channel.send(` - 𝐓u débloques le grade ${trentecinqRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add('813795805726113793'))
            .then(message.member.roles.remove('813795755080548393'));
        }
        if(user.level == 40){
            channel.send(` - 𝐓u débloques le grade ${quaranteRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add('813795871661359124'))
            .then(message.member.roles.remove('813795805726113793'));
        }
        if(user.level == 45){
            channel.send(` - 𝐓u débloques le grade ${quarantecinqRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add('813795921480908840'))
            .then(message.member.roles.remove('813795871661359124'));
        }
        if(user.level == 50){
            channel.send(` - 𝐓u débloques le dernier grade ${cinquanteRole}. 𝐅élicitation ! :tada:`)
            .then(message.member.roles.add('813795963805761547'))
            .then(message.member.roles.remove('813795921480908840'));
        }
      }
    },
    name: 'daily',
    help: {description: '𝐑écupère ton bonus d\'expérience quotidien ! `+200 𝐗p`'},
    cooldown: 86400,
}