const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem(nama, email);
    localStorage.setItem(email, password);
    alert("Pendaftaran berhasil");

    window.location.href = "home.html";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    sessionStorage.setItem("loggedIn", "true");

    window.location.href = "home.html";
});
