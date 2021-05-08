const Discord = require('discord.js')

module.exports = {
    run: async (message, args, member) => {
        const channele = message.guild.channels.cache.find(channel => channel.name === '丨𝐋og')
        const target = message.mentions.users.first();

        message.delete();
        if (message.member.roles.cache.some(role => role.name === '丨𝐂ommandement 𝐋ogistique')){
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === '―――丨🐦ゲーム🐦丨―――');
                let muteRole = message.guild.roles.cache.find(role => role.name === '丨𝐌uted');
 
                let memberTarget= message.guild.members.cache.get(target.id);
 
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                const unmuted = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription(`<@${memberTarget.user.id}> 𝐕ient d'être \`𝐔𝐍𝐌𝐔𝐓𝐄𝐃\` par ${message.author}.`)
                message.channel.send(unmuted).then(sent => sent.delete({timeout: 15e3}));
                var embed = new Discord.MessageEmbed()
                        .setColor("YELLOW")
                        .setDescription(`\`${message.author.username}\` 𝐕ient de \`Unmute\` <@${memberTarget.user.id}>.`)
                        .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
                        .setTimestamp()
                channele.send(embed)
            } else{
                const nothing = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription(`Aucun membre trouvé !`)
                message.channel.send(nothing).then(sent => sent.delete({timeout: 5e3}));
                }
        }
        if (!message.member.roles.cache.some(role => role.name === '丨𝐂ommandement 𝐋ogistique')){
            var autoriz = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`𝐓u n\'as pas la permission d\'utiliser cette commande丨:no_entry_sign:`)
            message.channel.send(autoriz).then(sent => sent.delete({timeout: 7e3}))
            var embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`\`${message.author.username}\` 𝐕ient d'essayer de \`Unmute\` un utilisateur 😂`)
            .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
            .setTimestamp()
            channele.send(embed)
        }
    },
    name: 'unmute',
}