$('document').ready(function(){


            $('#showcase').bubble().each({
            size: [100, 420],
            blowTime: [1, 1],
            autoStop: 0,
            interval: 0,
        });

        $('.animate').scrolla();


        $(".dropdown-menu").hover(function(){
            $(this).animate({left:'10px'});
        });
        $(function() {
            AOS.init();
          });
          $(window).on('load', function() {
            AOS.refresh();
          });

});