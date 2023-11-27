/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//
// Get the elements
const newTaskInput = document.getElementById('new-task');
const todoListContainer = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskTextElement = document.createElement('span');
    taskTextElement.innerText = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function () {
        taskElement.remove();
    };

    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(deleteButton);

    todoListContainer.appendChild(taskElement);

    // Clear the input field
    newTaskInput.value = '';
}

/*
// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();*/