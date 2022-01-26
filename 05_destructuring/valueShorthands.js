// 변수명 단축
const follow = checkFollow();
const alert = checkAlert();

const settings = {
  notifications: {
    // 위의 함수 변수를 넣어주는데 변수명이 같음
    // 그러면 생략 가능하다.
    follow: follow, // 생략 안하는 경우
    alert, // 생략한 경우
  },
};
