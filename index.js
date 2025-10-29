myTasks = [] // array containing the task objects

function addTask(task) {
    if (myTasks.includes(task.name)) { // .name added to check only name of task
        return alert(`${task.name} is already a task!`)
    } else {
        myTasks.push(task) //add task object to the myTasks array
    }
}

function filterTasks(searchTerm) {
    return myTasks.filter(x=>x.includes(searchTerm))
}


taskName = document.getElementById("taskName");
taskCategory = document.getElementById("taskCategory");
taskDeadline = document.getElementById("taskDeadline");
taskStatus = document.getElementById("taskStatus");
addTaskButton = document.getElementById("addTaskButton");
taskList = document.getElementById("taskList");

function updateTasks() {
    taskList.innerHTML = ""
    for (i=0;i<myTasks.length;i++) {
        listTask = document.createElement("li")
        listInner = document.createElement("li")
        listTask.innerText = myTasks[i]
        taskList.appendChild(listTask)
    }
}

addTaskButton.addEventListener("click", function () {
  taskObject = {}
  taskObject.name = taskName.value
  taskObject.category = taskCategory.value
  taskObject.deadline = taskDeadline.value
  taskObject.status = taskStatus.value
 alert(taskObject.name) // Dev alert to show taskObject receives data. Helpful to know when to use .value
  if (taskObject.name === "" || taskObject.category === "" || taskObject.deadline === "" || taskObject.status === "") {
    alert("Please enter all fields before adding a task!")
    return 
  }
  addTask(taskObject)
  updateTasks()
  taskName.value = ""
  taskCategory.value = ""
  taskDeadline.value = ""
  taskStatus.value = ""
  alert(taskObject)
})

// alert({a:1,b:2}) // Test to see how objects are shown to the user [object Object]. Keep for reference for when [object Object] shows up again





