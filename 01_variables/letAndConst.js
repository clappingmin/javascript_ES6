//  let, const
// let 전에 사용했던 것 var

// 1. const
const name = 'Sumin';
// name = "clappingmin";

// 그렇다고 const가 잠겨있거나 우리가 원하는 것처럼 read-only는 아니다.
const person = {
  name: 'sumin',
};
person.name = 'clappingmin'; // 가능하다.
// person 다시 할당할 수는 없지만 안의 어떤걸 바꿀순 있다.

// 2. let
// 값을 바꿀 수 있다.
let sumin = 'Park';
sumin = 'lalalala';

// 기본적으로 사용하는 것은 const, 값을 변경해야 하면 let을 사용 -> 그것이 더 안전하니까!
