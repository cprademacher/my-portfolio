// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AboutMe2 from "./pages/AboutMe2.jsx";
import Portfolio2 from "./pages/Portfolio2.jsx";
import Contact2 from "./pages/Contact2.jsx";
import Resume2 from "./pages/Resume2.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Portfolio2 />,
      },
      {
        path: "/about-me",
        element: <AboutMe2 />,
      },
      {
        path: "/portfolio",
        element: <Portfolio2 />,
      },
      {
        path: "/contact",
        element: <Contact2 />,
      },
      {
        path: "/resume",
        element: <Resume2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
