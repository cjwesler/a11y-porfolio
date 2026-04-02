const triggers = document.querySelectorAll('.accordion-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', !expanded);

    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    panel.hidden = expanded;
  });

  // Keyboard support (Enter + Space)
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      trigger.click();
    }
  });
});
