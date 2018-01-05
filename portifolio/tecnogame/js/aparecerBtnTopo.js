 $(function() {
      $('#subir').hide();

      $(window).scroll(function(){
        if($(this).scrollTop() > 500) {
          $('#subir').fadeIn();
      } else{
        $('#subir').fadeOut();
      }
    });

      $('#subir').click(function(){
        $('html, body').animate({
          scrollTop: 0
        },700);
      });

    });