import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import App from './App';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render your App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
