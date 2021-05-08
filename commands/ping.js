module.exports = {
    run: async (message, args) => {
        message.delete()
        const timeTaken = Date.now() - message.createdTimestamp;
        message.channel.send(`Pinging...`)
        .then((msg) => {
            setTimeout(function() {
            msg.edit(`Pong! :satellite:\nLatence actuelle : ${timeTaken}ms !`);
        }, 2500)})
    },
    name: 'ping',
    help: {description: '𝐋atence du bot ... :satellite:\n𝐒i tout va bien'},
    cooldown: 20,
}