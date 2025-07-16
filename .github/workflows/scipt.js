const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  formMessage.textContent = 'Sending...';

  try {
    const res = await fetch('http://localhost:5000/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await res.json();

    if (res.ok && result.success) {
      formMessage.style.color = 'green';
      formMessage.textContent = result.message;
      form.reset();
    } else {
      formMessage.style.color = 'red';
      formMessage.textContent = result.error || 'Failed to send message.';
    }
  } catch (error) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Error: ' + error.message;
  }
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
