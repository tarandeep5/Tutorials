const game = {
    'suspects' : [
        {
            name: "Rusty",
            colour: "Orange"
        }, {
            name: "Miss Scarlet",
            colour: "Red"
        }
    ]
}

function loopSuspects () {
    for (let i =0; i<game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
}

 var gameLoop = function () {
     for (var i = 0; i.game.suspects.length; i++) {
         for (var j in game.suspects[i]) {
             if (game.suspects[i][j] === "Rusty"){
                 console.log("Found em!");
             }
             else {
                 console.log("Next time!");
             }
         }
     }
 }


 function destructure () {
     colourArray = []
     for (var i in game.suspects){
        colourArray.push = game.suspects[i].colour
        console.log(game.suspects[i].colour)
     }
     return colourArray;
 }
 
loopSuspects();
colourArr = destructure();
let [firstColour, secondColour] = [colourArr [0], colourArr[1]];
console.log(firstColour);

