import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login";
import ProfileUser from "../components/profileUser";
import RegisterUser from "../components/registerUser";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <RegisterUser />,
      },
      {
        path: "profile",
        element: <ProfileUser />,
      },
    ],
  },
]);

export default router;
