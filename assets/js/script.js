var buttonE1 = document.querySelector("#save-task");
var tasksToDoE1=document.querySelector("#tasks-to-do");





var createTaskHandler = function() {
    var ListItemE1=document.createElement("li");
    ListItemE1.className="task-item";
    ListItemE1.textContent="This is a new task.";
    tasksToDoE1.appendChild(ListItemE1);
    
    }
buttonE1.addEventListener("click",createTaskHandler);

