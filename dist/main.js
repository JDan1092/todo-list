(()=>{"use strict";let o=[];const e=(e,t,l,r,i)=>(console.log("Called createToDo module...creating todo now"),console.log({Title:e,Description:t,DueDate:l,Priority:r,Checklist:i}),console.log("Pushing this object to the toDoArray...."),o.push({Title:e,Description:t,DueDate:l,Priority:r,Checklist:i}),console.log(o),{Title:e,Description:t,DueDate:l,Priority:r,Checklist:i});(()=>{console.log("Called blankProjectLoad module...creating blank project array now");let o=[];console.log("Pushing the title name of project to the projectArray....");o.push({projectTitle:"Default Project"}),console.log(o)})();const t=e("Grocery Run","Go get groceries","6/15/2024","low, meat, eggs, milk"),l=e("Homework","Do Odin Project","6/16/2024","medium","Read modules, do todo project");console.log("Show me properties on myToDo from index.js.....",t),console.log("Show me properties on my ToDo2 from index.js.....",l)})();