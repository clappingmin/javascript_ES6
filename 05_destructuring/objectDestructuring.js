// destructuring(비구조화)
// destructuring은 object나 array, 그 외 요소들 안의 변수를 바깥으로 끄집어 내서 사용할 수 있도록 하는 것
// object를 다룰 때 매우 매우 매우 유용하다.
// 가져올 경로 = 타겟 오브젝트
// 최종적으로 접근하는 값만이 js에서 object 바깥으로 꺼내는 거고 console.log로 띄울 수 있다.

const settings = {
  notification: {
    follow: true,
    alerts: true,
    unfollow: false,
  },
  color: {
    theme: 'dark',
  },
};

// 비구조화 방식 이전에 했는 방법
if (settings.notification.follow) {
  // send email
}

// 비구조화 방식
// settings 안에 있는 notification 안으로 접근해서 follow를 가져온다는 의미
// color도 같이 가져오고 싶으면 밑에 color 작성
// 여기서 notification은 밖으로 나온게 아님, follow랑 color가 나온거임
const {
  notification: { follow = false }, // default value도 줄 수 있음, follow가 없으면 false;
  color,
} = settings;

console.log(color);
console.log(follow);

// 만약 notifications만 가져오고 싶으면?
const { notification } = settings;
// 아래랑 같은 의미
// const notification = settings.notification;

// 만약 notification이 없을 경우 이런식으로 처리
// notification은 빈 object로 만들어준다.
const { notification: { follow = false } = {} } = settings;
