const form = document.getElementById("complaintForm");
const confirmationDiv = document.getElementById("confirmation");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    confirmationDiv.style.display = "block";
    
    form.reset();

    setTimeout(function() {
        confirmationDiv.style.display = "none";
    }, 3000); // 3000 milliseconds = 3 seconds
});

