import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/home", element: <Home></Home> },
  { path: "/login", element: <Login></Login> },
  { path: "/", element: <Home></Home> },
]);

export default routes;
