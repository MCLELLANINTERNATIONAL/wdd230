const form = document.getElementById('bookingForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (form.checkValidity()) {
      const name = document.getElementById('name').value;
      const contact = document.getElementById('contact').value;
      const event = document.getElementById('event').value;

      localStorage.setItem('bookingName', name);
      localStorage.setItem('bookingContact', contact);
      localStorage.setItem('bookingEvent', event);

      window.location.href = 'eventConfirm.html';
    } else {
      form.reportValidity();
    }
  });