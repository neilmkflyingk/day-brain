var block;
var task; 



function hourColors() {
  var now = dayjs();
  for (let i = 9; i < 18; i++) {
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
  for (var i = 9; i < 18; i++) {
    block = document.getElementById(' ' + i);
    task = JSON.parse(localStorage.getItem(' ' + i));
    if (!task) {
      block.textContent = " "
    } else {
      block.textContent = task
    }
  }
}

function handleSave(event) {
  var text = $(event.target).parent().children('textarea').val();
  var eventHour = $(event.target).parent().children('textarea').attr('id');
  localStorage.setItem(eventHour, JSON.stringify(text));
}

$(function() {
  hourColors();
  loadData();
});

$('.saveBtn').on('click', handleSave);