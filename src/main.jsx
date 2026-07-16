import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/index.js';
import App from './App.jsx';
import './styles/globals.css';

function restoreGitHubPagesRoute() {
  const redirectPath = new URLSearchParams(window.location.search).get(
    'redirect',
  );

  if (!redirectPath?.startsWith('/') || redirectPath.startsWith('//')) {
    return;
  }

  try {
    const targetUrl = new URL(redirectPath, window.location.origin);

    if (targetUrl.origin !== window.location.origin) {
      return;
    }

    const restoredPath =
      targetUrl.pathname + targetUrl.search + targetUrl.hash;

    window.history.replaceState(null, '', restoredPath);
  } catch {
    // Ignore invalid redirect values and mount the app normally.
  }
}

restoreGitHubPagesRoute();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
