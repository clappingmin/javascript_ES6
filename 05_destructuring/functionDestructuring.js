// 우리가 원하는 것
// 하나, 변수들의 가독성 확보
// 둘, 각 변수의 기본값을 설정

function saveSettings({ follow, alert, mkt, color = 'blue' }) {
  console.log(follow, color);
}

saveSettings({
  follow: true,
  alert: true,
  mkt: false,
  color: 'green',
});

// 이런식으로 해도 된다
function saveSettings2({ notifications, color: { theme = 'blue' } }) {
  console.log(theme);
}

saveSettings2({
  notifications: {
    follow: true,
    alert: true,
    mkt: false,
  },
  color: {
    theme: 'green',
  },
});
