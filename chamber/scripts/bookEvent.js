function bookEvent(eventName, personName, contactNumber) {
    alert(`Booking Confirmation:\n\nEvent: ${eventName}\nName: ${personName}\nContact: ${contactNumber}`);
    console.log(`Booking event: ${eventName}, Name: ${personName}, Contact: ${contactNumber}`);
  }
  
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally
  
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const eventName = document.getElementById('event').value;
  
    if (name && contact && eventName) {
      bookEvent(eventName, name, contact);
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
