import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Blog from "../Components/Blog/Blog";
import SellYourBooks from "../Components/SellYourBooks/SellYourBooks";
import About from "../Components/About/About";
import Shop from "../Components/Shop/Shop";
import SingleBookData from "../Components/Shop/SingleBookData/SingleBookData";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBooks from "../Dashboard/UploadBooks";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";

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
        {
            path: "/book/:id",
            element:<SingleBookData></SingleBookData>,
            loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
          },
      ]
    },
    {
      path:'/admin/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:'/admin/dashboard',
          element:<Dashboard></Dashboard>
        },
        {
          path:'/admin/dashboard/upload',
          element:<UploadBooks></UploadBooks>
        },
        {
          path:'/admin/dashboard/manage',
          element:<ManageBooks></ManageBooks>
        },
        {
          path:'/admin/dashboard/edit-books/:id',
          element:<EditBooks></EditBooks>
        },
      ]
    }

  ]);