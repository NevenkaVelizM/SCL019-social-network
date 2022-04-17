/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-duplicates
import { loginWithGoogle } from "./firebase.js";
import { loginUser } from "./firebase.js";

export const viewLogin = () => {
  const loginContainer = document.createElement("div");
  loginContainer.className = "loginContainer";

  // Creamos el contenedor de toda la seccion
  const loginInfoContainer = document.createElement("div");
  loginInfoContainer.className = "loginInfoContainer";
  loginContainer.appendChild(loginInfoContainer);

  // Ubicacion del Logo en la pagina
  const loginLogoApp = document.createElement("img");
  loginLogoApp.className = "loginLogoApp";
  loginLogoApp.setAttribute("src", "./assets/Logo_codeZan.png");
  loginInfoContainer.appendChild(loginLogoApp);

  // Ubicacion del texto LOGIN
  const loginLoginText = document.createElement("div");
  loginLoginText.className = "loginLoginText";

  const welcomeText = document.createElement("div");
  welcomeText.className = "welcomeText";
  welcomeText.innerHTML = ` 
  <p> Hi, User.<br> Welcome to our new socialNetwork.<br><br> Solve your doubts and connect with other programmers <br><br> 
  Come.. Follow the white rabbit... <p/>
  `;
  loginInfoContainer.appendChild(loginLoginText);
  loginLoginText.appendChild(welcomeText);

  // Creacion de los campos de texto
  const loginUserData = document.createElement("div");
  loginUserData.className = "loginUserData";
  loginUserData.innerHTML = `
    <form id="loginFormLogin" class="loginFormLogin">
    <div class="loginUser"> User </div>
    <input type="text" id="loginEmailUser" class="loginEmailUser" placeholder= "Enter email" autocomplete= "on" size ="25" required />
    <span class="displayNone"><p id="emailLoginEnter" class="emailLoginEnter"> ⚠️Enter a valid e-mail </p></span>
    <span class="displayNone"><p id="userNotFound" class="userNotFound"> ⚠️User not found </p></span>
    <div class="loginPassword"> Password </div>
    <input type="password" id="loginPasswordInput" class="loginPasswordInput" placeholder= "Enter password" size ="25" required/>
    <span class="displayNone"><p id="wrongPassword" class="wrongPassword"> ⚠️Wrong password </p></span>
    <span class="displayNone"><p id="enterPasswordPassword" class="enterPassword"> ⚠️Enter password </p></span>
    </form>
    </div>
    `;

  loginInfoContainer.appendChild(loginUserData);

  // Boton Continuar
  const btnContinue = document.createElement("div");
  btnContinue.className = "login-btnContinue-place";
  btnContinue.innerHTML = `
   <input type="button" id="buttonContinue" class="login-btnContinue" value="CONTINUE">
   `;
  loginUserData.appendChild(btnContinue);
  btnContinue.addEventListener("click", () => {
    const email = document.getElementById("loginEmailUser").value;
    if (email === "") {
      document.querySelector(".emailLoginEnter").style.display = "block";
    } else {
      document.querySelector(".emailLoginEnter").style.display = "none";
    }
    const password = document.getElementById("loginPasswordInput").value;
    if (password === "") {
      document.querySelector(".enterPassword").style.display = "block";
    } else {
      document.querySelector(".enterPassword").style.display = "none";
    }
    loginUser(email, password);
  });

  // Botón de google
  const buttonGoogle = document.createElement("div");
  buttonGoogle.className = "btnGoogle";
  buttonGoogle.innerHTML = `
  <input type="button" id="buttonGoogle" class="buttonGoogle" value="Sign In with Google">
  `;
  loginUserData.appendChild(buttonGoogle);
  buttonGoogle.addEventListener("click", loginWithGoogle);

  // Boton de Register
  const btnRegister = document.createElement("div");
  btnRegister.className = "btnRegister";
  btnRegister.innerHTML = `
  <input type="button" id="btnRegister" class="login-btnRegister" value=" REGISTER">
  `;
  loginUserData.appendChild(btnRegister);

  btnRegister.addEventListener("click", () => {
    window.location.hash = "#/register";
  });

  // Creacion LoginFooter
  const loginFooter = document.createElement("div");
  loginFooter.className = "loginFooter";
  loginInfoContainer.appendChild(loginFooter);

  const sectionReturn = document.createElement("div");
  sectionReturn.className = "sectionReturn";
  loginFooter.appendChild(sectionReturn);

  const returnRegister = document.createElement("div");
  returnRegister.className = "returnRegister";
  returnRegister.textContent = "Nevenka Veliz - Anabella Lincopan - Zulibeth Torres";
  sectionReturn.appendChild(returnRegister);

  return loginContainer;
};
