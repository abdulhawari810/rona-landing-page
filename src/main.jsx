import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/css/custom.css";
import "@/css/global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./layout/app";

import Homepage from "./views/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
