$(function(){
  var inputSentence;

  $("#buttonHide").click(function(){
    inputSentence = $("#inputSentence").val();
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

    $("#inputSentence").val(outputSentence);
    $("#outputSentence").val(outputSentence);
    $("#input").hide();
    $("#output").show();
  });

  $("#buttonShow").click(function(){
    $("#inputSentence").val(inputSentence);
    $("#input").show();
    $("#output").hide();
  })
})
