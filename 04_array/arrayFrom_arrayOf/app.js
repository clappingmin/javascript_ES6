// 1. Array.of()
// 기존의 방식과 같음, 아마 element가 많을 때 사용하면 좋음
const friends = Array.of('sumin', 'park', 'clapping', 'min');

console.log(friends);

// 2.Array.from()
// : array-like object로 부터 array를 만드는 메소드
// html을 다룰 때 우리는 array를 얻지 못하고 array-like object를 얻어서 매우 매우 유용함
const buttons1 = document.querySelectorAll('button');
console.log(buttons1); // NodeList 형식으로 나온다.
// array 같지만 array가 아님 array-like object라는 거임
// buttons는 array가 아니라서 forEach문을 사용할 수 없다.

const buttons2 = document.querySelectorAll('button');
console.log(buttons2);

Array.from(buttons2).forEach((button) => {
  button.addEventListener('click', () => console.log('눌렀당'));
});

// 이런식으로도 사용 가능
const ar = Array.from(buttons2);
ar.forEach((button) => {
  button.addEventListener('click', () => console.log('눌렀당'));
});
