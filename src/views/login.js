import { loginWithGoogle } from "./firebase.js";

export const viewLogin = () => {
  // aqui va el DOM de nuestra pagina de registro
  // Creamos el contenedor de toda la seccion
  const infoContainer = document.createElement("div");
  infoContainer.className = "infoContainer";
  document.getElementById("root").appendChild(infoContainer);

  // Ubicacion del Logo en la pagina

  const logoApp = document.createElement("div");
  logoApp.className = "logoApp";
  logoApp.textContent = "</>";
  infoContainer.appendChild(logoApp);

  // Ubicacion del texto LOGIN
  const loginText = document.createElement("div");
  loginText.className = "loginText";
  loginText.textContent = "LOGIN";

  infoContainer.appendChild(loginText);

  // Creacion de los campos de texto

  const userData = document.createElement("div");
  userData.className = "userData";
  userData.innerHTML = `
    <form id="formLogin" class="FormLogin">
    <div class="email"> E-mail </div>
    <input type="email" id="emailLogin" class="emailLogin" placeholder= "Enter e-mail" autocomplete= "off" required />
    <div class="password"> Password </div>
    <span class="iconEye"><i id="checkEye" class="fas fa-eye-slash"></i></span>
    <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Enter password" required/>
    <input type="submit" id="submit-register" class="submit-register" value="Continue">
    </form>
    </div>
    `;

  infoContainer.appendChild(userData);
  // console.log('Hola mundo!');

  // Mostrar y ocultar contraseña
  const iconEye = userData.querySelector(".iconEye");
  const checkEye = userData.querySelector("#checkEye");
  const passwordLogin = userData.querySelector("#passwordLogin");

  iconEye.addEventListener("click", () => {
    if (passwordLogin.type === "password") {
      passwordLogin.type = "text";
      checkEye.classList.remove("fa-eye-slash");
      checkEye.classList.add("fa-eye");
    } else {
      passwordLogin.type = "password";
      checkEye.classList.add("fa-eye-slash");
      checkEye.classList.remove("fa-eye");
    }
  });

  // Botón de google

  const footerRegister = document.createElement("div");
  footerRegister.className = "footerRegister";
  infoContainer.appendChild(footerRegister);
  const buttonGoogle = document.createElement("div");
  buttonGoogle.className = "btnGoogle";

  buttonGoogle.innerHTML = `
  <input type="button" id="buttonGoogle" class="buttonGoogle" value="Sign In with Google">
  `;
  footerRegister.appendChild(buttonGoogle);
  buttonGoogle.addEventListener("click", loginWithGoogle);
};
