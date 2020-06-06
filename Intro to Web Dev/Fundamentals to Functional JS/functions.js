//arguments - in the invocation
//parameters - in the function definition

//side effect - anything that reaches beyond the function body

//projecting - take value out of data structure and turn into another data structure

//projecting exercise

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const suspects = videoData.filter(function (suspectObject){
    return suspectObject.present;
});

const suspectsName = suspects.map(suspect => {
    return suspect.name;
});

//spread operator - gather extra elements and puts it in an array (...)
//default parameters - if parameter isn't passed, use a default 

const add = function (a, b = 2) {
    console.log(arguments);
    return a+b
};

//join - joins all arrays, argument is what is in between the strings
const constructArr = function() {
     const arr = Array.from(arguments)
     arr.push('the billards room?');
     return arr.join(' ');
 };
constructArr ('was', 'it', 'in');

//let creates block scope



