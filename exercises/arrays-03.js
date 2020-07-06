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
  const followableUsers = twitterUsers.filter(
    (followableUser) => followableUser !== user
  );
  for (let i = 0; i < faker.random.number(5); i++) {
    const randomUser = followableUsers.splice(
      followableUsers.indexOf(faker.random.arrayElement(followableUsers)),
      1
    )[0];
    user.following.push(randomUser);
  }
}

/* EXERCISE 1
1. Give each twitter user a property 'followedBy' with an array 
of all their followers. 

2. Sort the array of users by most followed. 
 */

for (const user of twitterUsers) {
  user.followedBy = [];
  for (const possibleFollower of twitterUsers) {
    for (const followedUser of possibleFollower.following) {
      if (followedUser === user) {
        user.followedBy.push(possibleFollower);
        break;
      }
    }
  }
}
twitterUsers.sort((a, b) => {
  return a.followedBy.length - b.followedBy.length;
});

/* EXERCISE 2
Give each twitter user a property 'bestFriend'.
Choose a random twitter user as the value.
- You must use faker.random.arrayElement(arr) to select the random best friends
- One user can only be best friends with ONE other user
 */

/*
const teamA = twitterUsers.slice(Math.floor(twitterUsers.length / 2));
const teamB = twitterUsers.slice(0, Math.floor(twitterUsers.length / 2));

for (const i of teamA) {
  const newBestFriend = faker.random.arrayElement(teamB);
  i.bestFriend = newBestFriend;
  newBestFriend.bestFriend = i;
  teamB.splice(teamB.indexOf(newBestFriend), 1);
}
*/

let possibleBestFriends = twitterUsers.slice();

for (const user of possibleBestFriends) {
  possibleBestFriends = possibleBestFriends.filter(
    (friend) => friend !== user && !friend.bestFriend
  );
  if (possibleBestFriends.length === 0) {
    break;
  }
  if (user.bestFriend) {
    continue;
  }
  user.bestFriend = faker.random.arrayElement(possibleBestFriends);
  user.bestFriend.bestFriend = user;
}

console.log();
