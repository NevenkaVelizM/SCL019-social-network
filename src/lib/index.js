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
  <input type="text" id="registerNameLogin" class="registerNameLogin" placeholder= "Enter your Name"/>
  <div class="nickName"> NickName </div>
  <input type="text" id="nickNameLogin" class="nickNameLogin" placeholder= "Enter your nickName"/>
  <div class="email"> Name </div>
  <input type="email" id="emailLogin" class="emailLogin" placeholder= "Enter mail"/>
  <div class="passwordLogin"> Password </div>
  <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Enter password" />
  </form>
  </div>
  `;
 
  infoContainer.appendChild(userData);
    

  console.log('Hola mundo!');
};
