var userClickedPattern = [];

var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var level = 0;
var started = false;
click = 0;

$(document).keydown(function() {
  if (!started) {
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  level++;

  $("#level-title").text("level " + level);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);



}

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  animate(userChosenColor);
  playSound(userChosenColor);

  checkAnswer(userChosenColor);



})

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animate(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentAnswer) {

  for (var i = 0; i < userClickedPattern.length; i++) {

    if (userClickedPattern[i] === gamePattern[i]) {
    }
    else {
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      started = false;
      $("#level-title").text("GAME OVER!!! Enter another key to start again")
      $("body").css("background-color","red");
      setTimeout(function () {
        $("body").css("background-color","#011F3F");
      }, 200);
      level=0;
      userClickedPattern =[];
      gamePattern=[];
    }
  }



  if (i === level) {


    userClickedPattern = [];

    setTimeout(function() {
      nextSequence();
    }, 600);
  }


}
