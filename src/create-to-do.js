let toDoArray = [];

export const createToDo = (Title, Description, DueDate, Priority, Checklist) => {
    console.log('Called createToDo module...creating todo now');
    console.log({ Title, Description, DueDate, Priority, Checklist });
    console.log('Pushing this object to the toDoArray....');
    
    toDoArray.push({ Title, Description, DueDate, Priority, Checklist });
    console.log(toDoArray);
    return { Title, Description, DueDate, Priority, Checklist};
}