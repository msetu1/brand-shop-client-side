import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "./Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Apple from "../components/Apple";
import Samsung from "../components/Samsung";
import Sony from "../components/Sony";
import Intel from "../components/Intel";
import Xiaomi from "../components/Xiaomi";
import Google from "../components/Google";
import Details from "../components/Details";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addProduct",
          element: <AddProduct></AddProduct>,
        },
        {
          path: "/myCart",
          element: <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>,
          
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/apple",
          element: <Apple></Apple>,
          loader:()=>fetch('http://localhost:5000/product')
          
        },
        {
          path: "/samsung",
          element: <Samsung></Samsung>,
          loader:()=>fetch('http://localhost:5000/product')
        },
        {
          path: "/sony",
          element: <Sony></Sony>,
          loader:()=>fetch('http://localhost:5000/product')
        },
        {
          path: "/google",
          element: <Google></Google>,
          loader:()=>fetch('http://localhost:5000/product')
        },
        {
          path: "/intel",
          element: <Intel></Intel>,
          loader:()=>fetch('http://localhost:5000/product')
        },
        {
          path: "/xiaomi",
          element: <Xiaomi></Xiaomi>,
          loader:()=>fetch('http://localhost:5000/product')
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
         loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
        },
        
      ],
    },
  ]);

export default router;