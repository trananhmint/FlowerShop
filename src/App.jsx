import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/layout";
import Home from "./page/home";
import Dashboard from "./component/dashboard";
import Category from "./page/category";
import RegisterPage from "./page/register";
import LoginPage from "./page/login";
import NotFound from "./page/not-found";
import SearchPage from "./page/search";


function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },

        {
          path: "search",
          element: <SearchPage />,
        },
        
      ],
    },
    
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },

    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "category",
          element: <Category />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
