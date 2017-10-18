//click
//fade
//keypress
//on

var button = document.getElementById("clickable");

var button2 = $("#clickable2");

button.click(function() {
  $(".fade").fadeToggle("slow", "linear");
});

button2.keypress(function() {
  $(".slide").slideToggle("slow", "linear");
});

//Recommended way
$(".clickable3").on( "click",function() {
  $(".fade").fadeToggle("slow", "linear");
});

document.getElementsByClass("clickable4").on( "keypress",function() {
  $(".slide").slideToggle("slow", "linear");
});
