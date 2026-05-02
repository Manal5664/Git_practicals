function signupUser(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    let user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));
  
    alert("Signup successful!");
    window.location.href = "login.html";
  }
  
  function loginUser(e) {
    e.preventDefault();
  
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
  
    let user = JSON.parse(localStorage.getItem(email));
  
    if (user && user.password === password) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password");
    }
  }