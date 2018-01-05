 $(function() {
      //$('#menuSuspenso').hide();

      $(window).scroll(function(){
        if($(this).scrollTop() > 400) {
          $('#menuSuspenso').css("top","0px");
      } else{
        $('#menuSuspenso').css("top","-100px");
      }
    });
});