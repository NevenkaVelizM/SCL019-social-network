// eslint-disable-next-line no-unused-vars
import { logOut } from "./firebase.js";

export const viewWall = () => {
  const wallContainer = document.createElement("div");
  wallContainer.setAttribute("id", "wall");

  const messageWall = document.createElement("p");
  messageWall.textContent = "wall under construction";
  wallContainer.appendChild(messageWall);

  const btnLogout = document.createElement("div");
  btnLogout.className = "btnLogout";
  btnLogout.innerHTML = `
  <input type="button" id="btnLogout" class="btn-logout" value="LOG OUT">
  `;
  wallContainer.appendChild(btnLogout);

  btnLogout.addEventListener("click", () => {
    window.location.hash = "#/";
  });
  return wallContainer;
};
