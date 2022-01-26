const wrapper = document.querySelector('.wrapper');

const addWelcome = () => {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerText = 'hello';
  h1.className = 'sexyTitle';
  div.append(h1);
  wrapper.append(div);
};

// 2초 뒤에 함수가 실행
setTimeout(addWelcome, 2000);

// 위의 코드는 너무 길어서 별루.. template literals가 도와줄거임
// template literal이 너가 만드는 space도 고려해준다.
// enter한 것도 알아서 줄바꿈도 안다.
const addWelcome2 = () => {
  const div = `
  <div class = "hello">
    <h1 class="title">Hello</h1>
  </div>
  `;
  wrapper.append(div);
};

console.log(`



  hello


`);

const friends = ['me', 'su', 'min', 'park'];

const list = `
  <h1>people</h1>
  <ul>
    ${friends.map((friend) => `<li>${friend}</li>`).join('')}
  </ul>
`;

wrapper.innerHTML = list;
