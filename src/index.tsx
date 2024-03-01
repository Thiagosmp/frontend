import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import reportWebVitals from './reportWebVitals';
import Login from './routes/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './routes/Register';
import MyData from './routes/MyData';
import GlobalContext from './context';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/mydata', element: <MyData /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className='w-screnn h-full relative'>
    <React.StrictMode>
      <GlobalContext>
        <RouterProvider router={router}/>
      </GlobalContext>
    </React.StrictMode>
  </div>
 
);

reportWebVitals();
