import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../Layout/Root";
import { Home } from "../Page/Home";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Profile from "../Page/Profile";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <div>error is here</div>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/about",
        element:<div>About page</div>,
      },
       {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { path: "profile", element: <Profile /> },
        ],
      },
   
      ],
    },
  ]);