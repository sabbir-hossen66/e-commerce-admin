import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../Layout/Root";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <div>error is here</div>,
    children: [
      {
        path: "/home",
        element:<div>home page</div>,
      },
      {
        path: "/about",
        element:<div>About page</div>,
      },
   
      ],
    },
  ]);