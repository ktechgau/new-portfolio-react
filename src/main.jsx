import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './components/Home/Home.jsx';
import PortfolioPage from './components/PortfolioPage/Portfolio.jsx';

import NavBar from './components/NavBar/Navbar';

const router = createBrowserRouter([
  {
path: "/", element:<NavBar/>,
children: [
  {path:"/",element:<HomePage/>},
  {path:"/portfolio", element:<PortfolioPage/>},
],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
);
