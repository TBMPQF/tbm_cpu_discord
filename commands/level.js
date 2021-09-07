const mongoose = require('mongoose')
const Discord = require("discord.js");
const Levels = require('discord-xp')
const { MessageEmbed } = require("discord.js");

module.exports = {
    run: async (message, args, member, user) => {
        message.delete()

        const user1 = await Levels.fetch(message.author.id, message.guild.id);
        const users = await Levels.fetch(message.author.id, message.guild.id);
        const u = await message.author.username

        if(user1.level === undefined){
            var embede = new Discord.MessageEmbed()
            .setDescription("𝐓u dois d'abord écrire un message mon bro des bros丨:pencil:")
            message.channel.send(embede).then(sent => sent.delete({timeout: 5e3})
            )}
        if(user1.level >= 0){
            const xpRequired = Levels.xpFor(50)
            var embed = new Discord.MessageEmbed()
            .setColor("#0099E1")
            .setTitle(`Implication de : *__${u}__*`)
            .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 512}))
            .addField(`Expériences :\n ${users.xp}/${xpRequired}`, "\u200B", true)
            .addField(`Niveaux :\n ${users.level}`, "\u200B", true)
            .setTimestamp()
            message.channel.send(embed)
            }
        
    },
    name: 'level',
    aliases: ['lvl'],
    help: {description: '𝐓on niveau sur le serveur (Entre `1` et `50` points d\'expériences par message)\n𝐌erci de ne pas floodez sous peine de sanction.'}
}