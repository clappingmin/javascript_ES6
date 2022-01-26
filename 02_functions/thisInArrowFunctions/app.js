// arrow function을 사용하지 않아야할 때가 있다.
// 대부분의 경우 arrow function을 사용할 수 있다.
// this 키워드를 사용해야 하믄 경우를 제외하고

// arrow를 쓰지 말아야 할 경우
// 1. this 관련
// 2. scope 관련

const button = document.querySelector('button');

button.addEventListener('click', function () {
  // this : <button>Click me!</button>
  this.style.backgroundColor = 'red';
  console.log(this);
  console.log('i have been clicked');
});

// 화살표 함수
// 화살표 함수에서는 더는 this가 button을 가리키지 않는다. window를 가리킴
// 화살표 함수 안에 있는 this는 window를 참조한다. 바깥의 bubble을 참조한다.
// this를 사용하고 싶으면 화살표 함수 안에서 사용하면 안된다.
button.addEventListener('click', () => {
  console.log(this);
  this.style.backgroundColor = 'red';
  console.log('i have been clicked');
});

// 화살표 함수는 this를 이벤트에서 들고 오지 않고, this를 window object로 가지고 있다.
// this를 사용하고 싶으면 function을 사용해야 한다.

const clapping = {
  name: 'sumin',
  age: 26,
  addYear: () => {
    // this가 clapping object를 가리키는게 아닌 window object를 가리킨다.
    this.age++;
  },
};
console.log(clapping); // 26살
console.log(clapping.addYear());
console.log(clapping.addYear());
console.log(clapping); // 26살

const clapping2 = {
  name: 'sumin',
  age: 26,
  addYear() {
    this.age++;
  },
};

console.log(clapping2); // 26살
console.log(clapping2.addYear());
console.log(clapping2.addYear());
console.log(clapping2); // 28살
