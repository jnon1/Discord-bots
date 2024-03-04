document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signupForm");
    const message = document.getElementById("message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = form.username.value;
      const email = form.email.value;
      const password = form.password.value;
  
      if (!username || !email || !password) {
        showMessage("Please fill in all fields", "red");
        return;
      }
  
      showMessage("Account created successfully!", "green");
      // You can perform further actions here like sending data to a server
      // For this example, we'll just show the success message
    });
  
    function showMessage(msg, color) {
      message.style.color = color;
      message.textContent = msg;
    }
  });
  