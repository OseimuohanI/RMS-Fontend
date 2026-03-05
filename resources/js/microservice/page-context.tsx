import { createContext, useContext } from 'react';

export type PageContextValue = {
  url: string;
  props: Record<string, unknown>;
};

export const PageContext = createContext<PageContextValue>({
  url: '/',
  props: {},
});

export function usePageContext() {
  return useContext(PageContext);
}
