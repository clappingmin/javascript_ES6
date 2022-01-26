// array.find(찾는 조건)
const friends = [
  'sum@gmail.com',
  'min@naver.com',
  'pa@naver.com',
  'rk@korea.com',
];

const target = friends.find((friend) => friend.includes('korea'));

console.log(target);

// array.findIndex(찾는 조건)
// element가 어디있는지 알아내서 수정하고 싶을 때 유용하다.
const check = () => friends.findIndex((friend) => friend.includes('korea'));

const index = check();

const username = friends[index].split('@')[0];

const email = 'korea.com';

console.log(`${username}@${email}`);

// array.fill(value[, start [, end]])
// fill은 start index부터 end index 전까지 array를 채우는 것

if (index !== -1) {
  friends.fill('*'.repeat(5), index);
}
console.log(friends);

friends.fill('*'.repeat('5'), 1, 2);
console.log(friends);

// array.includes()
// array 안에 있는지 확인하는 것
console.log(friends.includes('*****'));
