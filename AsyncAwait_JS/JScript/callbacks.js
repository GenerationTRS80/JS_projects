/*jshint esversion: 6 */

const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post two'}  
];

// Put Posts on page
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

function createPost(post,callback) {
  setTimeout(() => {

    // Push on to the posts array the new posts
    posts.push(post);
    // Use callback function 
    callback();
  }, 2000);

}

createPost({ title: 'Post Three', body: 'This is post three'},getPosts);