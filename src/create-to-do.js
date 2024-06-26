import { compareAsc, format, parseISO, startOfToday } from 'date-fns';
import { clearForm } from './dom-manip.js';
import { saveToDoLocal } from './manage-local-storage.js'

let toDoArray = [];

export const createToDo = () => {

    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    if (Title == "" || Description == "" || DueDate == "") {
        alert("Title, Description and Due Date are required fields, please try again!");
        return;
    }

    if (parseISO(DueDate) < startOfToday()) {
        alert("You have entered a date that has already passed! Please enter a date greater that or equal to today.");
        console.log("due date", parseISO(DueDate));
        console.log("due date", startOfToday());
        return;
    }

    const nodeListCheckList = document.querySelectorAll(".form-li");
    let _CheckListArray = [];
    for (let i = 0; i < nodeListCheckList.length; i++) {
        let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
        _CheckListArray.push(strippedCheckList);
    }

    let CheckList = _CheckListArray.join(", ");

    console.log('Called createToDo module...creating todo now');
    console.log({ Title, Description, DueDate, Priority, CheckList });
    console.log('Pushing this object to the toDoArray....');
    
    toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
    console.log(toDoArray);

    saveToDoLocal({ Title, Description, DueDate, Priority }, CheckList);

    clearForm();

    return { Title, Description, DueDate, Priority }, CheckList;
}