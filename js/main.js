const enviar = document.getElementById("enviar");

const form = document.querySelector("form");

enviar.addEventListener("click", function (even) {
    even.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("mensaje").value;

    const alert = document.getElementById("alert");

    if (nombre && email && msg) {
        const mensaje = `
        <p id="success" class="conta">${nombre}, Mensaje enviado con exito!</p>
        `;
        alert.innerHTML = mensaje;

        setTimeout(() => {
            alert.innerHTML = "";
        }, 2500)
        form.reset();
    } else {
        const msg_error = `
        <p id="error" class="conta">Llena los campos requeridos</p>
        `;
        alert.innerHTML = msg_error;

        setTimeout(() => {
            alert.innerHTML = "";
        }, 2500)
    }
})