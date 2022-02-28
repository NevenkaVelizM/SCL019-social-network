import { loginWithGoogle, registerUser } from "./registro.js"; 
// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui va el DOM de nuestra pagina de registro
  
  // Creamos el contenedor de toda la seccion
  const infoContainer = document.createElement("div");
  infoContainer.className = "infoContainer";
  document.getElementById("root").appendChild(infoContainer);

  //Ubicacion del Logo en la pagina
  const logoApp = document.createElement("div");
  logoApp.className = "logoApp";
  logoApp.textContent = '</>';
  infoContainer.appendChild(logoApp);

  //Ubicacion del texto REGISTER
  const registerText = document.createElement("div")
  registerText.className = "registerText"
  registerText.textContent = 'REGISTER';
  infoContainer.appendChild(registerText);

  //Creacion de los campos de texto

  const userData = document.createElement("div");
  userData.className = "userData";
  userData.innerHTML = `
  <form id="formLogin" class="FormLogin">
  <div class="name"> Name </div>
  <input type="text" id="registerNameLogin" class="registerNameLogin" placeholder= "Enter your name"/>
  <div class="nickName"> Nickname </div>
  <input type="text" id="nickNameLogin" class="nickNameLogin" placeholder= "Enter your nickname"/>
  <div class="email"> E-mail </div>
  <input type="email" id="emailLogin" class="emailLogin" placeholder= "Enter e-mail"/>
  <div class="passwordLogin"> Password </div>
  <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Enter password" />
  <input type="submit" id="submit-register" class="submit-register" value="Continue">
  </form>
  </div>
  `;
 
  infoContainer.appendChild(userData);
  

  console.log('Hola mundo!');

  //boton de continuar
  // const buttonContinue = document.createElement("div");
  // buttonContinue.className = "buttonContinue";
  // buttonContinue.innerHTML = `
  // <input type="button" id="buttonContinue" class="buttonContinue" value="Continue">
  // `;

  // infoContainer.appendChild(buttonContinue);

  //prueba boton de registro
  const buttonContinue= document.getElementById("submit-register");
  buttonContinue.addEventListener("click", () => {
    const userName=document.getElementById("registerNameLogin").value;
    const email= document.getElementById("emailLogin").value;
    const password= document.getElementById("passwordLogin").value;
    registerUser(userName, email, password);
    console.log(registerUser);
  });
  // // console.log(buttonContinue)


  //botón de google
  const buttonGoogle = document.createElement("div");
  buttonGoogle.className = "buttonGoogle";
  buttonGoogle.innerHTML = `
  <input type="button" id="buttonGoogle" class="buttonGoogle" value="Sign In with Google">
  `;

  infoContainer.appendChild(buttonGoogle);
  buttonGoogle.addEventListener("click", loginWithGoogle);

};


