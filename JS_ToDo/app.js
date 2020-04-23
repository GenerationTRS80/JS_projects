// NOTE: this removes the const error from the linter
/*jshint esversion: 6 */

// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addToDo);

// Functions
function addToDo(event) {
  // Prevent form from submitting
  event.preventDefault();
  console.log("hello");
}
