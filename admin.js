document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send login request to backend
  fetch('https://tech-tronics-backend.onrender.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to admin dashboard
      } else {
        document.getElementById('error-message').textContent = data.message;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});