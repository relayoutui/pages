// Starlight's search button shows its shortcut, "Ctrl K" or "⌘ K", as text, and its aria-label is only "Search", so
// the visible text isn't in the accessible name (label-content-name-mismatch, WCAG 2.5.3). The name gets the shortcut
// as it is shown, once Starlight's own script has set it for the platform.
customElements.whenDefined('site-search').then(() =>
{
    const button = document.querySelector('site-search button[data-open-modal]');
    const label = button?.getAttribute('aria-label');
    const keys = [...(button?.querySelectorAll('kbd > kbd') ?? [])].map(key => key.textContent?.trim()).filter(Boolean);
    if (button && label && keys.length) button.setAttribute('aria-label', `${label} ${keys.join(' ')}`);
});
