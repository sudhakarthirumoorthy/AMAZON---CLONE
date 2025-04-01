document.addEventListener("DOMContentLoaded", function () {
    var signInBtn = document.getElementById("signInBtn");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    signInBtn.addEventListener("click", function () {
        var email = emailInput.value.trim();
        var password = passwordInput.value.trim();

        if (email !== "" && password !== "") {
            alert("Login Successful!");
            window.location.href = "index.html"; // Redirect to homepage
        } else {
            alert("Please enter an email and password.");
        }
    });
});