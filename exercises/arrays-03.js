/* Scroll down until you see 'EXERCISE 1' */

const faker = require("faker");
faker.seed(1);

const twitterUsers = [];
for (let i = 0; i < 10; i++) {
  twitterUsers.push({
    name: `${faker.name.prefix()} ${faker.name.lastName()}`,
    following: [],
  });
}

for (const user of twitterUsers) {
  const followable = twitterUsers.filter((p) => p.name !== user.name);
  for (let i = 0; i < faker.random.number(5); i++) {
    const randomUser = followable.splice(
      followable.indexOf(faker.random.arrayElement(followable)),
      1
    )[0];

    user.following.push(randomUser);
  }
}

console.log(twitterUsers);

/* EXERCISE 1
Give each twitter user a property 'followers' with an array 
of all their followers. 

Sort the array of users by most followed. 
 */
