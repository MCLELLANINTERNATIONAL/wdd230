
const fullCalendarScript = document.createElement('script');
fullCalendarScript.src = "https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/5.11.3/main.min.js";
fullCalendarScript.onload = function() {
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        if (!calendarEl) {
            console.error("Calendar element not found!");
            return;
        }
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            navLinks: true, // Allows clicking day/week names to navigate views
            editable: false, // Disables event booking
            selectable: false, // Prevents selecting days for events
            dayMaxEvents: true // Allows "more" link when too many events
        });
        calendar.render();
    });
};
document.head.appendChild(fullCalendarScript);


