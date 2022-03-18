// eslint-disable-next-line no-unused-vars
// import { logOut } from "./firebase.js";
import { saveTask } from "./firebase.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("works");
});

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
 <label for="description">Description:</label>
 <textarea id="task-description" rows="3" class="makePost" placeholder="Task Description"></textarea>
 </form>
 `;
  infoWallContainer.appendChild(wallPostData);

  // Creamos boton de Post
  const btnPost = document.createElement("div");
  btnPost.className = "btnPost";
  btnPost.innerHTML = `
   <input type="button" id="btnPost" value="Post">
   `;
  infoWallContainer.appendChild(btnPost);

  // Creamos una funcion para guardar post en Firestore
  btnPost.addEventListener("click", () => {
    const description = document.getElementById("task-description").value;
    console.log(description);
    saveTask(description);
    document.getElementById("task-description").value = "";
  });

  // const messageWall = document.createElement("p");
  // messageWall.textContent = "wall under construction";
  // wallContainer.appendChild(messageWall);

  return wallContainer;
};
