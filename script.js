function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // Top row with task and buttons
  const topRow = document.createElement("div");
  topRow.classList.add("top-row");

  const textSpan = document.createElement("span");
  textSpan.classList.add("task-text");
  textSpan.textContent = taskText;

  const checkBtn = document.createElement("span");
  checkBtn.innerHTML = "✔";
  checkBtn.classList.add("check");
  checkBtn.onclick = () => li.classList.toggle("completed");

  const delBtn = document.createElement("span");
  delBtn.innerHTML = "×";
  delBtn.classList.add("delete");
  delBtn.onclick = () => li.remove();

  const timeSpan = document.createElement("span");
  timeSpan.classList.add("task-time");
  const now = new Date();
  timeSpan.textContent = "Added at " + now.toLocaleTimeString();

  topRow.appendChild(textSpan);
  const btnWrapper = document.createElement("div");
  btnWrapper.appendChild(checkBtn);
  btnWrapper.appendChild(delBtn);
  topRow.appendChild(btnWrapper);

  li.appendChild(topRow);
  li.appendChild(timeSpan);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Mode toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  const modeBtn = document.getElementById("toggleMode");
  modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
