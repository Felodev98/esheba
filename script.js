document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector("#home button");
    const emailButton = document.querySelector("#newsletter button");

    searchButton.addEventListener("click", function() {
        alert("Searching for doctors...");
    });

    emailButton.addEventListener("click", function() {
        const emailInput = document.querySelector("#newsletter input");
        if (emailInput.value.trim() === "") {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for subscribing!");
            emailInput.value = "";
        }
    });
});
