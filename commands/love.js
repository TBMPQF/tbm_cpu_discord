const Discord = require("discord.js");

module.exports = {
    run: async (message) => {
        message.delete()
        if (!message.mentions.members.first()){
            var embed = new Discord.MessageEmbed()
            .setDescription(`𝐌entionne quelqu'un pour calculer le pourcentage de 𝐋ove丨:heart_decoration: `)
            message.channel.send(embed).then(sent => sent.delete({timeout: 5e3})
            )}
        const person = message.mentions.members.first();

        const love = Math.round(Math.random() * 100);
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
        
        if (message.mentions.members.first()){
            var loveEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("**𝐋ove 𝐏ourcentage !**")
            .setDescription(`${message.author} aime ${person} a ${love}% !\n\n${loveLevel}`)
            message.channel.send(loveEmbed)
        }
    },
    name: "love",
    help: {description: "𝐐ui aimeras-tu le plus ici ? 💔"}
}