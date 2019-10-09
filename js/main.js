$(document).ready(function (){
    //Cambio estilo barra nav
    $(window).on("scroll", function(){
        var positionParagraph = $("#primera").offset();
        var positionDocument =$(window).scrollTop();
        // console.log(position.top);
        if (positionDocument > positionParagraph.top -60) {
            $('nav').removeClass('white');
            $('.burger').removeClass('white');
        } else {
            $('nav').addClass('white')
            $('.burger').addClass('white')
        }
    })
    // Menu lateral
    $('.burger').click(function(){
        $('.burger').toggleClass('open');
        $('aside').toggleClass('open');
    });
    // Resize para cerrar menu en cambio de tamaño viewport
    $(window).on('resize', function(){
        $('.burger').removeClass('open');
        $('aside').removeClass('open');  
    })
})