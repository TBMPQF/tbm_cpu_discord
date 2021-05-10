const Discord = require('discord.js')
const ytdl = require("ytdl-core");
var list = require("./playlist");

module.exports = {
    run: async (message, args) => {
        if(!message.member.voice.channel){
            message.delete()
            const pasdeSalon = new Discord.MessageEmbed()
            .setColor("GREY")
            .setDescription(`𝐓u dois être dans un salon vocal avant d'effectuer cette commande \`!play\``)
            return message.channel.send(pasdeSalon).then(sent => sent.delete({timeout: 7e3}));
        }
        if(message.member.voice.channel){
            let args = message.content.split(" ");
            if(args[1] == undefined || !args[1].startsWith("https://www.youtube.com/watch?v=")){
                message.delete()
                const vide = new Discord.MessageEmbed()
                .setColor("GREY")
                .setDescription(`𝐓u dois me donner un lien/nom de musique.`)
                return message.channel.send(vide).then(sent => sent.delete({timeout: 7e3}));
            }
            else {
                const video = await videoFinder(args.join(' '));
                if(list.length > 0){
                    list.push(args[1]);
                    const nowPlay = new Discord.MessageEmbed()
                    .setColor("GREY")
                    .setDescription(`𝐎k mon bro.. 𝐉e rajoute \`${video.title}\` à la playlist.`)
                    await message.channel.send(nowPlay)
                }
                else {
                    list.push(args[1]);
                    const nowPlay1 = new Discord.MessageEmbed()
                    .setColor("GREY")
                    .setDescription(`𝐎k mon bro.. 𝐉e rajoute \`${video.title}\` à la playlist.`)
                    await message.channel.send(nowPlay1)

                    message.member.voice.channel.join().then(connection => {
                    playMusic(connection);

                    connection.on("disconnect", () =>{
                       list = [];
                    });

                    }).catch(err => {
                        message.reply("erreur lors de la connexion : " + err);
                    });
                }
            }
        }
    }
}



function playMusic(connection){
    let dispatcher = connection.play(ytdl(list[0], { quality: "highestaudio" }));
      
    dispatcher.on("finish", () => {
        list.shift();
        dispatcher.destroy();
      
        if(list.length > 0){
            playMusic(connection);
        }
        else {
            connection.disconnect();
        }
    });
      
    dispatcher.on("error", err => {
        console.log("erreur de dispatcher : " + err);
        dispatcher.destroy();
        connection.disconnect();
    })
}