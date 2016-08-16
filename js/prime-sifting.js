
function primeNumber(number, array) {
  for (var p = 2; p <number; p++){
    if(array.indexOf(p) >= 0){
      for (var j=0; j<array.length; j++) {
        for (var i= p; i<=number; i+= p ){
          if (array[j] === i && i > p) {
            array.splice(j, 1);
          }
        }
      }
    }
  }
}


$(function() {
  $("#submit").click(function(event) {
    var num = parseInt($('#number').val());
    var allNumbers = [];
    for(var i = 2; i<=num; i++){
      allNumbers.push(i);
    }
    primeNumber(num, allNumbers);

    for (var i = 0; i<allNumbers.length; i++ ){
      $("#results").append(allNumbers[i]+" ");
    }
    event.preventDefault();
  });
});
