  function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
   }
   document.getElementById(cityName).style.display = "block";
 }

 $(document).ready(function(){

   $(document).ready(function(){
    if($('*').is('.sticky_fixed')){
      var goodMain = $('.sticky_fixed').offset().top,
      goodMainHeight = $('.sticky_fixed').height(),
      totalGood = goodMain + goodMainHeight,
      body = $('body').height(),
      totalResut = body - totalGood;
      $(".sticky_fixed").sticky({
        topSpacing:20, 
        bottomSpacing: totalResut,
      });
    }
  });

   $(document).ready(function(){
    $('.tablinks:first').addClass('btn-active');
    $('.tablinks').click(function(){
      $('.tablinks').removeClass('btn-active');
      $(this).addClass('btn-active');
    });
  });

  //SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  $(document).ready(function(){
    $('.open-popup-link').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      fixedContentPos : true,
      overflowY: 'true',
      closeBtnInside: true,
      midClick: true,
      removalDelay: 0,
    });
  });

  $(document).ready(function(){
    $('div.spoiler_links').click(function(){
      $(this).parent().children('div.spoiler_body').toggle('show');
      return false;
    });
  });

  /*$(document).ready(function(){
   var rotateValue = 0;
   $('div.spoiler_links').rotate({
    bind:{
      click: function(){
        rotateValue +=180;
        $(this).find("svg").rotate({
          duration: 0,
          animateTo: rotateValue
        })
      }
    }
  });
}); */

$(document).ready(function(){
  $('.rating').hover(
    function(){
      $(this).find('.current').css({
        'background' : 'none',
      })
    },
    function(){
      $(this).find('.current').css({
        'background': 'url(../img/spritesheet.png) 0 -13px',
      })
    }
    )
});

/* Слайдер на главной странице */
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items: 1,
  dots: false,
  navText : ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>','<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>'],
});

  /* Ползунки стоимости
     http://jqueryui.com/slider/#range
     */
     $( function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );


     $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = "blind";

      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }

      // Run the effect
      $('.itemRightBlock-Content', this).toggle( selectedEffect, options, 500 );
    };

    // Set effect from select menu value
    $( ".hideSection" ).on( "click", function() {
      runEffect();
    });
  } );


/*var slideout = new Slideout({
  'panel': document.getElementById('main_main'),
  'menu': document.getElementById('menu_menu'),
  'padding': 256,
  'tolerance': 70
});

document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
  slideout.toggle();
});

 var fixed = document.querySelector('.fixed-header');

 slideout.on('translate', function(translated) {
  fixed.style.transform = 'translateX(' + translated + 'px)';
});

 slideout.on('beforeopen', function () {
  fixed.style.transition = 'transform 300ms ease';
  fixed.style.transform = 'translateX(256px)';
});

 slideout.on('beforeclose', function () {
  fixed.style.transition = 'transform 300ms ease';
  fixed.style.transform = 'translateX(0px)';
});

 slideout.on('open', function () {
  fixed.style.transition = '';
});

 slideout.on('close', function () {
  fixed.style.transition = '';
});
*/

jQuery.validator.addMethod("matches", function(value, element) {
  return this.optional(element) || /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value);
}); 
var required = 'Поле обязательно к заполнению';

$('#delivery_form').validate({
  rules: {
    name: {
      required: true,
      minlength: 2
    },
    lastName: {
      required: true,
      minlength: 2
    },
    phoneNumber: {
      required: true,
      matches: true,
      minlength:10,
    },
    organizationINN : {
     required: true,
     minlength:10,
    },
    email : {
      required: true,
    },
    organizationBank:{
      required: true,
    },
    organizationPC:{
      required: true,
    },
    organizationKC:{
      required: true,
    },
    organizationBIK:{
      required: true,
    },
    organizationKPP : {
      required: true,
    },
    organizationUrAddress : {
       required: true,
    },
    organizationPhisAddress : {
      required: true,
    },
  },
  messages: {
    name: {
      required: required,
      minlength: "Введите не менее 2-х символов в поле 'Имя'"
    },
    lastName: {
      required: required,
      minlength: "Введите не менее 2-х символов в поле 'Фамилия'"
    },
    email: {
      required: required,
      email: "Необходим формат адреса email"  
    },
    phoneNumber: {
      required : required,
      minlength: "Введите телефон в верном формате",
    },
    organizationName:{
      required : required,
    },
    organizationUrAddress : {
      required : required,
    },
    organizationPhisAddress: {
      required : required,
    },
    organizationINN: {
      required : required,
      minlength: "Проверьте количество цифр"
    },
    organizationKPP : {
      required: required
    },
    organizationBank:{
      required: required
    },
    organizationPC:{
      required: required
    },
    organizationKC:{
      required: required
    },
    organizationBIK:{
      required: required
    },
  }
});

$(".anotherPhoto").on("click", "a", function () {
 $(this).parent().addClass("activePhoto").siblings().removeClass("activePhoto")
 $(".mainPhoto img").attr("src", $(this).prop("href"))
 return false;
})

$(function(){
  var addChevron = '<svg class="c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"> <path  d="M 28.28125 6.28125 L 11 23.5625 L 3.71875 16.28125 L 2.28125 17.71875 L 10.28125 25.71875 L 11 26.40625 L 11.71875 25.71875 L 29.71875 7.71875 L 28.28125 6.28125 z"24" overflow="visible" font-family="Bitstream Vera Sans"/> </svg>'
  $(".addButton").click(function(){
    $(this).text('Товар в корзине').addClass("btn-cheked").css("background" , "#25AF79");
    $(this).append(addChevron);
  })
});

});



