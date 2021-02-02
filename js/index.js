window.onload = () => {
    document
      .querySelector(".send-button")
      .addEventListener("click", e => validateForm(e));
    document.querySelectorAll(".project").forEach(element => {
      element.addEventListener("click", e => openModal(e));
    });
    document.body.addEventListener("click", e => closeModal(e));
    document.body.addEventListener("keyup", e => listenForEsc(e));
};

/** Validar el formulario antes de mostrar la notificacion */
function validateForm(e) {
    e.preventDefault();
    const nameField = document.getElementById("name");
    if (nameField.value === ""){
      document.getElementById("name-error").innerHTML = "! Para enviar el formulario, se necesita un nombre";
    } else {
      showNotification();
    }
}
  
/** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
function showNotification() {
    document.getElementById("name-error").innerHTML = "";
    document.querySelector('.form-container').reset();
    document.querySelector(".notification").style.display = "flex";
    document.querySelector(".notification").innerHTML = "El formulario fue enviado sin errores";
    setTimeout(function() {
      document.querySelector(".notification").style.display = "none";
    }, 2000);
}