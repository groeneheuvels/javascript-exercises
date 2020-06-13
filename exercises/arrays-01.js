/* Scroll down until you see 'EXERCISE 1' */

const faker = require("faker");
faker.seed(1);

const numberOfCols = 4;
const numberOfRows = 10;
const headerRow = Array.from(new Array(numberOfCols)).map((_) =>
  `${faker.random.word()} department`.toUpperCase()
);
const rows = Array.from(new Array(numberOfRows)).map((_) =>
  Array.from(new Array(numberOfCols)).map(
    (_) => `${faker.name.prefix()} ${faker.name.lastName()}`
  )
);
const table = [headerRow, ...rows];
console.table(table);

/* EXERCISE 1 
Use console.log(table) and console.table(table) to examine `table`.
Convert `table` to an array of objects where each element represents 
a row in the original table. Each row object should 
contain a key for each department and the name of the person that 
belongs to that department. E.g. 
[
  {
    'METHODOLOGIES DEPARTMENT': 'Mr. Feest',
    'CAPACITOR DEPARTMENT': 'Mr. Huels',
    ... etc.
  }, ... etc.
]

Use console.log to show the result.

You may only use for loops, and no array methods.
*/
console.log();

/* EXERCISE 2
Get the same result as EXERCISE 1, but now with only chained array 
methods and no for loops.
*/

console.log();

/* EXERCISE 3 
Convert `table` to a single object that has a key for each department 
and arrays of people in those departments as values.

You can use for loops or array methods.
*/
console.log();
