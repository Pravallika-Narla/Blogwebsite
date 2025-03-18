import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import { Blogs } from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      // {
      //   path: "/",
      //   element: <Login/>
      // },
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog/>,
        loader:  ({ params }) => fetch(`https://blogverse-bkend.onrender.com/blogs/${params.id}`)
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/register',
    element:<Register/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
