const DB = [];
function register(user) {
    const result = saveDB(user).then(sendEmail).then(getResult);
    return result;
}

function saveDB(user) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function getResult(user) {
    return `success register ${user.name}`;
}

// 비동기 결과값인 promise 객체를 가져오기 위해서는 다시 then을 사용하여야 한다.
// 즉, promise객체는 then을 써서 가져와야한다.
register({
    email: "tedhan1204@gmail.com",
    password: "1234",
    name: "hds",
}).then(console.log);

// 비동기인 promise객체가 리턴되면, 동기인 console.log(result)로 출력하려고 한다면
// pending 상태라고 뜬다.
// const result = register({
//     email: "tedhan1204@gmail.com",
//     password: "1234",
//     name: "hds",
// });

// console.log(result);
