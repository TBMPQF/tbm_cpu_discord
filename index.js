require('dotenv').config();

const fs = require("fs");
const Discord = require("discord.js");
const welcome = require("./welcome");
const Client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const config = require('./config.json');
const mongoose = require("mongoose");
const Levels = require('discord-xp');
const level = require("./level-system");

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => {
    console.log("La Base de donnée est connectée.");
})
  .catch((err) => {
    console.log(err);
});
Levels.setURL(process.env.DB_CONNECT);

Client.commands = new Discord.Collection();
Client.aliases = new Discord.Collection();
 
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        Client.commands.set(command.name, command)

        if (command.aliases) {
          command.aliases.forEach(alias => {
              Client.aliases.set(alias, command);
          });
        }
    });
});

const cooldowns = new Map();

Client.on("ready", () => {
  const time = Date();
  console.log(`Le Bot est Opérationnel... ${time}`);
  Client.user.setActivity("TBMlemanifik", {
      type: "STREAMING",
      url: "https://www.twitch.tv/tbmpqf"
  }, 100)
  level(Client)
  welcome(Client)
});

//Ajouté un rôle reaction
Client.on("messageReactionAdd", async (reaction, user, message) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  
  if (!reaction.message.guild) return;

  if (reaction.emoji.name === "📥"){ // Ticket Système, ouvrir un channel
    reaction.users.remove(user);

    reaction.message.guild.channels.create(`丨𝐓icket ${user.username.substr(0,18)}`, {
      type: "text",
      parent: "823950661523603466",
      topic: `𝐓icket ouvert ouvert par ${user.tag}. 𝐒i tu veux fermer le ticket réagis avec 🔒`,
      permissionOverwrites: [
        { id: user.id, allow: ["SEND_MESSAGES", "VIEW_CHANNEL"], },
        { id: reaction.message.guild.roles.everyone, deny: ["VIEW_CHANNEL"], },
      ]
    }).then(ch => {
      var ticketdemande = new Discord.MessageEmbed()
      .setColor("GREY")
      .setDescription(`𝐓on ticket vient d'être ouvert. Merci de patienter, un modérateur prendra soin de toi d'ici peu.`)
      ch.send(ticketdemande).then(message => message.react("🔒"))
    })
  }

  if (reaction.emoji.name === "🔒"){ // Ticket système, fermeture channel
    if (!reaction.message.channel.name.includes("丨𝐓icket-")) return;
    reaction.users.remove(user);
    reaction.message.react("✅");
    reaction.message.react("❌");
  }

  if (reaction.emoji.name === "✅"){ // Ticket système, valider la fermeture
    if (!reaction.message.channel.name.includes("丨𝐓icket-")) return;
    reaction.message.channel.delete()
  }

  if (reaction.emoji.name === "❌"){ // Ticket système, annulé la fermeture
    if (!reaction.message.channel.name.includes("丨𝐓icket-")) return;
    reaction.message.reactions.cache.get("✅").remove();
    reaction.message.reactions.cache.get("❌").remove();
  }


  if (reaction.emoji.id === "827661704065318973") { // Donne le rôle Règlement
    await reaction.message.guild.members.cache.get(user.id).roles.add("811662602530717738")
    console.log(`Règlement validé par ${user.username}`)
  }
  
  if (reaction.message.channel.id === "811652152467783690") {
    if (reaction.emoji.id === "811709208726077440") { // Donne le rôle Apex Legends
      await reaction.message.guild.members.cache.get(user.id).roles.add("811662603713511425");
      console.log(`Rôle Apex Legends ajouté par ${user.username}`)
    }
    if (reaction.emoji.id === "813798557026877460") { // Donne le rôle Rocket League
      await reaction.message.guild.members.cache.get(user.id).roles.add("811663563558092841");
      console.log(`Rôle Rocket League ajouté par ${user.username}`)
    }
    if (reaction.emoji.id === "813799505077076008") { // Donne le rôle Minecraft
      await reaction.message.guild.members.cache.get(user.id).roles.add("811663653140168741");
      console.log(`Rôle Minecraft ajouté par ${user.username}`)
    }
    if (reaction.emoji.id === "813800088916197416") { // Donne le rôle 7 Days to Die
      await reaction.message.guild.members.cache.get(user.id).roles.add("811663679351160890");
      console.log(`Rôle 7 Days to Die ajouté par ${user.username}`)
    }
    if (reaction.emoji.id === "813799741791797308") { // Donne le rôle Call of Duty
      await reaction.message.guild.members.cache.get(user.id).roles.add("813800188317663254");
      console.log(`Rôle Call of Duty ajouté par ${user.username}`)
    }
    if (reaction.emoji.id === "813051787228872744") { // Donne le rôle Among Us
      await reaction.message.guild.members.cache.get(user.id).roles.add("813800381393141811");
      console.log(`Rôle Among Us ajouté par ${user.username}`)
    }
    if (reaction.emoji.id === "908486538625695785") { // Donne le rôle New World
      await reaction.message.guild.members.cache.get(user.id).roles.add("907320710559576105");
      console.log(`Rôle New World ajouté par ${user.username}`)
    }
  } else {
    return;
  }
});

//Supprimé un rôle d'une réaction
Client.on("messageReactionRemove", async (reaction,user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (!reaction.message.guild) return;

  if (reaction.emoji.id === "827661704065318973") { // Règlement
    await reaction.message.guild.members.cache.get(user.id).roles.remove("811662602530717738");
    console.log(`Règlement décocher par ${user.username}`)
  }

  if (reaction.message.channel.id === "811652152467783690") {
    if (reaction.emoji.id === "811709208726077440") { //Apex Legends
      await reaction.message.guild.members.cache.get(user.id).roles.remove("811662603713511425");
      console.log(`Rôle Apex Legends supprimé par ${user.username}`)
    }
    if (reaction.emoji.id === "813798557026877460") { //Rocket League
      await reaction.message.guild.members.cache.get(user.id).roles.remove("811663563558092841");
      console.log(`Rôle Rocket League supprimé par ${user.username}`)
    }
    if (reaction.emoji.id === "813799505077076008") { //Minecraft
      await reaction.message.guild.members.cache.get(user.id).roles.remove("811663653140168741");
      console.log(`Rôle Minecraft supprimé par ${user.username}`)
    }
    if (reaction.emoji.id === "813800088916197416") { //7 Days to Die
      await reaction.message.guild.members.cache.get(user.id).roles.remove("811663679351160890");
      console.log(`Rôle 7 Days to Die supprimé par ${user.username}`)
    }
    if (reaction.emoji.id === "813799741791797308") { //Call of Duty
      await reaction.message.guild.members.cache.get(user.id).roles.remove("813800188317663254");
      console.log(`Rôle Call of Duty supprimé par ${user.username}`)
    }
    if (reaction.emoji.id === "813051787228872744") { //Among Us
      await reaction.message.guild.members.cache.get(user.id).roles.remove("813800381393141811");
      console.log(`Rôle Among Us supprimé par ${user.username}`)
    }
    if (reaction.emoji.id === "908486538625695785") { //New World
      await reaction.message.guild.members.cache.get(user.id).roles.remove("907320710559576105");
      console.log(`Rôle New World supprimé par ${user.username}`)
    }
  } else {
    return;
  }
});

Client.on("message", async message => { // Réagis au messages aux dessus
  if (message.author.bot || message.channel.type === 'dm') return;
  if(message.content === "salut"||message.content === "slt"||message.content === "yo"||message.content === "yoo"||message.content === "yooo"||message.content === "salu"||message.content === "Salut"||message.content === "YO"||message.content === "salut"||message.content === "Yo"||message.content === "cc"||message.content === "CC"||message.content === "Cc"){
    message.react("🤟")
  }
  if(message.content === "MÉNON"){
    message.react("831961805705183254")
  }
  if(message.content === "Bon toutou"||message.content === "bon toutou"||message.content === "Clébard"||message.content === "clébard"||message.content === "clebard"||message.content === "Clebard"){
    message.react("843919516375187478")
  }
  if(message.content === "pk"||message.content === "PK"||message.content === "PK?"||message.content === "Pk?"||message.content === "Pk"||message.content === "Pq?"||message.content === "Pq"||message.content === "pq"||message.content === "PQ"||message.content === "pk ?"||message.content === "pk?"||message.content === "xd"||message.content === "xD"||message.content === "XD"||message.content === "Xd"){
    await message.react("🇸")
    await message.react("🇹")
    await message.react("🇴")
    await message.react("🇵")
    await message.react("‼️")
  }
  if(message.content === "tfq ?"||message.content === "tfk ?"||message.content === "tfq"||message.content === "tfk"||message.content === "tfq?"||message.content === "tfk?"||message.content === "sa va"||message.content === "sa va?"||message.content === "sava"||message.content === "Sa va?"||message.content === "Sava"||message.content === "sa va ?"||message.content === "simer"||message.content === "re"||message.content === "RE"||message.content === "Re"||message.content === "cimer"||message.content === "LOL"){
    message.react("📛")
  }

  const args = message.content.trim().split(/ +/g)
  const commandName = args.shift().toLowerCase()
  const command = Client.commands.get(commandName.slice(config.prefix.length)) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  //if (!commandName.startsWith(config.prefix)) return
  if (!command) return

  if(!cooldowns.has(command.name)){
    cooldowns.set(command.name, new Discord.Collection());
  }

  const current_time = Date.now()
  const time_stamps = cooldowns.get(command.name);
  const cooldown_amount = (command.cooldown) * 1000;
  if (time_stamps.has(message.author.id)){
    const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

    if (current_time < expiration_time){
      const time_left = (expiration_time - current_time) / 1000;
      message.delete()
      var embed = new Discord.MessageEmbed()
        .setDescription(`𝐑eviens me voir dans \`${time_left.toFixed(0)}\` secondes. 𝐓u pourras utiliser cette commande à nouveau.`)
        .setFooter(`|`, message.author.displayAvatarURL({dynamic: true, size: 64}))
        .setTimestamp()
        return message.channel.send(embed).then(sent => sent.delete({timeout: 10e3})
    )}
  }
  time_stamps.set(message.author.id, current_time);
  setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

  command.run(message, args, Client)
})

Client.login(process.env.TOKEN);
