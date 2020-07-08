/* Scroll down until you see 'EXERCISE 1' */

const faker = require("faker");
faker.seed(1);

const persons = Array.from(new Array(10)).map((_) => ({
  name: `${faker.name.prefix()} ${faker.name.lastName()}`,
  pets: Array.from(new Array(1 + faker.random.number(5))).map((_) => ({
    name: `Little ${faker.name.lastName()}`,
    age: faker.random.number(20),
    vets: Array.from(new Array(1 + faker.random.number(3))).map((_) => ({
      name: `Dr. ${faker.name.lastName()}`,
    })),
  })),
}));
//console.log(JSON.stringify(persons, null, 2));

/* EXERCISE 1
Get an array of the names of vets that take care of 
pets that are older than 10. 
 */

/* function findGeriatricVets(persons) {
  const oldPetsVets = [];
  for (const person of persons) {
    for (const currentPet of person.pets) {
      if (currentPet.age > 10) {
        oldPetsVets.push(currentPet.vets);
      }
    }
  }
  return oldPetsVets
    .flat()
    .sort((a, b) => a.name.localeCompare(b.name))
    .reverse();
}

console.log(findGeriatricVets(persons)); */

/* EXERCISE 2
Get an array of the names of persons that have pets with only
one vet.
 */

/* function oneVetPets(persons) {
  const oneVetPetOwners = [];
  for (currentPerson of persons) {
    for (currentPet of currentPerson.pets) {
      const listedOwner = oneVetPetOwners.find(
        (el) => el.name === currentPerson.name
      );
      if (currentPet.vets.length === 1 && !listedOwner) {
        oneVetPetOwners.push(currentPerson);
      }
    }
  }
  return oneVetPetOwners;
}

console.log(oneVetPets(persons)); */

/* EXERCISE 3
 Get the mean age of all the pets combined
 */

/* function averagePetAge(persons) {
  const petAges = [];
  for (const currentPerson of persons) {
    for (const currentPet of currentPerson.pets) {
      petAges.push(currentPet.age);
    }
  }
  const totalAge = petAges.reduce((total, age) => {
    return (total = total + age);
  });
  return totalAge / petAges.length;
}

console.log(averagePetAge(persons)); */

/* EXERCISE 4
 Create an array of objects for all the pets, sorted by pet age.
 Each pet object should include the following keys (with their 
  correct values): petName, ownerName, vetName, age.
  */

/* function petList(persons) {
  const pets = [];
  for (const currentPerson of persons) {
    for (const currentPet of currentPerson.pets) {
      const petObject = {
        petName: currentPet.name,
        ownerName: currentPerson.name,
        vetName: currentPet.vets,
        age: currentPet.age,
      };
      pets.push(petObject);
    }
  }
  return pets.sort((a, b) => a.age - b.age);
}

console.log(petList(persons)); */
