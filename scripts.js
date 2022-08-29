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








 var swiper = new Swiper(".swipe-js", {
   effect: 'fade',
   fadeEffect: {
     crossFade: true
   },
 });