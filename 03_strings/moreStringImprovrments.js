// string method들

// 1. includes()
// : 내가 찾고 싶은 문자가 있는지 확인해준다.
const isEmail = (email) => email.includes('@');
console.log(isEmail('fdsfda@.dafd.com'));

// 2. repeat()
// : 어떤 원하는 글자든 반복할 수 있다.
const CC_NUM = '1234';
const displayName = `${'*'.repeat(10)}${CC_NUM}`;
console.log(displayName);

// 3. startsWith() , endsWith()
// : string의 시작부분에 해당 문자열이 있는지 확인할 수 있다.
// : 유효성 검사할 때 사용할 수 있다.
const name = 'mr.xz';
console.log(name.startsWith('mr'));
