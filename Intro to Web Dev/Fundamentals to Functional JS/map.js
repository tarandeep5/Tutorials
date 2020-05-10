//use underscore.js
//also a list transform
//key difference between each & map - each doesn't return anything, map returns an array every time

//_.map(list, function) - function is the callback function

const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function(item){
    return `broken ${item}`
};

let arrayFeed = {};
arrayFeed = _.map(weapons, makeBroken);



