const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const removeAllBtn = document.getElementById("clearAllTaskBtn");
let tasks = [];

function addTask(){
    // inputtun veri al ve bosluklari temizle
    const taskText = taskInput.value.trim();

    //eger taskTest bos degilse
    if(taskText !== ""){

        // tasks arrayine pushla
        tasks.push({text: taskText});

        // task inptuna bos deger ver
        taskInput.value = " ";

        // Tasklari goster
        displayTasks()
    }
}

function  displayTasks(){
// inputa bos deger ata    
taskList.innerHTML = "";
    // tasks arrayini forEach'le 
    tasks.forEach((task, index) => {
      // li elementi olustur  
      const li = document.createElement("li");
      // li elementine veri ekle
      li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
      //querySelector ile input elementini sec change Evetini ekle
      li.querySelector("input").addEventListener("change", () => toggleTask(index));
      //ul elementine child olan li ekleniyor
      taskList.appendChild(li);
    })
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function removeAllTask() {

    if(tasks) {
        tasks = [];
        displayTasks();
    }
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
removeAllBtn.addEventListener("click", removeAllTask);

displayTasks();



