/* Scroll down until you see 'EXERCISE 1' */

const faker = require("faker");
faker.seed(1);

const persons = Array.from(new Array(10)).map((_) => ({
  name: `${faker.name.prefix} ${faker.name.lastName()}`,
  pets: Array.from(new Array(1 + faker.random.number(5))).map((_) => ({
    name: `Little ${faker.name.lastName()}`,
    age: faker.random.number(20),
    vets: Array.from(new Array(1 + faker.random.number(3))).map((_) => ({
      name: `Dr. ${faker.name.lastName()}`,
    })),
  })),
}));
console.log(JSON.stringify(persons, null, 2));

/* EXERCISE 1
Get an array of the names of vets that take care of 
pets that are older than 10. 
 */

/* EXERCISE 2
Get an array of the names of persons that have pets with only
one vet.
 */

/* EXERCISE 3
 Get the mean age of all the pets combined
 */

/* EXERCISE 4
 Create an array of objects for all the pets, sorted by pet age.
 Each pet object should include the following keys (with their 
  correct values): petName, ownerName, vetName, age.
  */
