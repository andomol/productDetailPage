$(function() {
 
    var btn_movil = $("#nav-mobile"),
    menu = $("#menu").find("ul");
 
    // Al dar click agregar/quitar clases que permiten el despliegue del menú
    btn_movil.on("click", function (e) {
        e.preventDefault();
 
        var el = $(this);
 
        el.toggleClass("nav-active");
        menu.toggleClass("open-menu");
    });



	$(".radiogroup").change(function(e){
	    var selectedValue = $(this).val();
	    $("#selected-label").text(selectedValue)
	});



});