import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Register from './pages/Register';
import MyData from './pages/MyData';
import GlobalContext, { useRegister } from './context';
import { motion } from 'framer-motion';

const Animation = () => {
  const { pathname } = useLocation();
  return (
    <motion.div 
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration:0.5,type: 'tween' }}
    >
      <Outlet />
    </motion.div>
  )
}

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useRegister();
  return user.id ? <>{children}</> : < Navigate to="/" />;
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Animation />}> 
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />
          <Route path="/mydata" element={<AuthRoute><MyData /></AuthRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className='w-screnn h-full relative'>
    <React.StrictMode>
      <GlobalContext>
        <Router />
      </GlobalContext>
    </React.StrictMode>
  </div>
 
);

reportWebVitals();
