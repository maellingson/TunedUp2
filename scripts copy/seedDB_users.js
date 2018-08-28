const mongoose = require("mongoose");
const db = require ("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongod://localhost/users"
);

const userSeed = [
    {
        username: "GuitarGuy",
        email: "iloveguitars@yahoo.com",
        genres: ["Classic Rock", "Alternative"],
        instruments: ["guitar"],
        zip: "55114",
        bio: "Ridin' in a Stutz Bearcat, Jim,. End of passion play, crumbling away. And I know y'all are sayin man. Anything the rule touch give it up. Uh-huh it's on fire tonight.",
        links: ["https://www.guitarcenter.com/"]
    },
    {
        username: "Piano1234",
        email: "music1234@gmail.com",
        genres: ["Classical"], 
        instruments: ["Piano", "Accordian"],
        zip: "55114",
        bio: "All right now now now, hey hey, hey hey. That all of us feel. The fire that burns deep down in me. Summertime.. So why don't you just hush lil baby.... If I could find a real good book, you know I,. See the girl with the red dress on. You have to be in love. Come on baby, see about me. Fall from my eyes. It's a real true thing. Tell me what'd I say right now.",
        links: ["http://www.raycharles.com/", "https://soundcloud.com/raycharles"]
    },
    {
        username:"LoveMusic_0192",
        email: "example@example.com",
        genres: ["jazz"],
        instruments: ["cello"],
        zip: "55105",
        bio: "Well, babe, babe, babe, babe, baby. I love, love, love, love, love. He blew his mind out in a car. Honey, honey, honey, honey, honey. Nobody was really sure if he was from the House of Lords. A crowd of people stood and stared. What it don't get I can't use.. That's what I want that's what I want. So gimme money that's what I want. That's what I want, ye-ye-yeh, That's what I want..",
        links: ["www.dakotacooks.com/"]
    },
    {
        username: "DukeSilver",
        email: "test@test.com",
        genres: ["jazz"],
        instruments: ["saxophone"],
        zip: "55014",
        bio: "Here is the gist, a practical list. is quite untrue. I have a way to prove what they say. of DON'TS for you.. behind their doors?. Don't throw bouquets at me. Jesús mostré le mi dolor. Herido triste a. Why do they think up stories that link.",
        links: ["parksandrecreation.wikia.com/wiki/Duke_Silver"]
    },
    {
        username: "TheRealAliciaKeys",
        email: "girlonfire@gmail.com",
        genres: ["pop"],
        instruments: ["piano"],
        zip: "55105",
        bio: "Don't want what we had to change. Love, it will forsake you. I wanna rock wit you. I'm goin' stay right by your side . I'll stay and walk this life wit you. But I can't shake the feeling. Hoping. Talkin late on the phone. Uh Yeah. Leaving my heart and my mind. Baby, silly for me to feel this way about you and her. Sneak up behind you, you can't give enough. Wit you wit only you, wit you wit only you . Uh Oh Uh Oh. There's no escape on the spell you have placed",
        links: ["aliciakeys.com"]
    },
    {
        username: "ClassyClassical",
        email: "example@umn.edu",
        genres: ["classical"],
        instruments: ["violin", "cello"],
        zip: "55105",
        bio: "The most amazing thing is the power of our dreams. To have somebody to hold you tight. As I look around the little house we were so happy in. And for love to work we gotta hold on. Let's start to take the chance to make love work. To spend it feeling hurt. I think of all the happy times we'll never see again. We've got to try a little harder. It takes faith in one another to see things eye to eye.",
        links: ["https://bootcamp.umn.edu/"]
    }
];

db.tunedUp
  .remove({})
  .then(() => db.users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
