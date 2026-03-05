export async function resolvePageComponent<T>(
  _path: string,
  pages: Record<string, () => Promise<T>>,
): Promise<T> {
  const keys = Object.keys(pages);
  if (!keys.length) {
    throw new Error('No pages available');
  }
  return pages[keys[0]]();
}
