// 1. swapping
let mon = 'Sat';
let sat = 'Mon';

[sat, mon] = [mon, sat];
// 이런식임
//[sat, mon] = ['Sat', 'Mon']

// 2. skipping
// array에서 특정 값을 생략하는 방법
const days = ['mon', 'tue', 'wed', 'Thu', 'Fri'];
const [, , , thu, fri] = days;

console.log(thu, fri);
