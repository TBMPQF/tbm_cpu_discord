const Discord = require("discord.js");
const Client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

module.exports = {
    run: async (message, args, member) => {
        const channele = message.guild.channels.cache.find(channel => channel.name === '丨𝐋og')
        message.delete()
        //if(message.author.id === "179317321100296194") return
        if (!message.member.hasPermission('MANAGE_GUILD')){ //Si il n'a pas l'autorisation
            var autoriz = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`𝐓u n\'as pas la permission d\'utiliser cette commande丨:no_entry_sign:`)
            message.channel.send(autoriz).then(sent => sent.delete({timeout: 7e3}))
            var embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`\`${message.author.username}\` 𝐕ient d'essayer de \`Clear\` des messages 😂`)
            .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
            .setTimestamp()
            channele.send(embed)
            }

        if (message.member.hasPermission('MANAGE_GUILD')){ //SI il a l'autorisation
            const count = args[0]
            if (!/\d+/.test(count)){
                var embede = new Discord.MessageEmbed()
                .setDescription(`𝐓u dois me donner un nombre de message à supprimer tocard.`)
                message.channel.send(embede).then(sent => sent.delete({timeout: 5e3})
                )}
            if (count < 1 || count > 99){
                var embedee = new Discord.MessageEmbed()
                .setDescription(`Le nombre de message doit être compris entre 1 et 99.`)
                message.channel.send(embedee).then(sent => sent.delete({timeout: 5e3})
                )}
            const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
            var eembedee = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**\`${size - 1}\`** messages ont été supprimés ! :recycle:`)
            message.channel.send(eembedee).then(sent => sent.delete({timeout: 5e3})
        )}
    },
    name: 'clear',
}