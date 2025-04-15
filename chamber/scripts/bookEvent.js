document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('eventConfirm');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); 

      const name = document.getElementById('name').value.trim();
      const contact = document.getElementById('contact').value.trim();
      const eventName = document.getElementById('event').value.trim();

      if (name && contact && eventName) {
        bookEvent(eventName, name, contact);
        this.reset();
      } else {
        alert("Please fill out all fields.");
      }
    });
  } else {
    console.error("Form with ID 'bookEvent' not found.");
  }

  function bookEvent(eventName, personName, contactNumber) {
    alert(`Booking Confirmation:\n\nEvent: ${eventName}\nName: ${personName}\nContact: ${contactNumber}`);
    console.log(`Booking event: ${eventName}, Name: ${personName}, Contact: ${contactNumber}`);
  }
});