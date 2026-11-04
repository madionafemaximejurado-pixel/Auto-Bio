
// SHOW SELECTED SECTION
function showSection(sectionId, clickedButton) {

    // Get all sections
    const sections = document.querySelectorAll("main section");

    // Hide all sections
    sections.forEach(function(section) {
        section.classList.remove("active-section");
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }

    // Remove active style from all navigation buttons
    const buttons = document.querySelectorAll(".nav-links button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Highlight clicked button
    if (clickedButton) {
        clickedButton.classList.add("active");
    }

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// SHOW AND HIDE BIOGRAPHY
function showBio() {

    const bio = document.getElementById("bioContent");
    const button = document.getElementById("bioButton");

    if (bio.style.display === "none" || bio.style.display === "") {

        bio.style.display = "block";
        button.textContent = "Hide My Bio";

    } else {

        bio.style.display = "none";
        button.textContent = "Show My Bio";

    }

}


// DEFAULT SECTION WHEN WEBSITE OPENS
document.addEventListener("DOMContentLoaded", function() {

    const aboutButton = document.querySelector(
        ".nav-links button"
    );

    showSection("about", aboutButton);

});
