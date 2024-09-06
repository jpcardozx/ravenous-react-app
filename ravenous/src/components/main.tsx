// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // Alteração para o novo pacote de "root"
import './index.css'; // Estilos globais
import App from './App'; // Certifique-se de que o caminho está correto

const rootElement = document.getElementById('root');

// Nova abordagem para React 18+
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Usando createRoot
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
