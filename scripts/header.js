const topbar = `
<nav class="topbar">
    <a href="/" class="topbar-brand">
      <img src="/assets/cat_logo.png" alt="Mr_Expence logo">
      Mr_Expence
    </a>
    <input type="checkbox" id="topbar-toggle" class="topbar-checkbox" aria-hidden="true">
    <label for="topbar-toggle" class="topbar-toggle" aria-label="Toggle navigation menu">
      <span class="topbar-icon topbar-icon-open" aria-hidden="true">dehaze</span>
      <span class="topbar-icon topbar-icon-close" aria-hidden="true">close</span>
    </label>
    <div class="topbar-right">
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="/games">Games</a>
      <a href="/socials">Socials</a>
      <a href="/problems">Problems</a>
    </div>
  </nav>
`;
document.body.insertAdjacentHTML("afterbegin", topbar);
