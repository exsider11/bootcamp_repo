var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function? renders the previous todos
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code. puts previous todos into the todoList function
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  for (var i = 0; i < todos.length; i++) { // repeats the for how many todos there are
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function? puts the todos in storage to storeTodos variable then if storedTodos is not empty it puts it itno todos 
function init() {
  // TODO: What is the purpose of the following line of code? grabs storedTodos from lcoal memory
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement. if there are things in storedTodos it puts that content into todos variable
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code. - grabs todos from local memory and puts it into render
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code. - stores todos into local memory
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code. - when someone clicks the submit button it stores the entered information into the local storage and renders all todos from local storage
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement. - if nothing has been put into the todo text nothing happens and the fucntion ends
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code. - removes the todos 
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called? - stores todos entered and then calls all todos stored in lcoa lmemory
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code. - checks for click of the submit button
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement. - if button is pressed one of the todos gets removed
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called? - stores todos and calls all todos stored in lcoal meomry
    storeTodos();
    renderTodos();
  }
});

init();
