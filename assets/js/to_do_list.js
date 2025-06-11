const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  // intervengo sul comportamento di default
  e.preventDefault();
  // prendo il mio input
  const taskInput = document.getElementById("task");
  const savedTask = {
    task: taskInput.value,
  };
  console.log("Task aggiunta: ", savedTask);

  // creazione della lista delle task
  const ul = document.createElement("ul");
  ul.innerHTML = `<li>${savedTask.task}  <button onclick="deleteList(event)">Delete</button>
   <button onclick="editList(event)">Edit</button></li>
  `;
  const div = document.getElementById("taskList");
  div.appendChild(ul);

  const newUl = document.getElementsByTagName("ul");
  for (let i = 0; i < newUl.length; i++) {
    newUl[i].classList.add("ul-style");
  }
  // reset Form
  myForm.reset();
});

const deleteList = function (e) {
  console.log("Hai cliccato il tasto elimina ", e.target);
  console.log(e.target.parentElement);
  const list = e.target.parentElement;
  list.classList.add("li-delete");
};

const editList = function (e) {
  const editList = e.target.parentElement;
  editList.classList.add("li-edit");
};
