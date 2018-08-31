// Define UI Varaibles
// NOte: Use # for Ids and . for class references
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListners();


// Load event Listners
function loadEventListners(){

  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add Task form
  form.addEventListener('submit',addTask);
  // Remove task from form
  taskList.addEventListener('click',removeTask);
  // Clear Tasks
  clearBtn.addEventListener('click',clearTasks);
  // Filter Task
  filter.addEventListener('keyup',filterTasks);
}

// Display tasks from local storage
function getTasks() {

  // Check Local Storage and put it into an array
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  } else {
    // Parse into JSON because local storage only stores in as a string type
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Loop through tasks
  tasks.forEach(function(task){
    // Create Li element
    const li = document.createElement('li');
    // Add class to element
    li.className='collection-item';
    // Create text node to append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class name
    link.className='delete-item secondary-content';
    // Add icon HTML
    link.innerHTML= '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    // console.log(li);
    taskList.appendChild(li);

  });
}

// Add Task
function addTask(e){
  const taskVal = taskInput.value.trim()

  // If nothing is entered then do an alerts
  if(taskVal ==='') {
    alert('Add a Task'); 
  }

  // *** Create Element ***

  // Create Li element
  const li = document.createElement('li');
  // Add class to element
  li.className='collection-item';
  // Create text node to append to li
  li.appendChild(document.createTextNode(taskVal));
  // Create new link element
  const link = document.createElement('a');
  // Add class name
  link.className='delete-item secondary-content';
  // Add icon HTML
  link.innerHTML= '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  // console.log(li);
  taskList.appendChild(li);

  // Store in Local Storage
  storeTaskInLocalStorage(taskVal);

  // Clear Input
  taskInput.value='';

  // Keep the behavior from happening
  e.preventDefault();

}


// FUNCTIONS
function storeTaskInLocalStorage(task){

  // Check Local Storage and put it into an array
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  } else {
    // Parse into JSON because local storage only stores in as a string type
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Add task to the tasks array (which is a JSON object)
  tasks.push(task);

  // Set Item back to local storage 
  // Note: need to change the value from the Array in a JSON format to a string format for localStorage
  localStorage.setItem('tasks',JSON.stringify(tasks));
}


function removeTask(e) {
  if(e.target.parentElement.classList.contains  ('delete-item')){
    // console.log(e.target.parentElement.parentElement);
    
    if(confirm('Are you sure? You want to delete')) {
      e.target.parentElement.parentElement.remove();

      // Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }

}

// Remove task from local storage
function removeTaskFromLocalStorage(taskItem){

   // Check Local Storage and put it into an array
   let tasks;
   if(localStorage.getItem('tasks')===null){
     tasks = [];
   } else {
     // Parse into JSON because local storage only stores in as a string type
     tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   //  Look through the tasks
   tasks.forEach(function(task,index){
     if(taskItem.textContent===task){

      tasks.splice(index,1);
     }

     localStorage.setItem('tasks', JSON.stringify(tasks));

   });
}

// Clear Tasks
function clearTasks(e) {
  // // Use innerHTML to clear tasks
  // taskList.innerHTML='';

  // Faster method per - https://jsperf.com/innerhtml-vs-removechild
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  //  Clear tasks form local storage
  clearTasksFromLocalStorage();
}

// Function Clear Tasks from Local Storage
function clearTasksFromLocalStorage(){
  localStorage.clear();
}

function filterTasks (e){
  // Text that is being typed in the filter box
  const text = e.target.value.toLowerCase(); 
  // console.log('Text '+ text);

  // Query selector all returns all list items
  document.querySelectorAll('.collection-item').forEach
  (
    function(task){
      // Get text content of first child
      const item = task.firstChild.textContent;
      // console.log('Item '+item)

      // No match equal -1. So if not -1 then
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display='block';
      } else {
        task.style.display='none';
      }
    }
  );
}