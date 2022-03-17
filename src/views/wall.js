// eslint-disable-next-line no-unused-vars
// import { logOut } from "./firebase.js";
import { saveTask } from "./firebase.js";

export const viewWall = () => {
  const wallContainer = document.createElement("div");
  wallContainer.className = "wall";

  // Aqui creamos el contenedor de la informacion en l muro

  const infoWallContainer = document.createElement("div");
  infoWallContainer.className = "infoWallContainer";
  wallContainer.appendChild(infoWallContainer);

  // Creacion de boton Log Out

  const btnLogout = document.createElement("div");
  btnLogout.className = "btnLogout";
  btnLogout.innerHTML = `
  <input type="button" id="btnLogout" class="btn-logout" value="LOG OUT">
  `;
  infoWallContainer.appendChild(btnLogout);

  btnLogout.addEventListener("click", () => {
    window.location.hash = "#/";
  });

  // Creacion del text area
  const wallPostData = document.createElement("div");
  wallPostData.className = "wallPostData";
  wallPostData.innerHTML = `
  <form id="task-form">
  <label for="title">Title:</label>
  <input type="text" id="task-title" class="My First Title" placeholder="Task Title" autofocus/>
 <label for="description">Description:</label>
 <textarea id="task-description" rows="3" class="makePost" placeholder="Task Description"></textarea>
 <button class="btn btn-primary" id="btn-task-form">Save</button>
 </form>
 `;
  infoWallContainer.appendChild(wallPostData);

  // Creamos una funcion para guardar post en Firestore
  const taskForm = document.getElementById("task-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = taskForm["task-title"];
    const description = taskForm["task-description"];

    saveTask(title.value, description.value);
  });

 
  // const messageWall = document.createElement("p");
  // messageWall.textContent = "wall under construction";
  // wallContainer.appendChild(messageWall);

  return wallContainer;
};
