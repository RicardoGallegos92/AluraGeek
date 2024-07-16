$(document).ready(function() {
    const btnAgregar = document.getElementsByClassName("btnAgregar");
    const btnLimpiar = document.getElementsByClassName("btnLimpiar");

    function borrarItemSeleccionado() {
        $(this).parent().parent().remove();
    }

    function agregarItemNuevo(nuevoItem) {
        if(nuevoItem)
        {
            $("#tarjetas").append(nuevoItem);
            return;
        }
        alert("llene todos los datos solicitados");
    }
// Dar formato tarjeta para HTML
    function crearCardNueva() {
        let cardNombre = $("#cardNombreNuevo").val();
        let cardPrecio = $("#cardPrecioNuevo").val();
        let cardImgURL = $("#cardImagenNuevo").val();
        if (cardNombre && cardPrecio && cardImgURL){
            let CARD_NUEVA =`<div class="card"><img class="card-img" src="${cardImgURL}" alt=""><h6 class="card-name">${cardNombre}</h6><div class="card-info"><i class="fa-solid fa-dollar-sign"></i><p class="precio">${cardPrecio}</p><i class="fa-regular fa-trash-can delete"></i></div></div>`;
            return CARD_NUEVA;
        }
        return false;
    }
// Agregar nuevo elemento
    $(btnAgregar).on("click", function() {
        console.log("Agregar");
        agregarItemNuevo(crearCardNueva());
// Agregamos funcion de borrado al ícono de basura
        $(".delete").bind("click", borrarItemSeleccionado);
    });
// Limpiar Formulario
    $(btnLimpiar).on("click", function() {
        $("#cardNombreNuevo").val('');
        $("#cardPrecioNuevo").val('');
        $("#cardImagenNuevo").val('');
    });

});