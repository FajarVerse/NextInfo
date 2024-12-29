import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import TopicContextProvider from "./context/Topic.jsx";
import "./index.css";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";
import News from "./pages/news.jsx";
import Contact from "./pages/contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TopicContextProvider>
      <RouterProvider router={router} />
    </TopicContextProvider>
  </StrictMode>
);
