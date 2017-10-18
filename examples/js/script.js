var button = document.getElementById("clickable");

$("#clickable").click(function() {
  $(".fade").fadeToggle("slow", "linear");
});

$(document).keyup(function(event) {
  if(event.keyCode == 68 || event.keyCode == 117) //Play around with your keys to see what keys activate the slide
    $(".slide").slideUp("slow");
  if(event.keyCode == 85 || event.keyCode == 100)
    $(".slide").slideDown("slow");
});

$(document).keypress(function(event) {
  document.getElementById("play").innerHTML += "<BR>You have pressed key "+ event.key;
});

//Recommended way
$(".clickable2").on( "click" ,function() {
  $(".fade").fadeToggle("slow", "linear");
});

$( "div.test" ).on({
  click: function() {
    $( this ).toggleClass( "active" );
  }, mouseenter: function() {
    $( this ).addClass( "inside" );
  }, mouseleave: function() {
    $( this ).removeClass( "inside" );
  }
});
