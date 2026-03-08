const github = document.getElementById('github');

github.addEventListener('click', () => {
    window.open('https://github.com/AnujBawangarh', "_blank");
});

const linkedin = document.getElementById('linkedin');

linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/anujbawangarh/', "_blank");
});

const instagram = document.getElementById('instagram');

instagram.addEventListener('click', () => {
    window.open('https://www.instagram.com/anujbawangarh/', "_blank");
});

window.addEventListener("scroll", function() {
    const navbar = document.getElementById("heading");
    // Check if the user has scrolled past a certain point (e.g., 50 pixels)
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
