const marvelHeros=['thor', 'Ironman', 'spiderman'];
const dcHeros = ['superman', 'falsh', 'batman']


// Method-1 // Concatenation Method
const allHeros1 = marvelHeros.concat(dcHeros);
console.log(allHeros1) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'falsh', 'batman' ]

// Method-2 // Spread Method (glass water drop)
const allHeros2 = [...marvelHeros, ...dcHeros]
console.log(allHeros2)  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'falsh', 'batman' ]





