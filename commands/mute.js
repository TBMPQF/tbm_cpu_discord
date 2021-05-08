const Discord = require('discord.js')
const ms = require('ms');

module.exports = {
    run: async (message, args) => {
        message.delete()
        const channele = message.guild.channels.cache.find(channel => channel.name === '丨𝐋og')
        const target = message.mentions.users.first();

        if (message.member.roles.cache.some(role => role.name === '丨𝐂ommandement 𝐋ogistique')){
            if (target) {
 
                const mainRole = message.guild.roles.cache.find(role => role.name === '―――丨🐦ゲーム🐦丨―――');
                const muteRole = message.guild.roles.cache.find(role => role.name === '丨𝐌uted');
 
                const memberTarget = message.guild.members.cache.get(target.id);
 
                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    const muted0 = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setDescription(`<@${memberTarget.user.id}> 𝐕ient d'être \`𝐌𝐔𝐓𝐄𝐃\` pour une durée illimitée par ${message.author}.`)
                    message.channel.send(muted0).then(sent => sent.delete({timeout: 15e3}));
                    var embed = new Discord.MessageEmbed()
                        .setColor("YELLOW")
                        .setDescription(`\`${message.author.username}\` 𝐕ient de \`Mute\` <@${memberTarget.user.id}> pour une durée illimitée.`)
                        .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
                        .setTimestamp()
                        channele.send(embed)
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                const muted = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription(`<@${memberTarget.user.id}> 𝐕ient d'être \`𝐌𝐔𝐓𝐄𝐃\` pendant \`${ms(ms(args[1]))}\` par ${message.author}.`)
                message.channel.send(muted).then(sent => sent.delete({timeout: 15e3}));
                var embed = new Discord.MessageEmbed()
                        .setColor("YELLOW")
                        .setDescription(`\`${message.author.username}\` 𝐕ient de \`Mute\` <@${memberTarget.user.id}> pour \`${ms(ms(args[1]))}\`.`)
                        .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
                        .setTimestamp()
                channele.send(embed)
 
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
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
            .setDescription(`\`${message.author.username}\` 𝐕ient d'essayer de \`Mute\` un utilisateur 😂`)
            .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
            .setTimestamp()
            channele.send(embed)
        }
    },
    name: 'mute',
}