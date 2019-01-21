var answer = 1;
function factorial(n){
  if(n < 1){
    return 1;
  }else{
    return n * factorial(n-1);
  }
}


$(document).ready(function() {

  $("#formOne").submit(function(event){
    var theNumber = parseInt($("input#number").val());
// =================NON RECURSIVE========================

    // for(var i=1; i<=theNumber; i++){
    //   answer *= i;
    // }
// ==================RECURSIVE====================================
  for(var i=1; i<=theNumber; i++){

    answer = factorial(theNumber);

  }
    $("#toggleNumber").show();
    $("#showAnswer").text(answer);







  event.preventDefault();
  });

});
