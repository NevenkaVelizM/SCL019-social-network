import {
  getPosts,
  getPost,
  savePost,
  logOut,
  auth,
  updatePost,
  deletePost,
  like,
  dislike,

} from "./firebase.js";

export const viewWall = () => {
  const wallContainer = document.createElement("div");
  wallContainer.className = "wall";
  const infoWallContainer = `
 <header id="header-wall">
 <div class="logo-container">
 <img class="wall-logo" src="./assets/Logo_codeZan.png" alt="wall-logo" />
 </div>
 <div class="logout-container">
 <i id="btnLogout" class="fa fa-power-off"></i>
 </div>
 </header>
  <main id="container-posts">
  <div id="container-btn-input">
  <i id="img-input" class="fas fa-pencil-alt"></i>
  <button type="button" id="btn-input-modal">Create new post</button>
  </div>
   <div id="modal-background-post">
    <div id="modal-content-post">
    <div id="space-line">
    <p>New post</p>
    <i id="btn-exit" class="fa fa-times-circle"></i>
    </div>
    <div id="line"></div>
    <div id="after-line">
    <div id="container-img-text">
    <i id="img-modal-post" class="fas fa-user-circle"></i>
    <div id="container-text"></div>
    </div>
    <textarea type="text" id="input-post" placeholder="Write something"></textarea>
      <button disabled type="button" id="btn-post" class="btn-post-inactive">PUBLISH</button>
    </div>
   </div>
  </div>
  </div>
  <div id="div-post"></div>
  <div id="container-modal-delete"></div>
</main>
`;
  let currentPostId = ""; // Variable que tomara el valor de del id del post en evento eliminar y aceptar
  let editStatus = false; // Variable que cambiara estado en evento editar
  let id = ""; // Variable que traera el post con su respectivo id en el evento editar
  wallContainer.innerHTML = infoWallContainer;

  // ............................................................................

  const btnInputModal = wallContainer.querySelector("#btn-input-modal");
  btnInputModal.addEventListener("click", () => { // evento que mostrara la modal para publicar
    document.querySelector("#modal-background-post").style.display = "flex";
    document.querySelector("#modal-content-post").style.display = "block";
    document.body.style.overflow = "hidden";
    document.querySelector("#input-post").focus();
    document.querySelector("#input-post").value = "";
  });

  const inputPost = wallContainer.querySelector("#input-post");
  inputPost.addEventListener("keyup", () => { // evento del textarea
    const valueInput = inputPost.value.trim();
    // trim() metodo que no permite activar boton con espacio
    if (valueInput === "") {
      document.querySelector("#btn-post").disabled = true; // boton publicar inactivo
    } else {
      document.querySelector("#btn-post").disabled = false; // boton publicar activo
    }
  });

  const btnPost = wallContainer.querySelector("#btn-post"); // boton publicar
  btnPost.addEventListener("click", async () => {
    const description = document.querySelector("#input-post").value; // describe como valor del input
    document.body.style.overflow = "visible";
    if (description !== "") { // validacion de input vacio
      document.querySelector("#input-post").value = "";
      if (!editStatus) {
        savePost(description);
      } else {
        await updatePost(id, {
          userPost: description, // describe como valor del input y como valor del objeto
        });
      }
      editStatus = false;
      document.querySelector("#btn-post").innerText = "PUBLISH";
      document.querySelector("#modal-background-post").style.display = "none";
      document.querySelector("#modal-content-post").style.display = "none";
    }
    document.querySelector("#btn-post").disabled = true;
  });

  getPosts((response) => {
    const nameuid = auth.currentUser.displayName;
    const divContainerText = document.querySelector("#container-text");
    divContainerText.innerHTML = "";// Template que imprime nombre de usuario en modal publicar
    divContainerText.innerHTML += `
    <p>${nameuid}</p>
    `;
    const userId = auth.currentUser.uid;
    const divPosts = document.querySelector("#div-post");
    divPosts.innerHTML = "";
    response.forEach((doc) => {
      const getdate = new Date(doc.data().currentDate.seconds * 1000);
      const date = `${getdate.getDate()}/${(getdate.getMonth() + 1)}/${getdate.getFullYear()}`;
      divPosts.innerHTML += `
 <div class= "card-post">
    <div id="container-user-data">
     <i id="img-post" class="fas fa-user-circle"></i>
      <div id="container-data">
        <p id="user-name">${doc.data().userName}</p>
        <p id="date">${date}</p>
      </div>
    </div>
         <p id="description-post">${doc.data().userPost}</p>
         <div id="container-likes">
         ${doc.data().like.includes(userId) ? `
         <i id="img-like" class="fas fa-thumbs-up" data-id="${doc.id}"></i><span>${doc.data().like.length}</span></` : ` <i id="img-like" class="far fa-thumbs-up" data-id="${doc.id}"></i><span>${doc.data().like.length}</span>`} 
       </div>
         ${userId === doc.data().userId ? `
         <div id="container-selects">
         <i id="img-edit" class="fa fa-edit" data-id="${doc.id}"></i>
         <i id="img-delete" class="fa fa-trash" data-id="${doc.id}"></i>
       </div>
       ` : ""}
   </div>`;

      const ContainerModalDelete = document.querySelector("#container-modal-delete");

      // Contenedor modal para confirmar eliminacion de post
      ContainerModalDelete.innerHTML = `
  <div id="modal-content-delete">
  <div id="container-img-exit">
  <i id="btn-exit" class="fa fa-times-circle"></i>
    </div>
    <div id="content-modal-delete">
    <p>¿Are you sure you want to delete?</p>
 <button type="button" id="btn-accept-delete">ACCEPT</button>
 </div>
</div>`;

      // Evento que abrira modal para confirmar eliminacion del post
      const btnDelete = document.querySelectorAll("#img-delete");
      btnDelete.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          document.querySelector("#container-modal-delete").style.display = "flex";
          document.querySelector("#modal-content-delete").style.display = "block";
          document.body.style.overflow = "hidden";
          currentPostId = e.target.dataset.id;
        });
      });

      // Evento que confirma la eliminacion del post
      const btnAccept = document.querySelectorAll("#btn-accept-delete");
      btnAccept.forEach((btn) => {
        btn.addEventListener("click", async () => {
          await deletePost(currentPostId);
          document.querySelector("#container-modal-delete").style.display = "none";
          document.body.style.overflow = "visible";
        });
      });

      // Evento para editar un post
      const btnEdit = document.querySelectorAll("#img-edit");
      btnEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const editDoc = await getPost(e.target.dataset.id);
          editStatus = true;
          id = editDoc.id;
          document.querySelector("#input-post").value = editDoc.data().userPost;
          document.querySelector("#btn-post").innerText = "SAVE";
          document.querySelector("#modal-background-post").style.display = "flex";
          document.querySelector("#modal-content-post").style.display = "block";
        });
      });

      const btnLogout = wallContainer.querySelector("#btnLogout");
      btnLogout.addEventListener("click", () => {
        logOut();
      });

      // Evento para cerra modales
      const btnExit = document.querySelectorAll("#btn-exit");
      btnExit.forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelector("#btn-post").innerText = "PUBLISH";
          document.querySelector("#modal-background-post").style.display = "none";
          document.querySelector("#modal-content-post").style.display = "none";
          document.querySelector("#container-modal-delete").style.display = "none";
          document.querySelector("#modal-content-delete").style.display = "none";
          document.body.style.overflow = "visible";
        });
      });

      // Evento para like y dislike
      const btnLike = document.querySelectorAll("#img-like");
      btnLike.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const likeDoc = await getPost(e.target.dataset.id);
          const likeUser = likeDoc.data().like;
          if (likeUser.includes(userId)) { // Valida si uid esta agregado en likeuser (objeto)
            dislike(userId, e.target.dataset.id);
          } else {
            like(userId, e.target.dataset.id);
          }
        });
      });
    });
  });
  return wallContainer;
};
