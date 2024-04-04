document.getElementById("signup-form").addEventListener("submit", function(event) {
    var emailInput = document.querySelector(".SignUp #Email");
    var email = emailInput.value;
  
    if (!isValidEmail(email)) {
      // Prevent the form from submitting
      event.preventDefault();
      // Show an error message
      alert("Please enter a valid email address with @gmail.com domain.");
      // Focus on the email input field
      emailInput.focus();
    }
  });
  
  function isValidEmail(email) {
    console.log("Is Valid ")
    // Check if the email contains @gmail.com
    return email.endsWith("@gmail.com");
  }
  