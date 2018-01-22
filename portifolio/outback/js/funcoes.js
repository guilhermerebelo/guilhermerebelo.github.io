// ancora menu hamburguer
$(".link-menu-hambuguer").click(function(){
	setTimeout(function(){
		$("#div-menu").css("left","100%");
	},550)
});


//scroll suave
var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

//abrir menu hamburguer
$("#hamburguer-btn").click(function(){
	$("#div-menu").css("left","0");
});
$("#fechar-menu").click(function(){
	$("#div-menu").css("left","100%");
});

//inicar mapa
function myMap() {
    var mapProp= {
    	center:new google.maps.LatLng(-28.681475,-49.354339),
    	zoom:18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
};

// efeito input
$(".form-control:eq(0)").focus(function(){
   $("#label1").fadeOut(); 
}); 

$(".form-control:eq(1)").focus(function(){
   $("#label2").fadeOut(); 
}); 

$(".form-control:eq(2)").focus(function(){
   $("#label3").fadeOut(); 
}); 

$(".form-control:eq(3)").focus(function(){
   $("#label4").fadeOut(); 
}); 