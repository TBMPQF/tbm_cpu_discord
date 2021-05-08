module.exports = {
    run: async (message, args) => {
        message.delete()
        message.channel.send(`https://zupimages.net/up/21/12/1uxx.png`)
    },
    name: 'kaystorms',
    guildOnly: true,
    help: {description: '𝐔ne perle de notre magnifique 𝐊aystorms :pinching_hand:'}
}