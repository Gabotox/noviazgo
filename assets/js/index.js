var video = document.getElementById('miVideo');
video.play();
var movimientos = 0;

function acciónporsidicequesi() {
    Swal.fire({
        title: "¡Yo sabía que querías!",
        imageUrl: "assets/img/giphy.gif",
        imageWidth: 400,
        imageHeight: 400,
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            window.location.href = "love.html";
        }
    });
}


function movimientodeboton() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var buttonWidth = document.getElementById('btnNo').offsetWidth;
    var buttonHeight = document.getElementById('btnNo').offsetHeight;

    var newLeft = Math.random() * (width - buttonWidth);
    var newTop = Math.random() * (height - buttonHeight);

    var btnNo = document.getElementById('btnNo');
    btnNo.style.position = "absolute";
    btnNo.style.left = newLeft + "px";
    btnNo.style.top = newTop + "px";

    movimientos++;

    if (movimientos > 2) {
        Swal.fire({
            imageUrl: "assets/img/dedo-del-corazon.png",
            imageWidth: 150,
            imageHeight: 150,
            title: "¿CUÁL ES EL VIAJE?",
            text: "¿ME VAS A ACEPTAR O NO?",
            allowOutsideClick: false,
            timer: 2000,
            showConfirmButton: false
        })

        if (movimientos > 3) {
            Swal.fire({
                imageUrl: "assets/img/triste.png",
                imageWidth: 100,
                imageHeight: 100,
                title: "¡JOAAAA, AHORA QUITO EL BOTÓN DE NO!",
                allowOutsideClick: false,
                timer: 4000,
                showConfirmButton: false
            })
            btnNo.style.display = "none";
        }
    }
}