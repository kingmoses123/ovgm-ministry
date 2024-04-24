// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // You can add your own form submission logic here, such as sending the data to a server
    // For demonstration purposes, we'll just log the form data to the console
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    console.log('Form Data:', formObject);

    // Clear the form after submission (optional)
    this.reset();
});
