//  JS에서는 객체 내부의 필드를 프로퍼티 라고 부른다.
let user = {
    name: "isy",
    age: 20,
    address: "경기도",
    introuduce: () => {
        console.log("Hi😊");
    },
};
console.log(typeof user); // user : object 타입의 객체
user.introuduce();
// 일반적으로 .를 사용해서 프로퍼티에 접근한다.
console.log(user.name);
// 만약 프로퍼티 이름에 "-"와 같은 특수문자가 들어가 있거나
// 프로퍼티 이름에 규칙성이 있어서 한 번에 가져와야 할 때에는
// []를 사용해서 프로퍼티에 접근한다.
console.log(user["name"]);
