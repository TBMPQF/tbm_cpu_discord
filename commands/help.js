const Discord = require('discord.js'),
    config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        message.delete()
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command || !command.help){
            var embed = new Discord.MessageEmbed()
            .setDescription("𝐄uh.. 𝐃\'où tu me sors cette commande toi ?")
            message.channel.send(embed).then(sent => sent.delete({timeout: 7e3})
            )}
            message.channel.send(new Discord.MessageEmbed()
                .setColor("GREY")
                .setDescription(`**𝐂ommande : ${command.name}**\n\n${command.help.description}\n\n𝐒yntaxe : \`${config.prefix}${command.name}${command.help.syntax ? ` ${command.help.syntax}` : ''}\``))
        }
        else {
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('𝐋iste des 𝐂ommandes')
                .setDescription(`${client.commands.filter(command => command.help).map(command => `\`${config.prefix}${command.name}\``).join(' ')}\n\nPour plus d'informations sur une commande, tapez \`${config.prefix}help [nom de la commande]\``))
        }
    },
    name: 'help',
    help: {description: '𝐏ermet d\'affiché toute les commandes du serveur. :screwdriver:'}
}