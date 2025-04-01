document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm")
    const createAccBtn = document.querySelector(".CreateAccBtn")
    const errorBox = document.querySelector(".errorBox")
    const nameErr = document.querySelector(".nameErr")
    const emailErr = document.querySelector(".emailErr")
    const passErr = document.querySelector(".passErr")
    const passShortErr = document.querySelector(".passShortErr")
    const repassErr = document.querySelector(".repassErr")
  
    // Input fields
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    const reEnterPassInput = document.getElementById("reEnterPass")
  
    // Helper function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
  
    // Function to reset error messages
    function resetErrors() {
      errorBox.style.display = "none"
      nameErr.style.display = "none"
      emailErr.style.display = "none"
      passErr.style.display = "none"
      passShortErr.style.display = "none"
      repassErr.style.display = "none"
    }
  
    // Function to show error box
    function showErrorBox() {
      errorBox.style.display = "block"
      // Scroll to error box
      errorBox.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  
    // Real-time validation for password
    passwordInput.addEventListener("input", function () {
      if (this.value.length > 0 && this.value.length < 6) {
        this.style.borderColor = "#c40000"
      } else {
        this.style.borderColor = ""
      }
    })
  
    // Real-time validation for password confirmation
    reEnterPassInput.addEventListener("input", function () {
      if (this.value && passwordInput.value && this.value !== passwordInput.value) {
        this.style.borderColor = "#c40000"
      } else {
        this.style.borderColor = ""
      }
    })
  
    createAccBtn.addEventListener("click", () => {
      // Reset previous errors
      resetErrors()
  
      // Get trimmed values
      const name = nameInput.value.trim()
      const email = emailInput.value.trim()
      const password = passwordInput.value
      const reEnterPass = reEnterPassInput.value
  
      // Flag to track if there are any errors
      let hasErrors = false
  
      // Validate name
      if (!name) {
        nameErr.style.display = "block"
        nameInput.style.borderColor = "#c40000"
        hasErrors = true
      } else {
        nameInput.style.borderColor = ""
      }
  
      // Validate email
      if (!email) {
        emailErr.style.display = "block"
        emailInput.style.borderColor = "#c40000"
        hasErrors = true
      } else if (!isValidEmail(email)) {
        emailErr.style.display = "block"
        emailErr.querySelector(".list").textContent = "Enter a valid email address"
        emailInput.style.borderColor = "#c40000"
        hasErrors = true
      } else {
        emailInput.style.borderColor = ""
      }
  
      // Validate password
      if (!password) {
        passErr.style.display = "block"
        passwordInput.style.borderColor = "#c40000"
        hasErrors = true
      } else if (password.length < 6) {
        passShortErr.style.display = "block"
        passwordInput.style.borderColor = "#c40000"
        hasErrors = true
      } else {
        passwordInput.style.borderColor = ""
      }
  
      // Validate password confirmation
      if (!reEnterPass) {
        repassErr.style.display = "block"
        repassErr.querySelector(".list").textContent = "Enter your password again"
        reEnterPassInput.style.borderColor = "#c40000"
        hasErrors = true
      } else if (password && reEnterPass !== password) {
        repassErr.style.display = "block"
        repassErr.querySelector(".list").textContent = "Passwords must match"
        reEnterPassInput.style.borderColor = "#c40000"
        hasErrors = true
      } else {
        reEnterPassInput.style.borderColor = ""
      }
  
      // Show error box if there are errors
      if (hasErrors) {
        showErrorBox()
        return
      }
  
      // If all validations pass, save to localStorage and redirect
      try {
        const loginInfo = JSON.parse(localStorage.getItem("loginInfo")) || []
        loginInfo.push({ name, email, password })
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo))
        alert("Account Created Successfully!")
        window.location.href = "index.html" // Redirect to index.html on success
      } catch (error) {
        console.error("Error saving to localStorage:", error)
        alert("There was an error creating your account. Please try again.")
      }
    })
  })
  
  