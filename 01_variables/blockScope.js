// block scope
// scope는 기본적으로 버블이다.
// 이 버블이 variable들이 접근가능한지 아닌지를 감지해준다.
// { } : block
// let과 const는 block scope로 되어있다. (장점)

if (true) {
  // block scope로 되어 있음
  // -> block 안에서만 존재한다는 뜻
  // let or const일 경우 이럴 경우 에러가 발생한다.
  // var일 경우 에러가 발생하지 않는다. var는 function scope를 가지기 때문이다.
  // function scope의 뜻은 var가 function 안에서 접근할 수 있다는 뜻이다.
  const hello = 'hi';
}
console.log(hello);

// 이럴 경우는 에러
// 하지만 이것만으로 충분하지 않음
// if, else, try catch 구문, for 같은 것들을 쓰면 에러가 발생하지 않는다.
function a() {
  var hi = 'hi';
}
console.log(hi);

// 가능
if (true) {
  let hello = 'hi';
}
let hello = 'bye';
console.log(hello);

// 가능
let hello;
if (true) {
  hello = 'lalala';
}
console.log(hello);

let hello;
if (true) {
  // 이 버블에서는 아래의 버블로는 접근 불가능
  if (true) {
    // 이 버블에서는 위의 버블에 접근 가능
  }
}
