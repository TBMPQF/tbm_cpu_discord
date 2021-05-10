var list = [];

module.exports = {
    run: async (message, args) => {
        const message = "**PLAYLIST :**\n";
            for(var i = 1;i < list.length;i++){
            const name;

            const getinfo = await ytdl.getBasicInfo(list[i]);
            name = getinfo.videoDetails.title;
            message += '**' + i + ".** " + name + '\n';

            }
        message.channel.send(message);
    }
}