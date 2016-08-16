$(function(){
  var answerArray = [];
  var hiddenArray = [];

  $("#answerButton").click(function(event){
    event.preventDefault();
    $("#answer").hide();
    var answer = $("#answerInput").val().toUpperCase();
    answerArray = answer.split("");
    $("#guess").show();
    hiddenArray = answerArray.map(function(){
      return " _ ";
    })
    console.log(hiddenArray);
    hiddenArray.forEach(function(letter){
      $("#hiddenWord").append(letter);
    }); //hide answer
  }); //end submit click

  var guessedLetters = [];
  var correct = false;

  $("#guessButton").click(function(event){
    event.preventDefault();
    $(".red").html("");
    var guessInput = $("#guessInput").val().toUpperCase();



    if(guessedLetters.indexOf(guessInput) === -1){
      for(var i = 0; i < answerArray.length; i++){
        if(answerArray[i] ===guessInput){
          hiddenArray[i] = " " + guessInput + " ";
          correct = true;
        }
      }
      if (correct === true) {
        $("#hiddenWord").text("");
        hiddenArray.forEach(function(letter){
          $("#hiddenWord").append(letter);
        });
      } else {
        $(".red").html("WRONG. Try again!")
      }
      guessedLetters.push(guessInput);
      if(guessedLetters.length >= 15){
        alert("haha. you suck.");
        $("#playingField").hide();
        $("#playAgain").show();
        $("body").addClass("lose");
      }
      $("#guessedLetters").append(guessInput + " ");

      if (hiddenArray.indexOf(" _ ") === -1) {
        alert("yay. you guessed correctly!");
        $("#playingField").hide();
        $("#playAgain").show();
      }

    }
    else{
      $(".red").html("You already guessed that letter, dipshit");
    }


    correct = false;
    $("#guessInput").val("");
  });
});
