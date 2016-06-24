jQuery(document).ready(function($) {

  $(".answer").hide();

  $('.popular-questions').on('click', function(e){
    e.preventDefault();
    $(this).next('p').toggle();
  });

  $('.about-questions').on('click', function(e){
    e.preventDefault();
    $(this).next('p').toggle();
  });

  $('.shipping-questions').on('click', function(e){
    e.preventDefault();
    $(this).next('p').toggle();
  });


});
