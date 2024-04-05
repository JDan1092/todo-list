import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project-load.js';
import { displayDefaultProject, displayTheForm, addItemToChecklist, clearForm } from './dom-manip.js';
import './style.css';

blankProjectLoad();

// initialdomManip();

let clickEventModule = (function() {

    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    const addToCheckList = document.querySelector(".add-to-checklist");
    addToCheckList.addEventListener("click", addItemToChecklist);

    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);
})

const myToDo = createToDo("Grocery Run", "Go get groceries", "6/15/2024", "low, meat, eggs, milk");
const myToDo2 = createToDo("Homework", "Do Odin Project", "6/16/2024", "medium", "Read modules, do todo project");
console.log("Show me properties on myToDo from index.js.....", myToDo);
console.log("Show me properties on my ToDo2 from index.js.....", myToDo2);