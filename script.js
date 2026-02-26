const inputBox = document.querySelector(".input1")
const listcontainer = document.querySelector(".list-container")
const addButton = document.querySelector(".button1")

addButton.addEventListener("click", addTask)

const activeCountDisp = document.querySelector(".infodiv:nth-child(1) h2");
const completedCountDisp = document.querySelector(".infodiv:nth-child(2) h2");
const totalCountDisp = document.querySelector(".infodiv:nth-child(3) h2");


inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "checkbox";

    const taskId = "task-" + Date.now();

    taskItem.innerHTML = `
        <input class="cb" type="checkbox" id="${taskId}">
        <label for="${taskId}" class="task-text">${inputBox.value}</label>
        <div class="cbs">
            <!-- Edit Icon -->
            <svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-pencil w-5 h-5 text-blue-500">
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                <path d="m15 5 4 4"></path>
            </svg>
            <!-- Delete Icon -->
            <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-trash2 lucide-trash-2 w-5 h-5 text-red-500">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
            </svg>
        </div>
    `;

    listcontainer.appendChild(taskItem);
    inputBox.value = '';

    updateCounts();
    saveData();
}

function updateCounts() {
    const totalTasks = document.querySelectorAll(".checkbox").length;
    const completedTasks = document.querySelectorAll(".cb:checked").length;
    const activeTasks = totalTasks - completedTasks;

    totalCountDisp.textContent = totalTasks;
    completedCountDisp.textContent = completedTasks;
    activeCountDisp.textContent = activeTasks;
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("cb")) {
        if (e.target.checked) {
            e.target.setAttribute("checked", "checked");
        } else {
            e.target.removeAttribute("checked");
        }
        updateCounts();
        saveData();
    }
    else if (e.target.closest(".edit-icon")) {
        const taskText = e.target.closest(".checkbox").querySelector(".task-text");
        const newText = prompt("Edit your task:", taskText.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskText.textContent = newText.trim();
            saveData();
        }
    }
    else if (e.target.closest(".delete-icon")) {
        e.target.closest(".checkbox").remove();
        updateCounts();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("todo-tasks", listcontainer.innerHTML);
}

function showData() {
    listcontainer.innerHTML = localStorage.getItem("todo-tasks") || "";
    updateCounts();
}
showData()