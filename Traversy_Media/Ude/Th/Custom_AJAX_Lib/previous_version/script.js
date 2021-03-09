const users = new easyHTTP;
// users.get('https://jsonplaceholder.typicode.com/users', function(err, data) {
//     if (err) {
//         console.log(`Error Code : ${err}`)
//     } else {
//         console.log(data);
//     }
// });

// const user = {name: "Jun", email: "junseongpark.dev@gmail.com"};

// users.post('https://jsonplaceholder.typicode.com/users', user, function(err, data) {
//     if (err) {
//         console.log(`Error Code : ${err}`)
//     } else {
//         console.log(data);
//     }
// });

// users.put('https://jsonplaceholder.typicode.com/users/5', user, function(err, data) {
//     if (err) {
//         console.log(`Error Code : ${err}`)
//     } else {
//         console.log(data);
//     }
// });

users.delete('https://jsonplaceholder.typicode.com/users/4', function(err, data) {
    if (err) {
        console.log(`Error Code : ${err}`)
    } else {
        console.log(data);
    }
});

