const Discord = require('discord.js')

module.exports = {
    run: async (message, args) => {
        const channele = message.guild.channels.cache.find(channel => channel.name === '丨𝐋og')
        message.delete()
        if (!message.member.hasPermission('MANAGE_GUILD')){
            var embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`𝐓u n\'as pas la permission d\'utiliser cette commande丨:no_entry_sign:`)
            message.channel.send(embed).then(sent => sent.delete({timeout: 7e3}))
            var embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`\`${message.author.username}\` 𝐕ient d'essayer d'afficher l'embed de \`l'infoXp\` 😂`)
            .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
            .setTimestamp()
            channele.send(embed)
            }
            
        if (message.member.hasPermission('MANAGE_GUILD')){
            var embed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setTitle("――――――――∈` 𝐒ystème d'𝐄xpérience : `∋――――――――")
            .setDescription("`1.` - __**𝐃ans les salons de texte**__ : **══╗**\n\n • 𝐄ntre `1` et `50` points d'expériences.\n\n\n\`2.\` - __**𝐋es rôles 𝐁oost**__ : **══╗**\n\n • <@&717151080617738312> ➠ \`+ 2% d'expériences\`\n • <@&813793302162702426> ➠ \`+ 0.5% d'expériences\`\n\n\n\`3.\` - __**𝐋es rôles à débloquer**__ : **══╗**\n\n • <@&811724918630645790> ➠ \`Niveaux 2\`\n • <@&813795565708115988> ➠ \`Niveaux 5\`\n • <@&813795488285327362> ➠ \`Niveaux 10\`\n • <@&813795598943518732> ➠ \`Niveaux 15\`\n • <@&813795648791904296> ➠ \`Niveaux 20\`\n • <@&813795701708030014> ➠ \`Niveaux 25\`\n • <@&813795755080548393> ➠ \`Niveaux 30\`\n • <@&813795805726113793> ➠ \`Niveaux 35\`\n • <@&813795871661359124> ➠ \`Niveaux 40\`\n • <@&813795921480908840> ➠ \`Niveaux 45\`\n • <@&813795963805761547> ➠ \`Niveaux 50\`")
            .setTimestamp()
            .setFooter("𝐓𝐁𝐌_𝐂𝐏𝐔", "https://zupimages.net/up/21/16/cbyw.png")
            message.channel.send(embed);
        }
    },
    name: 'infoxp',
}