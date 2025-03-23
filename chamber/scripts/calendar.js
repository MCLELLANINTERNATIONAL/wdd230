document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  if (!calendarEl) {
    console.error("Calendar element not found!");
    return;
  }

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prevYear,prev,next,nextYear today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    navLinks: true,
    editable: false,
    selectable: false,
    dayMaxEvents: true,

    datesSet: function (info) {
      console.log("Changed to view:", info.view.type);
      console.log("Date range:", info.startStr, "-", info.endStr);
    },

    dateClick: function (info) {
      alert(`You clicked on date: ${info.dateStr}`);
    }
  });

  calendar.render();
});
