import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataContext from './compenents/context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <DataContext>
      <App />
    </DataContext>
  </>
);

