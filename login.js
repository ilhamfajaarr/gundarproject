const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("invalid").style.display = "none";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const authenticated = authenticator(username, password);

    if (authenticated) {
        window.location.href = "main.html";
    } else {
        // Show the invalid message
        document.getElementById("invalid").style.display = "block";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }
});

function authenticator(username, password) {
    if (username === "admin" && password === "password") {
        return true;
    } else {
        return false;
    }
}
