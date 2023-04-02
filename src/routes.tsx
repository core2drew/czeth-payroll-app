import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginPage } from "./pages/login";
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
]);
