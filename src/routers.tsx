import { createBrowserRouter } from "react-router";
import TodolistPage from "./pages/TodolistPage";
import HelloMyNamePage from "./pages/HelloMyNamePage";
import CounterPage from "./pages/CounterPage";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:xxxx/
      { index: true, element: <CounterPage /> },
    ],
  },
  {
    path: "/my",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:xxxx/my/hellomynamepage
      { path: "hellomynamepage", element: <HelloMyNamePage /> },
      // localhost:xxxx/my/todolistpage
      { path: "todolistpage", element: <TodolistPage /> },
    ],
  },
]);