import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ManageUser from "../Pages/ManageUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/manage/user",
    element: <ManageUser />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
