$(function() {
  $("#submit").click(function(event) {
    var num = parseInt($('#number').val());
    var allNumbers = [];


    for(var i = 2; i<=num; i++){
      allNumbers.push(i);
    }

    for (var p = 2; p <num; p++){
      if(allNumbers.indexOf(p) >= 0){
        for (var j=0; j<allNumbers.length; j++) {
          for (var i= p; i<=num; i+= p ){
            if (allNumbers[j] === i && i > p) {
              allNumbers.splice(j, 1);
            }
          }
        }
      }
    }
    for (var i = 0; i<allNumbers.length; i++ ){
      $("#results").append(allNumbers[i]+" ");
    }
    event.preventDefault();
  });
});
