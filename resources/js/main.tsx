import '../css/app.css';

import { initializeTheme } from '@/hooks/use-appearance';
import AppRouter from '@/microservice/AppRouter';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

initializeTheme();

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
