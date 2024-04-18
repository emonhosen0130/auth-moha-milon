import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthaProvider from './providers/AuthaProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    childrenL: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,

      },
      {
        path: '/register',
        element: <Register></Register>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthaProvider>
      <RouterProvider router={router} />
    </AuthaProvider>
  </React.StrictMode>,
)
