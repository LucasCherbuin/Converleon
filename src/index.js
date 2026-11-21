import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function run() {
  const container = document.getElementById('App'); // must match public/index.html
  if (!container) throw new Error('Missing #App container in HTML');
  createRoot(container).render(<App />);
}

if (['complete','loaded','interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}