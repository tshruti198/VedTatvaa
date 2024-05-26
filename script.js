document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    // For demonstration, we'll log the form data to the console
    console.log('Appointment Details:', { name, email, phone, date, time, message });

    // Here you would typically send the data to a server
    alert('Appointment booked successfully!');

    // Reset the form
    document.getElementById('appointmentForm').reset();
});
