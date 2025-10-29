myTasks = []

function addTask(task) {
    if (shoppingList.includes(task)) {
        return alert(`${task} is already a task!`)
    } else {
        myTasks.push(task)
    }
}

function filterTasks(searchTerm) {
    return myTasks.filter(x=>x.includes(searchTerm))
}


taskInput = document.getElementById("taskInput");
addTaskButton = document.getElementById("addTaskButton");
removeTaskButton = document.getElementById("removeTaskButton");
taskList = document.getElementById("taskList");



