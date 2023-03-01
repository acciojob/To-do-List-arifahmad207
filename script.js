//your code here
// Get the input and button elements
const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

// Get the ordered list element
const todoList = document.getElementById("todoList");

// Function to add a new todo item to the list
function addTodoItem() {
  // Get the text from the input element
  const todoText = newTodoInput.value.trim();

  // Check if the input is empty
  if (todoText === "") {
    alert("Please enter a todo item");
    return;
  }

  // Create a new list item element
  const newTodoItem = document.createElement("li");

  // Add the todo item text to the list item element
  newTodoItem.innerText = todoText;

  // Add the new list item element to the ordered list
  todoList.appendChild(newTodoItem);

  // Reset the input value to an empty string
  newTodoInput.value = "";
}

// Add an event listener to the button element to call the addTodoItem function when clicked
addTodoBtn.addEventListener("click", addTodoItem);

