$(document).ready(function(){

  function boldToggle(){
        $(this).toggleClass('boldToggle');
  }

  $('#mainmenu').on('mouseenter', 'a', boldToggle);
  $('#mainmenu').on('mouseleave', 'a', boldToggle);

});
