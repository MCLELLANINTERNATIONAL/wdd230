document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const currentDay = date.getDate();
  
    // Month names array
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
  
    // Create calendar header
    const header = document.createElement('div');
    header.className = 'calendar-header';
    header.innerHTML = `${monthNames[currentMonth]} ${currentYear}`;  // Fix template literal syntax
    calendar.appendChild(header);
  
    // Create weekday headers
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekdayHeader = document.createElement('div');
    weekdayHeader.className = 'weekdays';
    weekdays.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'weekday';
        dayElement.textContent = day;
        weekdayHeader.appendChild(dayElement);
    });
    calendar.appendChild(weekdayHeader);
  
    // Get first day of the month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    // Get last day of the month
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    // Create days grid
    const daysGrid = document.createElement('div');
    daysGrid.className = 'days-grid';
  
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day empty';
        daysGrid.appendChild(emptyDay);
    }
  
    // Add days of the month
    for (let day = 1; day <= lastDay; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        if (day === currentDay) {
            dayElement.className += ' current';  // Highlight current day
        }
        dayElement.textContent = day;
        daysGrid.appendChild(dayElement);
    }
  
    calendar.appendChild(daysGrid);
  });