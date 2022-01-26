// 1. Array.prototype.find
// : 제공되는 테스트 조건을 만족하는 첫번째 엘리먼트 값을 리턴하는 함수
const emails = [
  'sumin@naver.com',
  'clapping@naver.com',
  'park@gmail.com',
  'test@gmail.com',
  'test2@gmail.com',
];

const foundMail = emails.find((item) => item.includes('@gmail.com'));
console.log(foundMail);

// 2.Array.prototype.filter
// : filter 메소드는 제공된 함수의 조건을 만족한 모든 엘리먼트로 새로운 array를 만든다.
const noGmail = emails.filter((potato) => !potato.includes('@gmail.com'));
console.log(noGmail);

// 3. Array.prototype.forEach()
// : 각 array의 엘리먼트마다 제공된 함수를 실행
const cleaned = [];
emails.forEach((email) => {
  cleaned.push(email.split('@')[0]);
});

console.log(cleaned);

// 위 같이 새로운 array를 만들 때는 map을 사용하자
// map은 forEach지만 반환된 element들로 새로운 array를 만들어준다.
const cleaned2 = emails.map((email) => email.split('@')[0]);
console.log(cleaned2);

// map에서 오브젝트로 반환하는 방법
// object를 리턴하기 위해 ()로 감싸준다.
const cleaned3 = emails.map((email, index) => ({
  username: email.split('@')[0],
  point: index,
}));
console.table(cleaned3);
