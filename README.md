







# KBA 4, Task Management App

## Description
In this lab an application is built which allows the user to make a task list. Each task listed includes a name, category, deadline, and status. Features include adding customized tasks, updating task statuses, and filtering by either category or status.

## Running the program
To interact with this lab, open index.html in a web browser.<br>
Add a task to the list by inputting a task name and category, selecting the deadline and task status, and clicking Add Task.

<br>

## Reflection
<!--
    Reflection: Write a short reflection (100-200 words) included within the repository discussing:

    Challenges faced during the project.
    How you approached solving those challenges.
    What you would improve if given more time.
-->

Challenges faced. Approaches to challenges

    Difficult to tell when code runs. Inserted alert functions to flag if code runs.

    Could not get addEventListener to apply to option elements. Applied addEventListener to a select element instead
    
    document.getElementById outputs an object, document.
    document.getElementsByClassName outputs an HTMLCollection.
    Replaced all cases of getElementsByClassName with getElementById to make object referencing easier.

    Getting styles.css to be processed as a stylesheet. Used rel="stylesheet" in script element attempt fix, no change observed.

If given more time:

    Styling

    Label the input fields

    Use input fields for all four inputs, since that is specified in the instructions. 
    Inputs would be checked for validity
        Not empty for any fields
        Input for date field must be formatted correctly, placeholder text and label to show example
        Allow user to Enter any status they want, however will still default to overdue when due date passes

    Attempt to use semantic HTML and ARIA to allow full navigation on a screenreader. Add a jump to main content feature to screenreaders can get right to reading the tasks already on the list.