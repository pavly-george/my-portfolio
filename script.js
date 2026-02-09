// JavaScript for Project Modal Display

// Get modal elements
const modal = document.getElementById("project-modal");
const closeModal = document.getElementsByClassName("close")[0];
// Toggle mobile nav menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

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
// Scroll-triggered animation
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100
    );
}

function animateSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Run on load and scroll
window.addEventListener('scroll', animateSections);
window.addEventListener('load', animateSections);


function toggleMenu(el) {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
    el.classList.toggle("active");
}

