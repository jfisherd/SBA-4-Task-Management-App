myTasks = [] // array containing the task objects
myTasksFiltered = [] // array for filtered tasks
taskName = document.getElementById("taskName"); //task info
taskCategory = document.getElementById("taskCategory"); //task info
taskDeadline = document.getElementById("taskDeadline"); //task info
taskStatus = document.getElementById("taskStatus"); //task info
addTaskButton = document.getElementById("addTaskButton"); // add button
taskList = document.getElementById("taskList"); // the unordered list

function addTask(task) {
    myTasks.push(task) //add task object to the myTasks array
}

function updateStatus(){ // function updateStatus(update) {
    let idStatus = document.getElementById("idStatus")
    idStatus.addEventListener("change", function(status){alert("a alert")})
}

function filterTasks(searchTerm) {
    return myTasks.filter(x=>x.includes(searchTerm)) // UPDATE TO HANDLE OBJECTS
}

function updateTasks() {
    taskList.innerHTML = ""
    for (i=0;i<myTasks.length;i++) {
        listTask = document.createElement("ul") // changed from li to ul to contain sublist
        listName = document.createElement("li") // the sublist
        listCategory = document.createElement("li") // the sublist
        listDeadline = document.createElement("li") // the sublist
        listStatus = document.createElement("li") // the sublist

        updateStatusDropdown = document.createElement("select") //creates the dropdown menu
        updateStatusDropdown.setAttribute("id", "idStatus")

        optionInProgress = document.createElement("option") //creates dropdown option
        optionCompleted = document.createElement("option") //creates dropdown option
        optionOverdue = document.createElement("option") //creates dropdown option
        optionInProgress.innerHTML = "In Progress" // assigns text to option
        optionCompleted.innerHTML = "Completed" // assigns text to option
        optionOverdue.innerHTML = "Overdue" // assigns text to option

        optionOverdue.addEventListener("click", function(){alert("an alert"); console.log("a console log")})

        listName.innerText = "Task: " + myTasks[i].name
        listCategory.innerText = "Category: " + myTasks[i].category
        listDeadline.innerText = "Deadline: " + myTasks[i].deadline
        listStatus.innerText = "Status: " + myTasks[i].status

        updateStatusDropdown.append(optionInProgress, optionCompleted, optionOverdue) // append options to dropdown menu
        listStatus.append(updateStatusDropdown) // append dropdown menu to Status
        listTask.append(listName, listCategory, listDeadline, listStatus, updateStatusDropdown) // append sublist (current task info) to list (current task)
        taskList.append(listTask, document.createElement("p")) // append list (current task) to list (list of all tasks)
        
    }
}



addTaskButton.addEventListener("click", function() {
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
  updateStatus()
  taskName.value = ""
  taskCategory.value = ""
  taskDeadline.value = ""
  taskStatus.value = ""
})



// document.getElementsByClassName("anOption").addEventListener("click", function(){alert("flag")})





