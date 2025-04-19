// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar scroll effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    nav.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
    nav.classList.remove('scroll-up');
    nav.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
    nav.classList.remove('scroll-down');
    nav.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// Form submission with animation
function thankMessage(e) {
  e.preventDefault();
  const form = e.target.closest('form');
  const thanksText = document.getElementById('thanksText');
  
  // Add fade out animation to form
  form.style.opacity = '0';
  form.style.transform = 'translateY(-10px)';
  
  // Show thank you message with animation
  setTimeout(() => {
    thanksText.classList.remove('hidden');
    thanksText.style.opacity = '0';
    thanksText.style.transform = 'translateY(10px)';
    
    // Trigger reflow
    thanksText.offsetHeight;
    
    thanksText.style.transition = 'all 0.5s ease';
    thanksText.style.opacity = '1';
    thanksText.style.transform = 'translateY(0)';
    
    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset();
      form.style.opacity = '1';
      form.style.transform = 'translateY(0)';
      thanksText.classList.add('hidden');
    }, 3000);
  }, 500);
}

// Add animation to skill cards on scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
  observer.observe(card);
});
  