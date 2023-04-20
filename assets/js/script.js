var block;
var task; 

// color codes hour blocks to past present and future
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

// loades saved events from local storage to appropriate textarea
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

// saves text from textarea to local storage on save button click
function handleSave(event) {
  var text = $(event.target).parent().children('textarea').val();
  var eventHour = $(event.target).parent().children('textarea').attr('id');
  localStorage.setItem(eventHour, JSON.stringify(text));
}

$(function() {
  hourColors();
  loadData();
});

// loads current date to top of page
var date = dayjs();
$('#currentDay').text(date.format('dddd, MMMM D'));

// calls handleSave function on click
$('.saveBtn').on('click', handleSave);