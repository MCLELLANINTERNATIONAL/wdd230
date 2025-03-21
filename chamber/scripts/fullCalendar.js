const fullCalendarScript = document.createElement('script');
  fullCalendarScript.src = "https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/5.11.3/main.min.js";

  fullCalendarScript.onload = function () {
    document.addEventListener('DOMContentLoaded', function () {
      const calendarEl = document.getElementById('calendar');

      if (!calendarEl) {
        console.error("Calendar element not found!");
        return;
      }

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        navLinks: true,
        editable: false,
        selectable: false,
        dayMaxEvents: true,

        // Fires when the calendar view changes (e.g., navigating months)
        datesSet: function (info) {
          console.log("View changed to:", info.view.type);
          console.log("Visible date range:", info.startStr, "to", info.endStr);
          alert(`You navigated to view starting: ${info.startStr}`);
        },

        // Fires when a specific date is clicked
        dateClick: function (info) {
          console.log("Date clicked:", info.dateStr);
          alert(`You clicked on date: ${info.dateStr}`);
        }
      });

      calendar.render();
    });
  };

  fullCalendarScript.onerror = function () {
    console.error("Failed to load FullCalendar script.");
  };

  document.head.appendChild(fullCalendarScript);
