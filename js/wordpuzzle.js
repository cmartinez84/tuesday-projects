$(function(){
  $("#buttonHide").click(function(){
    var inputSentence = $("#inputSentence").val();
    var vowels = ["a", "e", "i", "o","u"];
    var inputArray = inputSentence.split("");

    for(var i =0; i<vowels.length; i++){
      for(var x=0; x<inputArray.length; x++){
        if(inputArray[x] === vowels[i]){
          inputArray[x] = "-";
        }
      }
    }
    var outputSentence = inputArray.join("");
    $("#outputSentence").val(outputSentence);
    $("#inputSentence").hide();
    $("#outputSentence").show();
  });

  $("#buttonShow").click(function(){
    $("#inputSentence").show();
    $("#outputSentence").hide();
  })
})
