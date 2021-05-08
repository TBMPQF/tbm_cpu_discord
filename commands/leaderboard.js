const Discord = require ('discord.js')
const Client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const Levels = require('discord-xp');

module.exports = {
    run: async (message, user) => {
        message.delete()
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
        if (rawLeaderboard.length < 1) return reply("Personne n'est dans le leaderboard pour le moment.\n C'est qui personne ? :thinking:");
        const leaderboard = await Levels.computeLeaderboard(Client, rawLeaderboard); 
        const lb = leaderboard.map(e => `**${e.position}**. <@${e.userID}>\n𝐍iveaux: *${e.level}*\n𝐗P: \`${e.xp.toLocaleString()}\``);
        if (!rawLeaderboard.length < 1){
            var leaderEmbed = new Discord.MessageEmbed()
            .setColor("#b3c7ff")
            .setDescription(`__**𝐂lassement du serveur **__: \n\n${lb.join("\n\n")}`)
            .setThumbnail("https://zupimages.net/up/21/12/uc7d.png")
            .setFooter(`a fait la demande丨`, message.author.displayAvatarURL({dynamic: true, size: 512}))
            .setTimestamp()
            message.channel.send(leaderEmbed)
        }
    },
    name: 'leaderboard',
    help: {description: '𝐂lassement d\'expérience sur le serveur. 𝐐ue le meilleur gagne.'}
}