// array destructuring 보다 object destructuring을 많이 사용한다.
// 가져온 데이터를 조작할 필요가 없다면 array destructuring
// 가져온 데이터를 조작하고 싶으면 object destructuring
// 함수일 경우에도 동작
const days = () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// array destructuring을 사용하지 않을 경우
// 엄청 별루..
// const mon = days[0];
// const tue = days[1];
// const wed = days[2];

// console.log(mon, tue, wed);

// 이 방식을 쓰자
// 기본값도 사용할 수 있다.
const [mon, tue, wed, thu = 'THU'] = days();
console.log(mon, tue, wed, thu);
