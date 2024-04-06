import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import Create from "./Pages/Create/Create";
import Uplaod from "./Pages/Create/upload";
import Content from "./Pages/create-content/crearte-content";
import ContentLibrary from "./Pages/content-library";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login/>, // Renders LoginPage component when the root path is accessed
    },
    {
      path: '/signup',
      element: <SignUp/>, // Renders LoginPage component when the root path is accessed
    },
    {
      path: "/home",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "settings", element: <Settings /> },
        { path: "create", element: <Create /> },
        { path: "create/upload", element: <Uplaod /> },
        { path: "create-content", element: <Content /> },
        { path: "create-library", element: <ContentLibrary /> },
      ],
    },
  ]);

  return routes;
}
