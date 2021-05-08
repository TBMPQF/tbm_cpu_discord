const Discord = require("discord.js");

module.exports = {
    run: async (message, args) => {
        message.delete()
        if (!message.member.hasPermission('MANAGE_GUILD')){
          var embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription(`𝐓u n\'as pas la permission d\'utiliser cette commande丨:no_entry_sign:`)
          message.channel.send(embed).then(sent => sent.delete({timeout: 7e3})
          )}
        if (message.member.hasPermission('MANAGE_GUILD')){
          message.channel.send('3')
          .then((msg) => {
            setTimeout(function() {
            msg.edit('1');
          }, 1000)})
        }
    },
    name: 'testedit',
}