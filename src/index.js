import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import { ContextProvider } from './store/Context';
import { CartContextProvider } from './store/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextProvider>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </ContextProvider>
    </React.StrictMode>,
);

reportWebVitals();
