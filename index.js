myTasks = [] // array containing the task objects
taskName = document.getElementById("taskName");
taskCategory = document.getElementById("taskCategory");
taskDeadline = document.getElementById("taskDeadline");
taskStatus = document.getElementById("taskStatus");
addTaskButton = document.getElementById("addTaskButton");
taskList = document.getElementById("taskList");

function addTask(task) {
        myTasks.push(task) //add task object to the myTasks array
}

function updateStatus(update) {

}

function filterTasks(searchTerm) {
    return myTasks.filter(x=>x.includes(searchTerm)) // UPDATE TO HANDLE OBJECTS
}

function updateTasks() {
    taskList.innerHTML = ""
    for (i=0;i<myTasks.length;i++) {
        listTask = document.createElement("ul") // changed from li to ul to contain sublist
        listName = document.createElement("li") // the sublist
        listCategory = document.createElement("li")
        listDeadline = document.createElement("li")
        listStatus = document.createElement("li")


        updateStatusDropdown = document.createElement("select") //creates the dropdown menu
        optionInProgress = document.createElement("option") //creates dropdown options
        optionCompleted = document.createElement("option")
        optionOverdue = document.createElement("option")
        optionInProgress.innerHTML = "In Progress"
        optionCompleted.innerHTML = "Completed"
        optionOverdue.innerHTML = "Overdue"

        

        listName.innerText = "Task: " + myTasks[i].name
        listCategory.innerText = "Category: " + myTasks[i].category
        listDeadline.innerText = "Deadline: " + myTasks[i].deadline
        listStatus.innerText = "Status: " + myTasks[i].status
        updateStatusDropdown.append(optionInProgress, optionCompleted, optionOverdue)
        listStatus.append(updateStatusDropdown)
        listTask.append(listName, listCategory, listDeadline, listStatus, updateStatusDropdown) // append sublist to list (task)
        taskList.append(listTask, document.createElement("p")) // append list (task) to list (list of tasks)
    }
}

addTaskButton.addEventListener("click", function () {
  taskObject = {
    name:taskName.value,
    category:taskCategory.value,
    deadline:taskDeadline.value,
    status:taskStatus.value
  }
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
})





