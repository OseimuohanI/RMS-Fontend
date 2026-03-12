export const BACKEND_BASE_URL =
  'https://resource-management-system-production.up.railway.app';

function getMetaApiBaseUrl(): string | null {
  if (typeof document === 'undefined') {
    return null;
  }

  return document
    .querySelector('meta[name="api-base-url"]')
    ?.getAttribute('content')
    ?.trim() || null;
}

export function backendUrl(path: string): string {
  const envBase = import.meta.env.VITE_BACKEND_BASE_URL as string | undefined;
  const metaBase = getMetaApiBaseUrl();
  const base = metaBase || envBase || BACKEND_BASE_URL;
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
