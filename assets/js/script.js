var savedData;

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
  savedData = JSON.parse(localStorage.getItem('scheduleEvents'));
  if (!savedData) {
    savedData = {
      hour9: '',
      hour10: '',
      hour11: '',
      hour12: '',
      hour13: '',
      hour14: '',
      hour15: '',
      hour16: '',
      hour17: '',
    };
  }
}

function handleSave(event) {
  var hourRow = $(event.target).parent();
  var text = hourRow.children('textarea').val();
  var hour = hourRow.attr('id').split('-')[1];
  savedData['hour' + hour] = value;
  localStorage.setItem('scheduleEvents', JSON.stringify(savedData));
}

$(function() {
  loadData();
  hourColors();
});

$('.saveBtn').on('click', handleSave);