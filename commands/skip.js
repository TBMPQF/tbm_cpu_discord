module.exports = {
    run: async (Client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");

        Client.player.skip(message);
    },
    name: "skip",
}