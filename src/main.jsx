import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AddPost from './pages/AddPost';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicRoute from './routes/PublicRoute';
import ProctectedRoute from './routes/ProtectedRoute';

const router =createBrowserRouter([
    {path:"/", element:(<ProctectedRoute><Home/></ProctectedRoute>)},
    {path:"/register",element:(<PublicRoute><Register/></PublicRoute>)},
    {path:"/Login",element:(<PublicRoute><Login/></PublicRoute>)},
    {path:"/profile",element:(<ProctectedRoute><Profile/></ProctectedRoute>)},
    {path:"/add-post",element:(<ProctectedRoute><AddPost/></ProctectedRoute>)},
    {path:"*",element:<NotFound/>}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
