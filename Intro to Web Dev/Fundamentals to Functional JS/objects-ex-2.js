//destructuring

//swap variables without temp

var a = 1, b = 2;
[b,a] = [a,b]
console.log(a,b)

//advance deep arrays

var [a, [b, [c,d]]] = [1, [2, [3,4], 5], 6]
console.log(`a: ${a}, b: ${b}, c:${c}, d:${d} `)
//not readable, don't want to be doing something like this, not thoughtful

