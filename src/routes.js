import React from 'react'
import { useRoutes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";


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
              // { path: 'settings', element: <Settings/> },
            ],
        },
    ]);
    
  
    return routes;
  }