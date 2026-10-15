// The theme choice is stored the way the product sites' own toggles store it (lpdf.io, authstack.id): a
// cookie and localStorage under the same key, with the cookie read first. Matching both means a choice
// made on a site or its docs carries to the other when they share an origin.

export const THEME_STORAGE_KEY = 'cs-theme';
