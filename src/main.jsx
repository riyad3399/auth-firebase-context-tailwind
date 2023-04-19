import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProviders from "./Providers/AuthProviders";
import Orders from "./components/Orders";
import PrivateRoute from "./routers/PrivateRoute";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: 'orders',
        element: <PrivateRoute> <Orders></Orders> </PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
