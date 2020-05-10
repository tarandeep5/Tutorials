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

//List transforms, continued
function CreateSuspectObjects (name){
    return {
        name: name,
        color: name.split('')[1],
        speak() { //call a function in the object 
            console.log("my name is ", name)
        }
    };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
var suspectsList = [];


//For just one variable
x = CreateSuspectObjects(suspects[1]);
console.log(x);

//Loop all in one object
for (i in suspects) {
    suspectsList[i] = CreateSuspectObjects(suspects[i]);
}

//looping with_.each
_.each(suspects, function(name){
    suspectsList.push(CreateSuspectObjects(name));
})

//.forEach - requires array at start and is a method on the array - won't be used in this course

