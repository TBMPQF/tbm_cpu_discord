module.exports = {
    run: async (Client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");

        let search = args.join(" ");

        if(!search) return message.channel.send('Please provide a search query');

        Client.player.play(message, search)
    },
    name: "play",
}