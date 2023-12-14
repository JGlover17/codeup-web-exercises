document.addEventListener("DOMContentLoaded", function() {
    // Change profile picture after 2 seconds
    setTimeout(function() {
        document.getElementById("profile-pic").src = "https://via.placeholder.com/150/ff0000"; // Replace with your desired image URL
    }, 2000);

    // Change profile name after 4 seconds
    setTimeout(function() {
        document.getElementById("profile-name").innerHTML = "Jane Smith"; // Replace with the desired name
    }, 4000);

    // Add a new class to the profile description after 6 seconds
    setTimeout(function() {
        document.getElementById("profile-desc").classList.add("new-style");
    }, 6000);

    // Toggle background color every 2 seconds
    setInterval(function() {
        var profileCard = document.getElementById("profile-card");
        profileCard.classList.toggle("toggle-background");
    }, 2000);
});
