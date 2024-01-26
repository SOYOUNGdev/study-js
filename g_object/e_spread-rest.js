// const user = {
//     id: "1",
//     name: "isy",
// };

// 비구조화 할당(구조 분해)
// const { id, name } = user;
// console.log(id, name);

// const { number, name } = user;
// console.log(number, name, age);

// 객체 스프레드
// 이미 해당 프로퍼티가 존재하면 수정된다.
// 없다면 추가된다.
// let userUpdated = { ...user, name: "ted", age: "20" };
// console.log(userUpdated);

// rest
const user = {
    id: "1",
    name: "isy",
};

const userUpdated = { ...user, age: 20 };
// 필요한 프로퍼티만 맵핑하여 담아주고, 나머지는 rest객체에 담는다.
const { age, ...rest } = userUpdated;
console.log(age, rest);
