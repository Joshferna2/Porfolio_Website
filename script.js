document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav a');
  
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  
    // Form Validation
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill in all fields.';
      } else {
        formMessage.textContent = 'Thank you for your message!';
        form.reset();
      }
    });
  });