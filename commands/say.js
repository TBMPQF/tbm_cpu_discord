const config = require('../config.json')
const Discord = require("discord.js");
 
module.exports = {
    run: (message, args) => {
        const channele = message.guild.channels.cache.find(channel => channel.name === '丨𝐋og')
        message.delete()
        if (!message.member.hasPermission('MANAGE_GUILD')){
            var embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`𝐓u n\'as pas la permission d\'utiliser cette commande丨:no_entry_sign:`)
            message.channel.send(embed).then(sent => sent.delete({timeout: 7e3}))
            var embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`\`${message.author.username}\` 𝐕ient d'essayer de faire parler le bot 😂`)
            .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
            .setTimestamp()
            channele.send(embed)
            }
        if (!args[0]){
        var embedy = new Discord.MessageEmbed()
            .setColor("GREY")
            .setDescription('𝐂\'est mieux avec un texte non ?')
            message.channel.send(embedy).then(sent => sent.delete({timeout: 5e3})
            )}
        if (message.member.hasPermission('MANAGE_GUILD')){
            message.channel.send(message.content.trim().slice(`${config.prefix}say`.length))
        }
    },
    name: 'say',
}