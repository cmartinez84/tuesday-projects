$(function(){

  $('#submit').click(function() {
    var num1 = parseInt($('#number1').val());
    var num2 = parseInt($('#number2').val());
    // var result = "";
    if((num1 && num2) && ($.isNumeric(num1) && $.isNumeric(num2)) && ((num1 >0) && (num2> num1))){
    for(var i=num1; i<=num2; i+=num1) {
      // results += i+ ", "
      $('#results').append(i);
      if(num2-i <= num1){

      }
      else{
        $("#results").append(", ");
      }
    }
  } //end if
  else{
    alert("Enter two number! Empty inputs will not be tolerated!");
  }

  });



})
