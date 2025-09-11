import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../Layout/Root";
import { Home } from "../Page/Home";




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
   
      ],
    },
  ]);