// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get form data
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    
    // Check if all fields are filled
    if (name && email && message) {
      alert('Thank you, ' + name + '! Your message has been sent.');
      
      // Clear form fields after submission
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill out all fields before submitting.');
    }
  });
  
  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
    
      });
    });
  });
  
  // Scroll Animations (Optional)
  window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0) {
        element.classList.add('in-view');
      }
    });
  });
  
  // Optional - Smooth scroll to the top when clicking the "Back to Top" button
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑ Back to Top';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.padding = '10px';
  backToTopButton.style.border = 'none';
  backToTopButton.style.backgroundColor = '#3498db';
  backToTopButton.style.color = 'white';
  backToTopButton.style.fontSize = '20px';
  backToTopButton.style.borderRadius = '5px';
  backToTopButton.style.cursor = 'pointer';
  backToTopButton.style.display = 'none';
  
  document.body.appendChild(backToTopButton);
  
  // Show or hide the "Back to Top" button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Scroll to top when button is clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });    
    // Dark/Light Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';
toggleButton.className = 'toggle-btn';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// Update Footer Year
document.querySelector('footer p').innerHTML = © ${new Date().getFullYear()} Jekings Menang | All Rights Reserved;
// Form Validation
document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields!');
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address!');
      return;
    }
  
    alert('Thank you for your message!');
    this.reset();
  });
  //Skill Tooltip
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseover', function () {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = This is ${this.innerText.trim()};
    this.appendChild(tooltip);
  });

  skill.addEventListener('mouseout', function () {
    this.querySelector('.tooltip').remove();
  });
});