$(document).ready(function(){
    //OPEN NAV
    $('#menuToggle').click(function(){
        $("#navMenu").toggleClass('show-menu');
    });
      //accordion
  $('.accordion-one').click(function(){
    $('.panel-one').slideToggle('500');
  });
   //accordion
   $('.accordion-two').click(function(){
    $('.panel-two').slideToggle('500');
  });
});