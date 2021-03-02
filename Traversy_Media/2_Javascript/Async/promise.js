const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error : Something went wrong.');
            }
        }, 2000);
    })
}

// async function init() {
//     await createPost({title: 'Post Three', body: 'This is post three'})
//     getPosts();
// }

// init();

// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err))

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Goodbye');
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
}

fetchUsers();