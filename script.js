// Code goes here
$(document).ready(function(){
    $("#main-content").load("home.html");

    $("#about-nav-item").click(function(){
        $("#main-content").load("about.html");
      });

    $("#contact-nav-item").click(function(){
       $("#main-content").load("contact.html");
   });

   $(".navbar-brand").click(function(){
    $("#main-content").load("home.html");
});
   

 });