// import { add } from "date-fns";
import { blankProjectLoad } from "./blank-project-load.js";

export function displayDefaultProject() {

    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}

export function displayTheForm() {
    document.getElementById("add-todo-form").style.display = "";
}

export function addItemToCheckList() {
    const addItem = document.getElementById("add-to-checklist").value;

    if (addItem !== "") {
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.className = "form-li";
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = "";

        if (document.querySelectorAll(".form-li ").length > 0) {
            console.log("INSIDE MODULE IF....,", document.querySelectorAll(".form-li").length);
            const nodeListCheckList = document.querySelectorAll(".form-li");
            console.log(nodeListCheckList);

            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromChecklist() {
                    checkListItem.remove();
                });
            })
        }
    } else return;
}

export function clearForm() {
    const nodeListCheckList = document.querySelectorAll(".form-li");
    for (let i = 0; i < nodeListCheckList.length; i++) {
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}

export function displayToDo() {

    let Title = localStorage.getItem("Title");
    let Description = localStorage.getItem("Description");
    let DueDate = localStorage.getItem("DueDate");
    let Priority = localStorage.getItem("Priority");
    let CheckList = localStorage.getItem("CheckList");

    if (Title == null || Description == null || DueDate == null || Priority == null) {
        return;
    }

    const removeDivs = document.querySelectorAll(".card");
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    console.log("display to screen");
    const projects = document.querySelector(".projects");
    const card = document.createElement("div");
    card.classList.add("card");
    projects.appendChild(card);

    const deleteToDoButton = document.createElement("button");
    deleteToDoButton.classList.add("remove-todo-button");
    deleteToDoButton.textContent = "Delete/Complete ToDo";
    card.appendChild(deleteToDoButton);
    deleteToDoButton.addEventListener("click", function deleteToDo() {
        card.remove();
        localStorage.clear();
    })

    let _displayArray = { Title, Description, DueDate, Priority };
    console.log(_displayArray);

    for (let key in _displayArray) {
        console.log(`${key}: ${_displayArray[key]}`);
        const para = document.createElement("p");
        para.textContent = (`${key}: ${_displayArray[key]}`);
        card.appendChild(para);
    }

    const para = document.querySelectorAll("p");
    const CheckListLabel = document.createElement("p");
    CheckListLabel.textContent = "CheckList Items(Click item when completed):";
    const ul = document.createElement("ul");
    CheckListLabel.classList.add("check-list-label");
    para[para.length - 1].appendChild(ul);
    ul.appendChild(CheckListLabel);

    console.log("show me the contents of checklist from local storage....", CheckList);
    let _checkListArray = CheckList.split(",");
    console.log("contents of temp checklistarray....", _checkListArray);

    if(CheckList !== "") {
        for (let i = 0; i < _checkListArray.length; i++) {
            console.log(_checkListArray[i]);
            const li = document.createElement("li");
            li.className = "display-li";
            li.textContent = _checkListArray[i];

            li.addEventListener("click", function strikeOutChekListItem() {
                if (li.classList.toggle("done")) {
                    localStorage.setItem(li.textContent, "true");
                } else if (li.classList.toggle("display-li")) {
                    localStorage.setItem(li.textContent, "false");
                }
            });

            ul.appendChild(li);
        }
    } else return;

    window.onload = function() {
        const liNodes = document.querySelectorAll(".display-li");
        liNodes.forEach(liNode => {
            if (localStorage.getItem(liNode.textContent) == "true") {
                console.log("inside the onload if....");
                liNode,className = "done";
            }
        })
    }
}
