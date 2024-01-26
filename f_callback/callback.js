// 콜백 함수는 "분리" 목적이다.

// arrow expression(function)
// function printName(name) {
//     console.log(name);
// }

// const printName = (name) => {
//     console.log("name");
// };

// printName();

// 두 정수의 덧셈 결과 출력
// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//     }
//     return number1 + number2;
// };

// add(1, 4, (result) => {
//     console.log(result);
// });

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// const multply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//     }

//     return number1 * number2;
// };

// const result = multply(3, 5, (result) => {
//     console.log(result * 2);
// });

// 성과 이름을 전달 받아서 풀네임을 만든 뒤 "000님" 출력
const getName = (lastName, firstName, callback) => {
    if (callback) {
        callback(lastName + firstName);
    }
    return lastName + firstName;
};

const getFullName = getName("임", "소영", (fullName) => {
    console.log(fullName);
});

// 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤,
// 개수가 5개 이하라면 true 아니면 false
const getCount = (price, totalPrice, callback) => {
    if (callback) {
        let count = totalPrice / price;
        callback(count);
    }
    return count;
};

result = getCount(2000, 20000, (count) => count <= 5);
console.log(result);

// 결제 상품 가격과 결제 상태를 전달 받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
const getPayStauts = (price, payStatus, callback) => {
    if (callback) {
        callback(payStatus ? `${price}원 결제 완료` : `${price}원 결제 취소`);
    }
    return payStatus ? `${price}원 결제 완료` : `${price}원 결제 취소`;
};

getPayStauts(1000, false, (result) => {
    console.log(result);
});
