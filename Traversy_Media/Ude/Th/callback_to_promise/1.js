let posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
]

function getPost() {
    let output = '';
    posts.forEach(post => {
        output += `
        <ul>
            <li>title : ${post.title}</li>
            <li>body : ${post.body}</li>
        </ul>
        `
    })
    setTimeout(() => {
        document.body.innerHTML = output;
    }, 1000);
}

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// let newPost = {title: "Post Three", body: "This is post three"};

// createPost(newPost, getPost);

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            posts.push(post);
            let err = false;
            if (!err) {
                resolve();
            } else {
                reject('Error : Something went wrong.');
            }
        }, 2000);
    })
}

let newPost = {title: "Post Three", body: "This is post three"};

createPost(newPost)
.then(getPost)
.catch((err) => console.log(err));

