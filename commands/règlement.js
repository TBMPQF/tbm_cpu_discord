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
            .setDescription(`\`${message.author.username}\` 𝐕ient d'essayer d'afficher l'embed de \`Règlement\` 😂`)
            .setFooter(`丨`, message.author.displayAvatarURL({dynamic: true, size: 64}))
            .setTimestamp()
            channele.send(embed)
          }

        let channel = Client.channels.cache.get("811631297218347091");
        const regleEmoji = message.guild.emojis.cache.get("827661704065318973");

        if (message.member.hasPermission('MANAGE_GUILD')){
          var embed = new Discord.MessageEmbed()
          .setColor("#b3c7ff")
          .setTitle("*_~Acceptez le règlement de la TBMPQFamily pour accéder à l'intégralité du serveur~_*")
          .setAuthor("Bienvenue à toi petit !", "https://static.wikia.nocookie.net/la-grande-aventure/images/8/88/Logo_Arm%C3%A9e.png/revision/latest/scale-to-width-down/340?cb=20150930080303&path-prefix=fr") //"https://twitch.tv/TBMPQF")
          .setThumbnail("https://www.zupimages.net/up/21/12/uc7d.png")
          .addField("**:wave:`丨𝐁ienvenue :`**", "Tout d'abord bienvenue parmi nous. Tu peux à présent lire et valider le règlement puis valider tes rôles dans le canal `Rôles`, Si tu es un streamer, tu peux obtenir le rôle `Streamer` pour avoir les notifications de TES lives sur notre serveur ! Pour toute demande, informations ou signalement, tu peux ouvrir un ticket dans `le salon prévu à cet effet`, un modérateur se fera un plaisir de te répondre.", false)
          .addField("**:rotating_light:`丨𝐌entions :`**", "Évitez les mentions inutiles et `réfléchissez` avant de poser une question. Vous n'êtes pas seuls et les réponses ont souvent déjà été données. Il sera punissable d'une `exclusion` et/ou d'un `bannissement` avec sursis.", false)
          .addField("**:warning:`丨𝐏ublicités :`**", "Toute publicité `non autorisé` par un membre du staff est `strictement interdites` sur le serveur mais également par messages privés. Il sera punissable d'une `exclusion` et/ou d'un `bannissement` avec sursis.", false)
          .addField("**:underage:`丨𝐍SFW :`**", "NSFW, NSFL et le contenu malsain n'est `pas autorisé` sur le serveur. Il sera punissable d'un `bannissement` !", false)
          .addField("**:flag_fr:`丨𝐅rançais :`**", "La structure est `francophone`, veuillez donc écrire français uniquement pour une compréhension facile de tous les membres de la communauté. Il sera punissable si les avertissements sont répétés et non écoutés.", false)
          .addField(`N'oublie pas de réagir avec la réaction pour avoir accès à l'intégralité du serveur.`, "\u200B")
          .setDescription(`Réagis avec ${regleEmoji}`)
          .setFooter("TBMPQF", "https://zupimages.net/up/21/12/igrx.png")
          message.channel.send(embed).then(async msg => {
          await msg.react(regleEmoji);
          });
        }
    },
    name: 'règlement',
}