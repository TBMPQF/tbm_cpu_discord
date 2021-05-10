var list = [];

if(message.content === prefix + "playlist"){
    let message = "**PLAYLIST :**\n";
    for(var i = 1;i < list.length;i++){
    let name;

    let getinfo = await ytdl.getBasicInfo(list[i]);
    name = getinfo.videoDetails.title;
    message += '**' + i + ".** " + name + '\n';

    }
    message.channel.send(message);
    
  }