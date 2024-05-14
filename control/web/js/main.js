//alert("Hola mundo");
let Adelante=document.getElementById("Adelante");
let Atras=document.getElementById("Atras");
let Derecha=document.getElementById("Derecha");
let Izquierda=document.getElementById("Izquierda");
let Detener=document.getElementById("Detener");
let Mensaje=document.getElementById("Mensaje");

function CallApi(estatus)
{
    // Hacer una petición para un usuario con ID especifico
    axios.get('http://13.42.50.150/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+estatus)
    .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
    Mensaje.innerHTML="Respuesta: <strong>"+response.data+"</strong>";
    })
    .catch(function (error) {
    // manejar error
    console.log(error);
    })
    .finally(function () {
    // siempre sera executado
    });
}

Adelante.addEventListener("click",function(){
    CallApi('w');
});

Atras.addEventListener("click",function(){
    CallApi('s');
});

Derecha.addEventListener("click",function(){
    CallApi('d');
});

Izquierda.addEventListener("click",function(){
    CallApi('a');
});

Detener.addEventListener("click",function(){
    CallApi('P');
});
