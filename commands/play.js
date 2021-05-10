module.exports = {
    run: async (message, args) => {
        message.delete()
    },
    name: 'play',
    help: {description: '𝐉e joue une musique quand tu mets donne une \`URL\` Youtube.'}
}