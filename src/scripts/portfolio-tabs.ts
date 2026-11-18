const initializePortfolioTabs = (root: HTMLElement) => {
  const tabList = root.querySelector<HTMLElement>('[role="tablist"]');
  const tabButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const tabPanels = Array.from(root.querySelectorAll<HTMLElement>('[data-tab-panel]'));

  if (!tabList || tabButtons.length === 0) return;

  const activateTab = (selectedTab: HTMLButtonElement) => {
    tabButtons.forEach((tab) => {
      const isSelected = tab === selectedTab;
      tab.setAttribute('aria-selected', String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
    });

    tabPanels.forEach((panel) => {
      panel.hidden = panel.id !== selectedTab.getAttribute('aria-controls');
    });
  };

  tabButtons.forEach((tab, index) => {
    const panel = tabPanels.find((candidate) => candidate.id === tab.getAttribute('aria-controls'));

    if (panel) {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tab.id);
      panel.tabIndex = 0;
    }

    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      let nextIndex: number;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabButtons.length;
      else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = tabButtons.length - 1;
      else return;

      event.preventDefault();
      const nextTab = tabButtons[nextIndex];
      activateTab(nextTab);
      nextTab.focus();
    });
  });

  activateTab(tabButtons[0]);
  tabList.hidden = false;
};

document.querySelectorAll<HTMLElement>('[data-portfolio-tabs]').forEach(initializePortfolioTabs);
