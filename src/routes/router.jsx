import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Blog from "../Components/Blog/Blog";
import SellYourBooks from "../Components/SellYourBooks/SellYourBooks";
import About from "../Components/About/About";
import Shop from "../Components/Shop/Shop";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path: "/",
            element: <Home></Home>
          },
        {
            path: "/about",
            element: <About></About>
          },
        {
            path: "/sellbooks",
            element: <SellYourBooks></SellYourBooks>
          },
        {
            path: "/blog",
            element: <Blog></Blog>
          },
        {
            path: "/shop",
            element:<Shop></Shop>
          },
      ]
    },

  ]);