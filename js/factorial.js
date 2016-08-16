$(function() {
  $("#submit").click(function() {
    var number = parseInt($('#number').val());
    var total = 1;
    //
    // for (var i = number; i > 0; i--) {
    //   total *= i;
    // }
    // $('#result').text(total);


    function factorial(number) {
      if(number > 0){
        total = number * total;
        number = (number -1);
        factorial(number);
      }
      $("#result").text(total);
    }
    factorial(number);
     //end recursive function

  });



});
