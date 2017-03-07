var factorial = function(integer) {

  if (integer === 1 || integer === 0) {
    return 1;
  }
  for (var i = integer - 1; i >= 1; i--) {
    integer *= i;
  }
  return integer;
}


$(function() {
  $("form").submit(function(event) {

    var integer = parseInt($("#input").val());
    var output  = factorial(integer);

    $("#output").text(output);




    console.log(integer);

    event.preventDefault()
  });
});
