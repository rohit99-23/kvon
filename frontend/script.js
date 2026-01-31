const API_URL = "/api/tasks";

function addTask() {
  const title = document.getElementById("taskInput").value;

  fetch(API_URL + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("taskInput").value = "";
    loadTasks();
  });
}

function loadTasks() {
  fetch(API_URL)
    .then(res => res.json())
    .then(tasks => {
      const list = document.getElementById("taskList");
      list.innerHTML = "";

      tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${task.title}
          <button onclick="deleteTask('${task._id}')">❌</button>
        `;
        list.appendChild(li);
      });
    });
}

function deleteTask(id) {
  fetch(API_URL + "/" + id, { method: "DELETE" })
    .then(() => loadTasks());
}

loadTasks();

