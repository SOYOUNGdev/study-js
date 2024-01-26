// 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤,
// 개수가 5개 이하라면 true 아니면 false

globalThis.price = 2000;

const getCount = (totalPrice, callback) => {
    if (callback) {
        var count = totalPrice / globalThis.price;
        callback(count);
    }
    return count;
};

const getPayStauts = (payStatus, callback) => {
    if (callback) {
        callback(
            payStatus
                ? `${globalThis.price}원 결제 완료`
                : `${globalThis.price}원 결제 취소`
        );
    }
    return payStatus
        ? `${globalThis.price}원 결제 완료`
        : `${globalThis.price}원 결제 취소`;
};

const getPriceAndStatus = getCount(10000, (count) => {
    let payStatus = false;
    if (count <= 5) {
        payStatus = true;
    }
    getPayStauts(payStatus, (result) => {
        console.log(result);
    });
});

// const getCount = (price, totalPrice, callback) => {
//     if (callback) {
//         var count = totalPrice / price;
//         callback(price, count);
//     }
//     return count;
// };

// const getPayStauts = (price, payStatus, callback) => {
//     if (callback) {
//         callback(payStatus ? `${price}원 결제 완료` : `${price}원 결제 취소`);
//     }
//     return payStatus ? `${price}원 결제 완료` : `${price}원 결제 취소`;
// };

// globalThis.price = 2000;

// const getPriceAndStatus = getCount(price, 10000, (price, count) => {
//     let payStatus = false;
//     if (count <= 5) {
//         payStatus = true;
//         getPayStauts(price, payStatus, (result) => {
//             console.log(result);
//         });
//     }
// });
