// ============================================
// INQUIRY FORM
// Submits to Formspree via fetch so the visitor
// stays on the page and sees a clear confirmation.
// ============================================
(function () {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  const status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    status.textContent = 'Sending your message…';
    status.style.color = '';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          status.textContent = "Thanks! Your message has been sent — we'll get back to you soon.";
          status.style.color = '#1F7A5C';
          form.reset();
        } else {
          throw new Error('Submission failed');
        }
      })
      .catch(() => {
        status.textContent = "Something went wrong sending that. Please call or WhatsApp us directly instead.";
        status.style.color = '#B3421E';
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Inquiry';
      });
  });
})();

// ============================================
// SCROLL REVEAL for sections
// ============================================
(function () {
  const sections = document.querySelectorAll('.section');
  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  sections.forEach((s) => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(16px)';
    s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((s) => observer.observe(s));
})();
