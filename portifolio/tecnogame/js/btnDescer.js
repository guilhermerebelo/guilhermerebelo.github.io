    var img = $("#subir-descer");
      //img.css("bottom", "80px");

      setInterval(function(){
        if ( img.css("bottom") == "80px" ) {
           img.css("bottom", "55px");
        } else{
          img.css("bottom", "80px");
        }
      },900);
      //50 ou 80 