// JavaScript for Project Modal Display

// Get modal elements
const modal = document.getElementById("project-modal");
const closeModal = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal(projectTitle, projectDescription, projectImage) {
    // Set the modal content
    document.getElementById("modal-title").innerText = projectTitle;
    document.getElementById("modal-description").innerText = projectDescription;
    document.getElementById("modal-image").src = projectImage;

    // Display the modal
    modal.style.display = "flex"; // Use flex for better centering
}

// Function to close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add event listeners to project buttons
document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
        const project = button.parentElement;
        const title = project.querySelector('h3').innerText;
        const description = project.querySelector('p').innerText;
        const image = project.querySelector('img').src;

        openModal(title, description, image);
    });
});

// Add smooth scroll effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class to sections
function animateSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('section'); // Add the animation class
        }
    });
}
function sendEmail() {
    // Gather form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:pavlygeorge25@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Prevent the form from submitting normally
    return false;
}

// Trigger animation on scroll and load
window.addEventListener('scroll', animateSections);
window.addEventListener('load', animateSections); // Also trigger on load
