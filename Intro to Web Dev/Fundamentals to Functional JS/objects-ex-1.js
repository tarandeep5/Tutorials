//Build a clue type game in an object using bracket/dot notation

let game = {};

game.confidentialCard = {
    murderer: null,
    room: null,
    weapon: null,
};

game['weapons'] = [
    'sword',
    'knife',
    'gun'
];

game.name = [];
game.name[0] = "Buddy #1";
game.name.push("Buddy #2")


console.log(game);