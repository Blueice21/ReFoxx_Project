const formlogin = document.getElementById("formlogin");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

formlogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [
        { email: "user123@gmail.com", password: "123" }
    ];

    const foundUser = users.find(u => u.email === emailValue && u.password === passwordValue);

    if (foundUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
        window.location.href = "Index.html"; 
    } else {
        alert("Username atau Password salah!");
    }
});