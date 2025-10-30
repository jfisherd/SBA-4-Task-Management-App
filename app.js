myTasks = [] // array containing the task objects
myTasksFiltered = [] // array for filtered tasks
taskName = document.getElementById("taskName") //task info
taskCategory = document.getElementById("taskCategory") //task info
taskDeadline = document.getElementById("taskDeadline") //task info
// taskDeadline = Date(Date.now()+86400) // defaults selected due date to tomorrow NOT WORKING. KEEP FOR FUTURE IMPLEMENTATION
taskStatus = document.getElementById("taskStatus") //task info
addTaskButton = document.getElementById("addTaskButton") // add button
taskList = document.getElementById("taskList") // the unordered list
categoryFilter = document.getElementById("categoryFilter") // category filter dropdown 
statusFilter = document.getElementById("statusFilter") // status filter dropdown

function updateStatus() {
    idStatus = document.getElementsByClassName("idStatus") // may contain many elements of the same class
    for (i = 0; i < myTasks.length; i++) {                 // must iterate over each element to apply event listeners
        idStatusSpecific = idStatus[i]
        idStatusSpecific.addEventListener("change", function () {
            alert("Flag 1")
            taskStatusText = document.getElementById("taskStatusText" + `${i}`)
            if (taskStatusText.innerHTML != "Completed") { // Date() > myTasks[i].deadline) { // && ) {
                alert("Flag 2")
                taskStatusText.innerHTML = "Overdue"
            }
        })

    }
}

function filterTasks(searchTerm) {
    return myTasks.filter(x => x.includes(searchTerm)) // UPDATE TO HANDLE OBJECTS
}

function updateTasks() {
    taskList.innerHTML = ""
    for (i = 0; i < myTasks.length; i++) {
        updateStatusDropdown = document.createElement("select") //creates the dropdown menu
        updateStatusDropdown.setAttribute("class", "idStatus")

        listTask = document.createElement("ul") // changed from li to ul to contain sublist
        listName = document.createElement("li") // the sublist
        listCategory = document.createElement("li") // the sublist
        listDeadline = document.createElement("li") // the sublist
        listStatus = document.createElement("li") // the sublist
        // listStatus.setAttribute("id", "taskStatusText" + `${i}`)

        optionInProgress = document.createElement("option") //creates dropdown option
        optionCompleted = document.createElement("option") //creates dropdown option
        optionOverdue = document.createElement("option") //creates dropdown option
        optionInProgress.innerHTML = "In Progress" // assigns text to option
        optionCompleted.innerHTML = "Completed" // assigns text to option
        optionOverdue.innerHTML = "Overdue" // assigns text to option

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

addTaskButton.addEventListener("click", function () {
    taskObject = {
        name: taskName.value,
        category: taskCategory.value,
        deadline: taskDeadline.value,
        status: taskStatus.value
    }
    if (taskObject.name === "" || taskObject.category === "" || taskObject.deadline === "" || taskObject.status === "") {
        alert("Please enter all fields before adding a task!")
        return
    }
    myTasks.push(taskObject) //add task object to the myTasks array
    updateTasks()
    updateStatus()
    taskName.value = ""
    taskCategory.value = ""
    taskStatus.value = "In Progress"
})
