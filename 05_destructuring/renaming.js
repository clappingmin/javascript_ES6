// 원하는 이름으로 가져오고 싶을 때 사용
// : 원하는 이름

const settings = {
  color: {
    chosen_color: 'dark',
  },
};

const {
  color: { chosen_color: chosenColor = 'light' },
} = settings;

console.log(chosenColor);
console.log(settings); // settings 안의 이름은 그대로임
// 원하는 변수이름으로 값을 담아온 것뿐..

// let 변수를 이용해서 업데이트 할 수도 있다.
let chosenColor2 = 'blue';
({
  color: { chosen_color: chosenColor2 = 'light' },
} = settings);

console.log(chosenColor2);
