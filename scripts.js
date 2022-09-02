 var swiper = new Swiper(".hero-js", {
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
 });
 var swiper = new Swiper(".product-js", {
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });




 $('#stars li').on('mouseover', function () {
   var onStar = parseInt($(this).data('value'), 10);


   $(this).parent().children('li.star').each(function (e) {
     if (e < onStar) {
       $(this).addClass('hover');
     } else {
       $(this).removeClass('hover');
     }
   });

 }).on('mouseout', function () {
   $(this).parent().children('li.star').each(function (e) {
     $(this).removeClass('hover');
   });
 });



 $('#stars li').on('click', function () {
   var onStar = parseInt($(this).data('value'), 10);
   var stars = $(this).parent().children('li.star');

   for (i = 0; i < stars.length; i++) {
     $(stars[i]).removeClass('selected');
   }

   for (i = 0; i < onStar; i++) {
     $(stars[i]).addClass('selected');
   }



 });

 $(document).ready(function () {

   $(document).on('click', '.count .count-plus', function () {
     $(this).prev().find('.counter').val(+$(this).prev().find('.counter').val() + 1);
   });
   $(document).on('click', '.count .count-minus', function () {
     if ($(this).next().find('.counter').val() <= 0) {
       $(this).next().find('.counter').val(+$(this).next().find('.counter').val() - 1);
     } else if ($(this).next().find('.counter').val() >= 2) {
       $(this).next().find('.counter').val(+$(this).next().find('.counter').val() - 1);
     }
   });
 });








 var swipe = new Swiper(".swipe-js", {
   effect: 'fade',
   fadeEffect: {
     crossFade: true
   },
 });


 swipe.on('slideChange', function () {
   $('.swipe__item-control').removeClass('slide waiting');
   $('.swipe__item-recipe').hide();
   $('.swipe__desc').removeClass('hide');
 });


 $(document).ready(function () {

   (function ($) {
     $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

     $('.tab ul.tabs li a').click(function (g) {
       var tab = $(this).closest('.tab'),
         index = $(this).closest('li').index();

       tab.find('ul.tabs > li').removeClass('current');
       $(this).closest('li').addClass('current');

       tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
       tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

       g.preventDefault();
     });
   })(jQuery);

 });




 $('.dropdown-js').on('click', function () {
   $(this).parent().parent().parent().find('.marathon__table-item-dropdown').toggleClass('open');
   $(this).toggleClass('open');
 });



 var rangeSlider = function () {
   var slider = $('.range-slider'),
     range = $('.range-slider__range'),
     value = $('.range-slider__value');
   content = $('.range-slider__content');
   slider.each(function () {

     value.each(function () {
       var value = $(this).prev().attr('value');
       $(this).html(value);
     });
     range.on('input', function () {
       $(this).next(value).html(this.value);
       if (this.value == 1) {
         $(this).next().next().html('Низкое');
       } else if (this.value == 2) {
         $(this).next().next().html('Ниже среднего');
       } else if (this.value == 3) {
         $(this).next().next().html('Cреднее');
       } else if (this.value == 4) {
         $(this).next().next().html('Выше среднего');
       } else if (this.value == 5) {
         $(this).next().next().html('Высокое');
       }
     });
   });
 };

 rangeSlider();

 $('.header__filter').on('click', function () {
   $('.filter').toggleClass('open');
   $('body').toggleClass('no-scroll');
 });

 jQuery(function ($) {
   $(document).mouseup(function (e) {
     var div = $(".filter, .header__filter");
     if (!div.is(e.target) &&
       div.has(e.target).length === 0) {
       $('.filter').removeClass('open');
       $('body').removeClass('no-scroll');
     }
   });
 });




 $('.swipe__desc').on('swipeup', function () {
   $(this).parent().find('.swipe__item-control').addClass('slide');
   $(this).addClass('hide');
 });
 $('.swipe__item-control').on('swipedown', function () {
   $('.swipe__item-control').removeClass('slide waiting');
   $('.swipe__desc').removeClass('hide');
   $('.swipe__item-recipe').hide();
 });



 $('.recipe-js').on('click', function (e) {
   e.preventDefault();
   $(this).parent().parent().parent().find('.swipe__item-recipe').show();
   $(this).parent().addClass('waiting');
   $(this).css('pointer-event', 'none');
   setTimeout(function () {
     $('.swipe__item-control').removeClass('slide');
     $('html, body').animate({
       scrollTop: '+=280px'
     }, 800);
   }, 300);
 });



 let vh = window.innerHeight * 0.01;
 document.documentElement.style.setProperty('--vh', `${vh}px`);




 $(window).scroll(function () {
   var scroll = $(window).scrollTop();
   if (scroll >= 100) {

   }
 });




 $('.more-js').on('click', function () {
  $('.menu').toggleClass('open');
 });


 $('.header__back').on('click', function () {
  $('.menu').removeClass('open');
 });