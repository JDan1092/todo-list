import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project-load.js';
import { displayDefaultProject, displayTheForm, addItemToChecklist, clearForm, displayToDo } from './dom-manip.js';
import './style.css';

blankProjectLoad();

displayToDo();

let clickEventsModule = (function() {

    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    const addToCheckList = document.querySelector(".add-to-checklist");
    addToCheckList.addEventListener("click", addItemToChecklist);

    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);
})();