const { MessageEmbed } = require("discord.js")

module.exports = (Client) => {
    const welcomechannelId = "825333855933300778"
    const targetChannelId = "811721151998853150"
    const roleChannelId = "811652152467783690"

    Client.on("guildMemberAdd", (member) => {
        const channel = member.guild.channels.cache.get(welcomechannelId)
        member.roles.add("825023017645899822");
        console.log(`Bienvenue à ${member.user.username}`);

        const memberAdd = new MessageEmbed()
        .setTitle("Oh! Un nouveau membre :warning:")
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Bienvenue <@${member.user.id}>, tu viens de rejoindre la **${member.guild.name}**. \nPrend ton fusil et direct sur le champ de tir !\nN'oublie pas de lire/accepter le ${member.guild.channels.cache.get(targetChannelId).toString()} et de prendre tes ${member.guild.channels.cache.get(roleChannelId).toString()} de jeux.`)
        .setTimestamp()
        .setFooter(`${member.user.username} vient de passer au rang de 丨2nd 𝐂lasse`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor("#ffc394")
        channel.send(memberAdd)
    })

    Client.on("guildMemberRemove", (member) => {
        const logchannelId = "838440585341566996"
        const channel1 = member.guild.channels.cache.get(logchannelId)
        console.log(`${member.user.username} nous a quitté`);
        member.guild.channels.cache.find(channel => channel.id === "838440585341566996")
        const memberRemove = new MessageEmbed()
        .setColor("RED")
        .setTitle(`\`${member.user.username}\` nous a quitté ! :sob:`)
        .setFooter(`丨`, member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setTimestamp()
        channel1.send(memberRemove)
      });
}