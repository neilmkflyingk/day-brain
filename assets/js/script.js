
function hourColors() {
  var now = dayjs();

  for (var i = 9; i < 18; i++) {
    if (i < now.hour()){
      $('#hour-' + i + ' textarea').addClass('past');
    } else if (i > now.hour()) {
      $('#hour-' + i + ' textarea').addClass('future');
    } else {
      $('#hour-' + i + ' textarea').addClass('present');
    }
  }
}

function loadData() {

}

function handleSave() {
  var save = $(event.target);
}

$(function() {
  //loadData();
  hourColors();
});

$('.saveBtn').on('click', handleSave);