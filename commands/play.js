const Discord = require('discord.js')
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");

module.exports = {
    run: async (message, args) => {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel){
            message.delete()
            const pasdeSalon = new Discord.MessageEmbed()
            .setColor("GREY")
            .setDescription(`𝐓u dois être dans un salon vocal avant d'effectuer cette commande \`!play\``)
            return message.channel.send(pasdeSalon).then(sent => sent.delete({timeout: 7e3}));
        }

        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')){
            message.delete()
            const connectPerm = new Discord.MessageEmbed()
            .setColor("GREY")
            .setDescription(`𝐓u n'as pas la permission de te connecter aux salons.`)
            return message.channel.send(connectPerm).then(sent => sent.delete({timeout: 7e3}));
        }
        if(!permissions.has('SPEAK')){
            message.delete()
            const connectPerm2 = new Discord.MessageEmbed()
            .setColor("GREY")
            .setDescription(`𝐓u n'as pas la permission de parler dans les salons.`)
            return message.channel.send(connectPerm2).then(sent => sent.delete({timeout: 7e3}));
        }
        if(!args.length){
            message.delete()
            const vide = new Discord.MessageEmbed()
            .setColor("GREY")
            .setDescription(`𝐓u dois me donner un lien/nom de musique.`)
            return message.channel.send(vide).then(sent => sent.delete({timeout: 7e3}));
        }

        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('leaving channel');
            });
 
            await message.reply(`:thumbsup: Now Playing ***Your Link!***`)
 
            return
        }

        const connection = await voiceChannel.join();
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));

        if (video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
            });
            const nowPlay = new Discord.MessageEmbed()
            .setColor("GREY")
            .setDescription(`𝐎k mon bro.. 𝐉e lance \`${video.title}\``)
            await message.channel.send(nowPlay)
        } else {
            const deso = new Discord.MessageEmbed()
            .setColor("GREY")
            .setDescription(`𝐎ups désolé... 𝐉e ne trouve rien.`)
            await message.channel.send(deso)
        }

    },
    name: "play",
}