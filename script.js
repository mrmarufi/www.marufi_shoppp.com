document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const cardNumber = document.getElementById('cardNumber').value;
  const expiration = document.getElementById('expiration').value;
  const cvv = document.getElementById('cvv').value;

  // Basic validation (you can expand this)
  if (name === '' || cardNumber === '' || expiration === '' || cvv === '') {
      document.getElementById('message').innerText = 'Please fill in all fields.';
      return;
  }

  // Display success message (you can replace this with actual payment processing)
  document.getElementById('message').innerText = 'Payment submitted successfully!';
  
  // Optionally, clear the form fields
  document.getElementById('paymentForm').reset();
});
