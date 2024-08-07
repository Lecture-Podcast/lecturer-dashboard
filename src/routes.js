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
import Verify from "./Pages/Authentication/Verify";
import Playlist from "./Pages/Create-Playlist/Playlist";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />, // Renders LoginPage component when the root path is accessed
    },
    {
      path: "/signup",
      element: <SignUp />, // Renders LoginPage component when the root path is accessed
    },
    {
      path: "/lecturer/verify",
      element: <Verify userType="lecturer" />, // Renders LoginPage component when the root path is accessed
    },
    {
      path: "/student/verify",
      element: <Verify userType="student" />, // Renders LoginPage component when the root path is accessed
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
        { path: "create-playlist", element: <Playlist/> },
      ],
    },
  ]);

  return routes;
}
