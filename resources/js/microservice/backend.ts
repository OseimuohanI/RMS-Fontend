export const BACKEND_BASE_URL = 'http://localhost:8000';

export function backendUrl(path: string): string {
  const base = (import.meta.env.VITE_BACKEND_BASE_URL as string | undefined) || BACKEND_BASE_URL;
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
