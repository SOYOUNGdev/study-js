// 10~1까지 Array 객체에 담은 후 짝수만 출력
// const array = new Array(10).fill(0).map((_, i) => 10 - i);
// const evens = array.filter((data) => data % 2 == 0);
// console.log(evens);

// 한글을 숫자로
// 삼사칠구 -> 3479
// const hangul = "공일이삼사오육칠팔구";
// const input = "삼사칠구";
// const arr = [];
// input.split("").forEach((data) => {
//     arr.push(hangul.indexOf(data));
// });
// console.log(arr.join(""));

// 숫자를 한글로
// 3479 -> 삼사칠구
// const hangul = "공일이삼사오육칠팔구";
// const input = "3479";
// const arr = [];

// input.split("").forEach((data) => {
//     // console.log(Number(data));
//     arr.push(hangul[data]);
// });
// console.log(arr.join(""));

// 1~100까지 합 출력
const arr = new Array(100).fill(0);

const result = arr.reduce((variable, _, i) => {
    return variable + i + 1;
}, 0);

console.log(result);

console.log(typeof Number("12"));
console.log(typeof parseInt("12"));
