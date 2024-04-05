import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*
import { BrowserRouter } from 'react-router-dom';

import Home from './routes/Home';
import Contact from './routes/Contact';

/*
const router = BrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//export  default router;