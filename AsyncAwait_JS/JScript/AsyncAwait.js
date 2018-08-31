/*jshint esversion: 6 */

/* Note: A fake User list in JSON format is used from the site JSON Placeholder
https://jsonplaceholder.typicode.com/users

fetch is used to pull the JSON data
*/
const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post two'}  
];

function getPosts() {
 
  setTimeout(function(){

    // Set string array to hold li with index values
    let output='';

    // For each loop Note: += is shorthand for append
    posts.forEach((post, index)=>{
      // Use back ticks with template literal
      output += `<li> ${post.title} </li>`; 
    });

    document.body.innerHTML=output;

    // Delay action by a certain amount of time
  },1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Push on to the posts array the new posts
      posts.push(post);
      // Use callback function 

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}


// createPost({ title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

/*
// Async / Await
async function init() {
  await createPost({ title: 'Post Three', body: 'This is post three'});

  getPosts();
}

init();
*/


// Async / Await / Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}

// Call the function fetchUsers
fetchUsers();

/*
// Promise All
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve,2000,'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));
*/

