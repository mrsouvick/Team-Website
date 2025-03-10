document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  console.log('Login button clicked'); // Debugging

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log('Username:', username); // Debugging
  console.log('Password:', password); // Debugging

  // Send login request to backend
  fetch('https://tech-tronics-backend.onrender.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      console.log('Response received:', response); // Debugging
      return response.json();
    })
    .then((data) => {
      console.log('Data:', data); // Debugging
      if (data.success) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to admin dashboard
      } else {
        document.getElementById('error-message').textContent = data.message;
      }
    })
    .catch((error) => {
      console.error('Error:', error); // Debugging
    });
});