import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider.tsx";
import Home from "./pages/home.tsx";
import Work from "./pages/work.tsx";
import Project from "./pages/project.tsx";
import Notes from "./pages/notes.tsx";
import Blogs from "./pages/blogs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "work", element: <Work /> },
      { path: "projects", element: <Project /> },
      { path: "notes", element: <Notes /> },
      { path: "blogs", element: <Blogs /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
