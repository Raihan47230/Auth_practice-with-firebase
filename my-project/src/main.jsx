import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Roots/Root";
import SingUp from "./components/SingUp";
import Loggin from "./components/Loggin";
import Providers from "./components/Provider/Providers";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <SingUp></SingUp>,
      },
      {
        path: "/login",
        element: <Loggin></Loggin>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    
  <Providers>
  <RouterProvider router={router} />
  </Providers>
    
  </StrictMode>
);
