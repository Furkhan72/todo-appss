document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTaskToList(taskText);
        taskInput.value = ""; // Clear the input field after adding the task
    }
});

function addTaskToList(taskText) {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = taskText;

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function() {
        li.remove(); // Remove the task when delete button is clicked
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
