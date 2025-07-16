const enviar = document.getElementById("enviar");

const form = document.querySelector("form");

enviar.addEventListener("click", function (even) {
    even.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("mensaje").value;

    const success = document.getElementById("success");
    const error = document.getElementById("error");

    if (nombre && email && msg) {
        const mensaje = `${nombre}, Mensaje enviado con exito!`;
        success.textContent = mensaje;

        setTimeout(() => {
            success.textContent = "";
        }, 2500)
        form.reset();
    } else {
        const msg_error = `Llena los campos requeridos`;
        error.textContent = msg_error;

        setTimeout(() => {
            error.textContent = "";
        }, 2500)
    }

    console.log(nombre, email, msg);

    // const mensaje = `${nombre}, Mensaje enviado con exito!`;
    // success.textContent = mensaje;
})