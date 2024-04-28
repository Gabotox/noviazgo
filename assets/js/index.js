var movimientos = 0;

function acciónporsidicequesi() {
    Swal.fire({
        title: "¡Yo sabía que querías!",
        imageUrl: "assets/img/giphy.gif",
        imageWidth: 400,
        imageHeight: 400,
        timer: 3000,
        timerProgressBar: true
    }).then((result) => {
        window.location.href = "https://facebook.com";
    });
}


function movimientodeboton() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var buttonWidth = document.getElementById('btnNo').offsetWidth;
    var buttonHeight = document.getElementById('btnNo').offsetHeight;

    var newLeft = Math.random() * (width - buttonWidth); // Calcula la nueva posición horizontal del botón
    var newTop = Math.random() * (height - buttonHeight); // Calcula la nueva posición vertical del botón

    var btnNo = document.getElementById('btnNo');
    btnNo.style.position = "absolute";
    btnNo.style.left = newLeft + "px";
    btnNo.style.top = newTop + "px";

    movimientos++;

    if (movimientos > 2) {
        Swal.fire({
            imageUrl: "assets/img/dedo-del-corazon.png",
            imageWidth: 200,
            imageHeight: 200,
            title: "¿ENTONCES, NOJODA?",
            text: "¿ME VAS A ACEPTAR O NO?",
            allowOutsideClick: false, // Evitar que la alerta se cierre al hacer clic fuera de ella
            timer: 2000, 
        })

        if(movimientos > 4) {
            Swal.fire({
                title: "¡AHORA TE JODES, AHORA NO HABRÁ BOTÓN DE NO!",
                allowOutsideClick: false, // Evitar que la alerta se cierre al hacer clic fuera de ella
                timer: 3000, 
            }) 
            btnNo.style.display = "none";
        }
    }
}