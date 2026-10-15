// The home page's behaviour: the theme toggle in the header, the cycling word in the hero's title, and keyboard
// scrolling. Plain JS, served as it is: the home page has no build step.

// The docs' key (docs-site/src/theme.ts): a cookie and localStorage under it, the cookie read first. The same key on
// the same origin is what carries a choice between the home page and the docs.
const THEME_STORAGE_KEY = 'cs-theme';

// The old docs landing changed its word every 3 seconds
const WORD_INTERVAL_MS = 3000;

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
 * Sizes the hero's slot to one word, so the title closes up round it. In em, which scales with the title's font
 * size, so the width stays right when the window, and with it the title, changes size.
 * @param {HTMLElement} slot the slot
 * @param {HTMLElement} word the word to fit
 */
function fitSlot(slot, word)
{
    const fontSize = parseFloat(getComputedStyle(slot).fontSize);
    slot.style.width = `${word.getBoundingClientRect().width / fontSize}em`;
}

/**
 * Shows the next word in the hero's slot every few seconds, in a loop.
 * @param {HTMLElement} slot the element holding one `.word` per word, the current one marked `is-current`
 */
function cycleWords(slot)
{
    const words = [...slot.querySelectorAll('.word')];
    let current = words.findIndex(word => word.classList.contains('is-current'));
    setInterval(() =>
    {
        words[current].classList.remove('is-current');
        current = (current + 1) % words.length;
        words[current].classList.add('is-current');
        fitSlot(slot, words[current]);
    }, WORD_INTERVAL_MS);
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

const slot = document.querySelector('.word-slot');
if (slot)
{
    fitSlot(slot, slot.querySelector('.word.is-current'));
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) cycleWords(slot);
}

focusBodyForKeyboardScroll();
