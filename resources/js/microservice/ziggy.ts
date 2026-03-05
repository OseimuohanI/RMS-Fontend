type RouteParams = Record<string, string | number | boolean>;

export function route(name: string, params?: RouteParams): string {
  if (!params) {
    return name;
  }

  const url = new URL(name, window.location.origin);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value));
  }

  return `${url.pathname}${url.search}`;
}

export default route;
