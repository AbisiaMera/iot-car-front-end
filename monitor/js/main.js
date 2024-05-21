//alert("Hola mundo");

let Respuesta=document.getElementById("Respuesta");

function CallApiRequest()
{
    // Hacer una petición para un usuario con ID especifico
    axios.get('http://3.10.51.179/iot-car-control/back-end/apis/getRegistro.php?valorEstatus=')
    .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);

    let RespuestaServer = 
    response.data == "w"?"Adelante":
    response.data == "s"?"Atras":
    response.data == "d"?"Derecha":
    response.data == "a"?"Izquierda":
    "Detener";

    Respuesta.innerHTML="Respuesta: <strong>"+RespuestaServer+"</strong>";
    })
    .catch(function (error) {
    // manejar error
    console.log(error);
    })
    .finally(function () {
    // siempre sera executado
    });
}

setInterval(CallApiRequest, 2000);
