$(function(){
  $('#positive').hide();
  $('#negative').hide();

  $("#textButton").click(function(){
    $('#positive').hide();
    $('#negative').hide();
    var textInput = $("#textInput").val();
    var forwardText = textInput.split(" ").join("");
    console.log(forwardText);
    var reverseText = textInput.split(" ").join("").split("").reverse().join("");
    console.log(reverseText);



    // .reverse().join("");
    if (forwardText === reverseText) {
      $('#positive').show();
    } else {
      $('#negative').show();
    }

  })

})
