import { components } from "../views/indexView.js";

export const changeView = (route) => {
  const container = document.getElementById("root");
  container.innerHTML = "";
  switch (route) {
    case "":
    case "#":
    case "#/":
      container.appendChild(components.login());
      break;
    case "#/register":
      container.appendChild(components.register());
      break;

    default:
      container.appendChild(components.Error404());
  }
};
// console.log("hola");
