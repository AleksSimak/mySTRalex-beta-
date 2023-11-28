$(document).ready(function(){
    $("html,body").scrollTop(0);
    $('.menu_bth').click(function () { 
        if(!$('nav').hasClass('.open_menu_active'))
        {
            $('nav').addClass('.open_menu_active');
            $('nav').css({transform: 'translateX(70px)'});
            
        }
        else
        {
            $('nav').removeClass('.open_menu_active');
            $('nav').css({transform: 'translateX(-310px)'});
        }
    });
    $('.menu_bth').click(function() {
        /*$('.line').toggleClass('open_bth');
        $('.line').css('background-color','#fff');*/


        if(!$('span').hasClass('open_bth'))
        {
            $('span').addClass('open_bth');
            $('.line').css('background-color','#fff');
        }
        else
        {
            $('span').removeClass('open_bth');
            $('.line').css('background-color','#000');
        }
    });
});




$('.buttoms').ready(function(){
    var that = '.buttoms';
    setTimeout( function(){
        $('.buttoms').css({transform: 'translateX(0px)'});
    },0);
    /*$('.buttoms').fadeIn(500);*/
    $('.buttoms').css('display','block');
    $('#par').css({transform: 'translateX(0px)'},200);
});

/*$('.bcard').ready(function(){
    var that = '.bcard';
    setTimeout( function(){
        $('.bcard').css({transform: 'translateX(0px)'});
    },0);
    $('.bcard').css('display','block');
    $('#par').css({transform: 'translateX(0px)'},200);
});*/

$( window ).on( "scroll", function() {
    $( '.bcard' ).css( "display", "block" );
    $('.bcard').css({transform: 'translateX(0px)'});
});



$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    waitForAnimate:false,
});
  
$('[data-go]').on('click', function() {
    $('body').css('overflow','hidden');
    $(".whitelist").css('display','block');
    $(".whitelist").css('position','fixed');
    const __this = $(this);
    let index = __this.attr('data-go');
    $('.slider-for').slick('slickGoTo', parseInt(index));
    
});
$('.popexit').click(function(){
    $('body').css('overflow','auto');
    $(".whitelist").css('position','relative');
    $(".whitelist").css('display','none');
    return false;
});
/*$(document).ready(function(){
    $('.bcard').click(function(){
		$("#"+$(this).attr('obj')).css('display','block');
        $("#"+$(this).attr('obj')).css('position','fixed');
        $('body').css('overflow','hidden');
        return false;
        
    });
    $('.popexit').click(function(){
        $('body').css('overflow','auto');
		$(".whitelist").css('position','relative');
		$(".whitelist").css('display','none');
    	return false;
    });
});*/
