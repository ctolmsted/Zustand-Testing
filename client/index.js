import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.scss';
import App from './App';

// Grabbing the element on 'index.html' with the ID of 'root' to render our 'App' component on
const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

// Render 'App' on the 'root' ID element
root.render(
    <App />
);