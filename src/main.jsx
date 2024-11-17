import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VeryfyUser  from './utils/verifyUser';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Register from './pages/register/register';
import RecupCont from './pages/recupCont/recupCont';
import { ThemeProvider } from './utils/ThemeCtx';
import VerifyCode from './pages/verifyCode/verifyCode.jsx';
import './index.css';
import NewPassword from './pages/newPassword/newPassword.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgotMyPassword',
    element: <RecupCont />,
  },
  {
    path: '/dashboard',
    element: <VeryfyUser element={<Dashboard />} route='/'/>,
  }, 
  {
    path: '/page1',
    element: <h1>Page 1</h1>,
  },
  {
    path:'/verifyCode',
    element:<VerifyCode/>
  },
  {
    path:'/newPassword',
    element:<NewPassword/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
