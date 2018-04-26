var current = 1;
$(document).ready(function () {

  $('button').click(function () {
    var floor = parseInt($(this).text());
    $('#floor').text(floor);
    if (current > floor) {
      current = floor;
      $('#down').show();
      $('#up').hide();
    }
    else if (current < floor) {
      current = floor;
      $('#up').show();
      $('#down').hide();
    }
  });
});
