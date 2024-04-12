import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import { HelmetProvider } from "react-helmet-async";
import EstateDetails from "./pages/EstateDetails";
import AuthProvider from "./components/AuthProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./components/ErrorPage";
import { ToastContainer } from 'react-toastify';
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import UpdateProfile from "./pages/UpdateProfile";
import Estate from "./components/Estate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/estate/:id",
        element: <PrivateRoute><EstateDetails /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><UpdateProfile/></PrivateRoute>
      },
      {
        path: "/about",
        element: <PrivateRoute><About/></PrivateRoute>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer autoClose={2002}/>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
