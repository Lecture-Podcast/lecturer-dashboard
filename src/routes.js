import React from 'react'
import { useRoutes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Settings from './Pages/Settings/Settings';
import Create from './Pages/Create/Create';
import Uplaod from './Pages/Create/upload';


export default function Router() {
    const routes = useRoutes([

        // {
        //   path: '/',
        //   element: <Login/>, // Renders LoginPage component when the root path is accessed
        // },
        // {
        //   path: '/signup',
        //   element: <Signup/>, // Renders LoginPage component when the root path is accessed
        // },
        {
            path: '/',
            element: <Layout/>,
            children: [
              { index: true, element: <Home/> },
              { path: 'settings', element: <Settings/> },
              { path: 'create', element: <Create/> },
              { path: '/create/upload', element: <Uplaod/> },
            ],
        },
    ]);
    
  
    return routes;
  }