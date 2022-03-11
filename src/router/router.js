/* eslint-disable default-case */
/* eslint-disable import/no-cycle */
import { viewRegister } from "../views/register.js";
import { viewLogin } from "../views/login.js";

export const changeView = (hash) => {
  const container = document.getElementById("root");
  container.innerHTML = "";
  if (hash === "" || hash === "#" || hash === "#/") {
    container.appendChild(viewLogin());
  } else if (hash === "#/register") {
    container.appendChild(viewRegister());
  }
};
