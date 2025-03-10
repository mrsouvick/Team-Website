document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
      window.location.href = 'dashboard.html'; // Redirect to admin dashboard
    } else {
      document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
  });