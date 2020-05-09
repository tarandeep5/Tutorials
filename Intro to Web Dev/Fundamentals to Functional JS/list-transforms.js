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

loopSuspects();