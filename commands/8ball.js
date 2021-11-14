const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Peut-être', 'Évidemment', 'Sans aucun doute mon bro', 'Pourquoi pas', 'Certainement pas!', 'J\'ai un doûte', 'La réponse D', 'Inshallah', 'Encore heureux', 'Imagine', 'Parfaitement', 'A merveille', 'Pas du tout', 'Absolument pas', 'Il semblerait', '01001111 01110101 01101001', 'Imagine juste...']

 
module.exports = {
    run: (message, args) => {
        message.delete()
        const question = args.join(' ')
        const result = Math.floor((Math.random() * replies.length));
        if(!question){
            var embed = new Discord.MessageEmbed()
            .setDescription("𝐒i tu me posais une question ça serait encore mieux丨:thinking:")
            message.channel.send(embed).then(sent => sent.delete({timeout: 5e3})
            )}
        if(question){
            message.channel.send(new Discord.MessageEmbed()
                .setColor("#ffc394")
                .addField("Question :", question)
                .addField("Réponse :", replies[result])
                .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 64})))
        }
    },
    name: '8ball',
    help: {description: "𝐏ose moi une question que je pourrais répondre par \`𝐎𝐔𝐈\` ou \`𝐍𝐎𝐍\`, vas-y... j'attends"}
}