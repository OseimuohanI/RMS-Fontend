/**
 * Extract CSRF token from cookies
 * Laravel sets it in various cookie names, we'll try common ones
 */
export function getCsrfToken(): string | null {
  if (typeof document === 'undefined') {
    return null;
  }

  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    cookie = cookie.trim();

    // Laravel's CSRF token is typically in a cookie starting with a hash or UUID-like pattern
    // The cookie name varies, but we can look for the pattern
    if (cookie.includes('=')) {
      const [name, value] = cookie.split('=', 2);

      // Check for common Laravel CSRF cookie patterns
      if (
        name.includes('XSRF') ||
        name.includes('csrf') ||
        name.length > 20 // Long cookie names are typically the CSRF token cookie
      ) {
        try {
          return decodeURIComponent(value);
        } catch {
          continue;
        }
      }
    }
  }

  return null;
}
