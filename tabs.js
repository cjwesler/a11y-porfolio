const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => activateTab(tab));

  tab.addEventListener('keydown', (e) => {
    const index = Array.prototype.indexOf.call(tabs, tab);

    if (e.key === 'ArrowRight') {
      const next = tabs[index + 1] || tabs[0];
      next.focus();
      activateTab(next);
    }

    if (e.key === 'ArrowLeft') {
      const prev = tabs[index - 1] || tabs[tabs.length - 1];
      prev.focus();
      activateTab(prev);
    }

    if (e.key === 'Enter' || e.key === ' ') {
      activateTab(tab);
    }
  });
});

function activateTab(selectedTab) {
  tabs.forEach(tab => {
    tab.setAttribute('aria-selected', tab === selectedTab);
  });

  panels.forEach(panel => {
    panel.hidden = panel.id !== selectedTab.getAttribute('aria-controls');
  });
}
