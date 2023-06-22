document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var taskName = document.getElementById('taskName').value;
    var taskDescription = document.getElementById('taskDescription').value;
    var employee = document.getElementById('employee').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var taskType = document.getElementById('taskType').value;
    var product = document.getElementById('product').value;
    var quantity = document.getElementById('quantity').value;
  
    var taskListItem = document.createElement('li');
    taskListItem.innerHTML = 'Zadanie: ' + taskName + '<br>' +
                              'Typ Zadania: ' + taskType + '<br>' +
                              'Opis Zadania: ' + taskDescription + '<br>' +
                              'Od: ' + startDate + ' do: ' + endDate + '<br>' +
                              'Co produkować: ' + product + ', Ilość produkcji: ' + quantity;
  
    document.getElementById('taskList').appendChild(taskListItem);
  
    // Clear form fields
    document.getElementById('taskName').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('employee').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
    document.getElementById('taskType').value = '';
    document.getElementById('product').value = '';
    document.getElementById('quantity').value = '';
  });
  
  // Kalendarz
  var calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: []
  });
  calendar.render();
  