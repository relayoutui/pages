// The home page's behaviour: the theme toggle in the header and keyboard scrolling. Plain JS, served as it is: the
// home page has no build step.

// The docs' key (docs-site/src/theme.ts): a cookie and localStorage under it, the cookie read first. The same key on
// the same origin is what carries a choice between the home page and the docs.
const THEME_STORAGE_KEY = 'cs-theme';

/**
 * Flips the page between dark and light, and stores the choice where the docs read it.
 */
function toggleTheme()
{
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try
    {
        localStorage.setItem(THEME_STORAGE_KEY, next);
        document.cookie = `${THEME_STORAGE_KEY}=${next}; max-age=31536000; path=/; SameSite=Lax`;
    }
    catch
    {
        // Storage is blocked: the choice lasts for this page
    }
}

/**
 * Gives <body> focus, so Space, PageDown and the arrow keys scroll the page before it has been clicked. <body> is
 * the scroll container under the fixed header (pages-base.css), as on the other product sites. A link to a heading
 * sets its own starting point, so it is left alone.
 */
function focusBodyForKeyboardScroll()
{
    if (location.hash) return;

    document.body.tabIndex = -1;
    document.body.focus({ preventScroll: true });
}

document.querySelector('.theme-btn')?.addEventListener('click', toggleTheme);

focusBodyForKeyboardScroll();
