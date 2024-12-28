import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Home from "./pages/home.jsx";
import News from "./pages/news.jsx";
import TopicContextProvider from "./context/Topic.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
  },
  {
    path: "contact",
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TopicContextProvider>
      <RouterProvider router={router} />
    </TopicContextProvider>
  </StrictMode>
);
