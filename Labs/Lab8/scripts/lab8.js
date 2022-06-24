$(document).ready(function( ) {
  // a
  $("h1").text("lab8")
  // b
  $("#header").html("<h3>Working with jQuery</h3>")
  // c
  $("input[type='button']").addClass("btn-background");
  // d
  $("#buttons").addClass("red-border");
  // e
  $("p").addClass("blue");
  // f
  $("#first").on("click", function(){
      $("#paragraphs p:first").addClass("green-border");
  });
  // g
  $("#last").on("click", function(){
      $("#paragraphs p:last").addClass("orange-border");
  });
  // h
  $("#prev").on("click", function(){
      $("#para3").prev().addClass("purple-border");
  });
  // i
  $("#next").on("click", function(){
      $("#para2").next().addClass("yellow-border");
  });
  // j
  $("#remove").on("click", function(){
      $("#footer").remove();
  });
});
