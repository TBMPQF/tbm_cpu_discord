const Discord = require('discord.js'),
    replies = ["**Qu'est ce que 15 somaliens dans un fond blanc ?**\n\n||Un code barre.||", "**À quel moment l’acné devient critique ?**\n\n||Quand les aveugles commencent à lire sur ton visage.||",
            "**Je ne suis pas raciste**\n\n||Pour preuve mon jardinier qui ramasse mon coton est noir.||", "**Que dit un ordinateur pour draguer ?**\n\n||Coucou, tu veux voir mes 64 bits ?||",
            "**Quel est le parc où les gens tremblent ?**\n\n||Le Parkinson||", "**Docteur, j'ai besoin de lunettes.**\n\n||Oui certainement. Ici c'est une banque.||",
            "**Pourquoi les oiseaux volent-ils vers le sud ?**\n\n||Car à pied, c'est beaucoup trop long.||", "**Qu'est-ce qu'une blonde avec une mèche brune ?**\n\n||Un brin d'intelligence.||",
            "**Pourquoi les blondes tondent leur gazon avec une tondeuse électrique ?**\n\n||C'est pour qu'elles se servent du fil pour retrouver la maison.||", "**Une fille à son frère : Tu sais que tu fais l'amour beaucoup mieux que papa ?**\n\n||Je sais, maman me l'a déjà dit...||",
            "**Comment les enfants de Tchernobyl compte-t-ils jusqu'à 33 ?**\n\n||Sur leurs doigts...||", "**Une fillette est retrouvée égorgée dans la rue… L'enquêteur questionne le légiste : Elle a été violée ?**\n\n||Non pas encore, j'attendais votre autorisation.||",
            "**Où se retrouvent les musulmans pour danser ?**\n\n||Au bal mosquée.||", "**Comment appelle-on un parking pour les musulmans ?**\n\n||Un parking halal.||",
            "**Que trouve t-on à l'intérieur d'un nez bien propre ?**\n\n||Des empreintes digitales...||", "**Quelle est la capitale de l'île de Tamalou ?**\n\n||Gébobola !||",
            "**Docteur j'ai mal à l'œil gauche quand je bois mon café. Pourquoi ?**\n\n||Normal, essayez d'enlever la cuillère de la tasse.||", "**Qu’est-ce qu’un canife?**\n\n||Un petit fien||",
            "**Un œuf attend un autre œuf :**\n\n||Si dans 5 minutes, il n’est pas là, j’me casse !||", "**Qui court après un arabe avec une TV ?**\n\n||Son petit frère avec la télécommande||",
            "**Que dit un aveugle lorsqu'on lui donne du papier de verre ?**\n\n||C'est écrit serré.||", "**Grâce à quoi peut-on enlever le chewing-gum dans les cheveux ?**\n\n||Le cancer.||",
            "**Quelle est la différence entre la sodomie et les épinards ?**\n\n||Même avec du beurre, les enfants n’aiment pas.||", "**Qu'est-ce qui est mieux que gagner une médaille d'or aux Jeux Paralympiques ?**\n\n||Marcher.||",
            "**Quelle partie du légume ne passe pas dans le mixer ?**\n\n||La chaise roulante.||", "**Comment reconnaît-on une lettre envoyée par un lépreux ?**\n\n||La langue est collée au timbre.||",
            "**Pourquoi est-ce difficile de rompre avec une copine Japonaise ?**\n\n||Tu dois larguer deux bombes avant qu’elle comprenne||", "**Que faire quand on trouve un épileptique en crise dans une baignoire ?**\n\n||Ajouter de la lessive et y jeter son linge sale.||",
            "**Comment sortir un bébé d'un mixer ?**\n\n||Avec une paille.||", "**Quelle est la différence entre un camp d'entrainement terroriste et un orphelinat ?**\n\n||Je ne sais pas, je conduis juste le drone.||",
            "**Qu'est-ce qui est pire que de doigter sa propre soeur ?**\n\n||C'est d'y retrouver l'alliance de son père.||", "**Qu'est-ce qui a deux pattes et qui saigne ?**\n\n||Un demi-chien.||",
            "**Maman, maman pourquoi tu gémis ?**\n\n||Tais toi et lèche.||", "**A quoi reconnaît on un chat écrasé ?**\n\n||Il fait un centimètre de large.||",
            "**Quelle est la différence entre un footballeur, un handballeur et un pédophile ?**\n\n||Le footballeur marque du pied, le handballeur marque de la main, et le pédophile Marc Dutroux.||", "**Peut-on prendre un bain quand on a la diarrhée ?**\n\n||Oui si vous en avez assez.||",
            "**Comment un parachutiste aveugle sait-il qu'il va toucher le sol ?**\n\n||Il y a du mou dans la laisse du chien.||", "**Quelle est la différence entre Paul Walker et un ordinateur ?**\n\n||Quand mon ordinateur se plante, ça me soûle.||",
            "**Qu'est ce qui est vert et qui pue ?**\n\n||Un scout mort au fond d’un bois.||", "**Quel est le légume officiel de l'Allemagne ?**\n\n||Michael Schumacher.||",
            "**Quel est le point commun entre un enfant africain et une fleur ?**\n\n||Ils ont besoin d’eau pendant une semaine et après ils meurent.||", "**Qu'est-ce qui a 5 bras, 3 jambes et 2 pieds ?**\n\n||La ligne d’arrivée au marathon de Boston.||",
            "**Tu connais le cri du spermatozoïde ?**\n\n||La prochaine fois au lieu d'avaler tu croques.||", "**Vous savez pourquoi Valbuena rigole quand il joue au foot ?**\n\n||Parce que l'herbe lui chatouille les couilles !||",
            "**À Paris quand il pleut je suis comme un Tampax**\n\n||Je suis dans le plus bel endroit du monde mais à la mauvaise période.||", "**Le viagra c'est comme l'enfer**\n\n||Satan l'habite.||",
            "**Les témoins de jehovah c'est comme les couilles**\n\n||Ils se baladent toujours par paire et n'ont jamais droit de rentrer.||", "**Qu'est-ce qui est rose et qui fond dans la bouche ?**\n\n||La bite d'un lépreux.||",
            "**Que chante un juif devant un feu de camp ?**\n\n||:musical_note: Vous les copains je ne vous oublierai jamais :musical_note:||", "**Comment fait-on pour mettre 60 juifs dans une voiture ?**\n\n||On en met 2 à l'avant, 3 à l'arrière, et le reste dans le cendrier.||",
            "**Quel est le point commun entre une petite fille et une Ferrari ?**\n\n||Une fois que tu es dedans tu déchires tout !||", "**Deux curés sous la douche se disent : Dis donc tu n'as pas grossi de la bite ?**\n\n||Non, je rentre encore dans du 12 ans.||",
            "**Combien faut-il de bébé pour peindre un mur ?**\n\n||Ça dépend de la force du lancé.||", "**Que peut-on lire sur la porte des médecins éthiopiens ?**\n\n||En cas d'urgence glisser le malade sous la porte.||",
            "**Comment s'appelle la plus grande fête juive au monde ?**\n\n||Les soldes.||", "**Quelle est la différence entre un enfant de chœur catholique et un enfant djihadiste ?**\n\n||L'enfant djihadiste se fait sauter qu'une seule fois.||",
            "**Pourquoi les handicapés aiment-t'ils bien le romarin ?**\n\n||Car ça se marie bien avec les légumes.||", "**C'est quoi un grain de riz dans un évier ?**\n\n||Un somalien qui a vomi toute la nuit ||",
            "**Quel est le meilleur moyen de traiter ses problèmes d'érection ?**\n\n||Le suicide.||", "**Où se situe la majeure partie de la population juive ?**\n\n||Ça dépend du vent.||",
            "**Une gamine de 8 ans dit à son père : - Papa, j'ai peur dans cette grande forêt toute sombre !**\n\n||- Ben, qu'est-ce que je devrais dire, moi qui vais rentrer tout seul, ce soir !||", "**Hier j'ai donné un coup de pieds au cul à un Roumain.**\n\n||Le salop il a serré les fesses et m'a piqué une Nike...||",
            "****\n\n||||", "****\n\n||||",
        ]
            //"****\n\n||||", "****\n\n||||",

 
module.exports = {
    run: (message, args) => {
        message.delete()
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#fde100")
            .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 64}))
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    },
    name: 'joke',
    help: {description: "𝐓u veux une blague ? (𝐍\'hésite pas à nous en donner aha."}
}