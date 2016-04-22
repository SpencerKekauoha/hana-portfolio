angular.module("hanaApp").directive("changeCssDirective", function(){

  return  {
    restrict: "A",
    link: function (scope, element, attribute) {

        $('.directive-btn').on('click', function(){
          $("body").css("background-color", "rgb(255, 45, 190)")
          $(".nav-link").css("color", "rgb(165, 245, 0)")
          $(".landing-name").html("Nick Cage Rulez!")
          $(".landing-name").css("color", "rgb(23, 252, 59)")
          $(".landing-name").css("font-size", "15vh")
          $("#nick1").attr("src", 'http://i.giphy.com/CiTLZWskt7Fu.gif')
          $("#nick2").attr("src", 'http://cdn.hexjam.com/editorial_service/bases/images/000/004/282/xlarge/nicolascageonthings27.png.jpg?1404144859')
          $("#nick3").attr("src", 'https://s-media-cache-ak0.pinimg.com/736x/ca/98/19/ca9819896259889544affcd632afe5a1.jpg')
          $("#nick4").attr("src", 'http://i.imgur.com/jkMsQX1.gif')
          $("#nick5").attr("src", 'http://i.giphy.com/9hqsyNVlf0DOU.gif')
          $(".profile-pic").attr("src", "https://theworldaccordingtoalice.files.wordpress.com/2012/07/nic-cage-cat.png")
          $(".about-container").html("Hi, my name is Nick Cage and I put my heart and soul into each film I do!")
          $(".burger-nav").css("background-color", "rgb(255, 45, 190)")
        })

        $('.landing-name').on('click', function(){
          $('.landing-name').css('color', 'black')
        })

        $("directive-btn").on("click", function(){

        })




    }
  }

});
