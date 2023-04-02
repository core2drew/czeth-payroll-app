import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ForgotPasswordPage, LoginPage } from "./pages";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Dashboard</h1>,
      },
      {
        path: "/user-profile",
        element: <h1>User Profile</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
]);
