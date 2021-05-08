const Discord = require('discord.js')
const Client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

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
            .setDescription(`\`${message.author.username}\` 𝐕ient d'essayer d'afficher l'embed de \`RoleReact\` 😂`)
            .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
            .setTimestamp()
            channele.send(embed)
            }
        
        const apexRole = message.guild.roles.cache.get("811662603713511425");
        const rocketRole = message.guild.roles.cache.get("811663563558092841");
        const minecraftRole = message.guild.roles.cache.get("811663653140168741");
        const amongusRole = message.guild.roles.cache.get("813800381393141811");
        const daystodieRole = message.guild.roles.cache.get("811663679351160890");
        const warzoneRole = message.guild.roles.cache.get("813800188317663254");
        const apexEmoji = message.guild.emojis.cache.get("811709208726077440");
        const rocketEmoji = message.guild.emojis.cache.get("813798557026877460");
        const minecraftEmoji = message.guild.emojis.cache.get("813799505077076008");
        const amongusEmoji = message.guild.emojis.cache.get("813051787228872744");
        const daystodieEmoji = message.guild.emojis.cache.get("813800088916197416");
        const warzoneEmoji = message.guild.emojis.cache.get("813799741791797308");

        if (message.member.hasPermission('MANAGE_GUILD')){
            var embed = new Discord.MessageEmbed()
            .setColor("#b3c7ff")
            .setTitle("𝐒éléctionne ta `réaction` pour obtenir le `rôle`.")
            .setDescription(`${apexEmoji} - ${apexRole.toString()}\n\n ${rocketEmoji} - ${rocketRole.toString()}\n\n ${minecraftEmoji} - ${minecraftRole.toString()}\n\n ${daystodieEmoji} - ${daystodieRole.toString()}\n\n ${warzoneEmoji} - ${warzoneRole.toString()}\n\n ${amongusEmoji} - ${amongusRole.toString()}`)
            message.channel.send(embed).then(async msg => {
                await msg.react(apexEmoji);
                await msg.react(rocketEmoji);
                await msg.react(minecraftEmoji);
                await msg.react(daystodieEmoji);
                await msg.react(warzoneEmoji);
                await msg.react(amongusEmoji);
            });
        }
    },
    name: 'rolereact',
}