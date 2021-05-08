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
            .setDescription(`\`${message.author.username}\` 𝐕ient d'essayer d'afficher l'embed de \`Minecraft\` 😂`)
            .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
            .setTimestamp()
            channele.send(embed)
            }
    
        if (message.member.hasPermission('MANAGE_GUILD')){
            var embed = new Discord.MessageEmbed()
            .setColor("#b3c7ff")
            .setTitle("*_ModPack TBMIFO 2.0_*")
            .setAuthor("Bienvenue parmis les Réservistes", "https://cdn.freebiesupply.com/logos/large/2x/minecraft-1-logo-png-transparent.png") //"https://twitch.tv/TBMPQF")
            .setDescription("Nouveaux Mods, nouveau Pack, nouveau ModPack !")
            .setThumbnail("https://hebergeur-minecraft.com/wp-content/uploads/2019/06/ragna.png")
            .addField("Pourquoi TBMIFO ?", "Tout simplement nous sommes trois à l'origine du projet : TBMPQF, MikixFr, FodVodZ.", false)
            .addField("🔗 __Comment nous rejoindre__ ?", "\u200B", false)
            .addField("**__`1- Pré-Installation :`__**", "Tout d'abord tu dois installer la dernière version de [CurseForge](https://curseforge.overwolf.com).", true)
            .addField("\u200B", "\u200B", true)
            .addField("**__`2- Installation du ModPack :`__**", "Une fois CurseForge installé, diriges toi sur \`Browse ModPack\` et recherche \`Ragnamod V\` puis sélectionne/installe la dernière version \`Ragnamod V-5.8.0\`", true)
            .addField("**__`3- Lancement :`__**", "Il t'es désormais possible de nous rejoindre, lance ton jeu et rejoins nous. Voici l'adresse du serveur : ||saisonouitdemi.mine.gg:11155||", false)
            .setImage("http://assets.stickpng.com/images/580b57fcd9996e24bc43c2f5.png")
            .setTimestamp()
            .setFooter("TBMPQF", "https://zupimages.net/up/21/12/igrx.png")
            message.channel.send(embed);
        }
    },
    name: 'minecraft',
}