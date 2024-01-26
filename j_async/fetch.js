fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        console.log(users);
    });

// fetch는 promise객체가 리턴된다. 따라서, then을 사용하여 resolve값을 가져온다.
