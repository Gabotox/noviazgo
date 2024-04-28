var movimientos = 0;

function acciónporsidicequesi() {
    Swal.fire({
        title: "¡Yo sabía que querías!",
        imageUrl: "https://i.pinimg.com/564x/35/b6/53/35b65327cc405cd0dd70102ff07ba485.jpg",
        imageWidth: 400,
        imageHeight: 200,
      });
}


function movimientodeboton(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    var buttonWidth = document.getElementById('btnNo').offsetWidth;
    var buttonHeight = document.getElementById('btnNo').offsetHeight;

    var newLeft = Math.random() * (width - buttonWidth); // Calcula la nueva posición horizontal del botón
    var newTop = Math.random() * (height - buttonHeight); // Calcula la nueva posición vertical del botón

    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newLeft + "px";
    document.getElementById('btnNo').style.top = newTop + "px";

    movimientos++;

    if (movimientos > 2) {
        Swal.fire({
            title: "¿ENTONCES, NOJODA?",
            text: "¿ME VAS A ACEPTAR O NO?",
            showCancelButton: true, // Mostrar el botón de cancelar
            cancelButtonText: "Cancelar", // Texto del botón de cancelar
            confirmButtonText: "Aceptar" // Texto del botón de confirmar
        }).then((result) => {
            if (result.isConfirmed) { // Si el usuario hace clic en "Aceptar"
                // Aquí puedes agregar el código que quieras ejecutar después de que el usuario acepte la alerta
                movimientos = 0; // Reiniciar el contador de movimientos
                window.location.reload();
            } else { // Si el usuario hace clic en "Cancelar" o cierra la alerta
                // Aquí puedes agregar el código que quieras ejecutar si el usuario cancela la alerta
            }
        });
    }

}