const ytdl = require("ytdl-core");
var list = require("./playlist");

if(message.content.startsWith(prefix + "play")){
    if(message.member.voice.channel){
        let args = message.content.split(" ");
        if(args[1] == undefined || !args[1].startsWith("https://www.youtube.com/watch?v=")){
            message.reply("Lien de la vidéo non ou mal mentionné.");
        }
        else {
            if(list.length > 0){
                list.push(args[1]);
                message.reply("Vidéo ajouté a la liste !")
            }
            else {
                list.push(args[1]);
                message.reply("Vidéo ajouté a la liste !");

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