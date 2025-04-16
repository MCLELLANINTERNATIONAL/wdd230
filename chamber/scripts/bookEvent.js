document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookevent');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const contact = document.getElementById('phone').value.trim();
      const eventName = document.getElementById('event').value.trim();

      if (name && contact && eventName) {
        localStorage.setItem('bookingName', name);
        localStorage.setItem('bookingContact', contact);
        localStorage.setItem('bookingEvent', eventName);

        window.location.href = 'bookeventconfirm.html';
      } else {
        alert("Please fill out all fields.");
      }
    });
  } else {
    console.error("Form with ID 'bookEvent' not found.");
  }
});