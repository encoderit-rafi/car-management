import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import Login from "@/pages/login/Login";
import Users from "@/pages/users/Users";
import UserDetails from "@/pages/users/UserDetails";
import Cars from "@/pages/cars/Cars";
import CarDetails from "@/pages/cars/CarDetails";
import ErrorPage from "@/pages/error/ErrorPage.tsx";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "cars/:id",
        element: <CarDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
