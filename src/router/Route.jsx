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
import Update from "../components/Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>,
      },
      {
        path: "/myCart",
        element: <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>,
        loader: () => fetch('https://brand-shop-server-side-ruby.vercel.app/cartproduct/')

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
        loader: () => fetch('https://brand-shop-server-side-ruby.vercel.app/product'),

      },

      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch('https://brand-shop-server-side-ruby.vercel.app/product')
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch('https://brand-shop-server-side-ruby.vercel.app/product')
      },
      {
        path: "/google",
        element: <Google></Google>,
        loader: () => fetch('https://brand-shop-server-side-ruby.vercel.app/product')
      },
      {
        path: "/intel",
        element: <Intel></Intel>,
        loader: () => fetch('https://brand-shop-server-side-ruby.vercel.app/product')
      },
      {
        path: "/xiaomi",
        element: <Xiaomi></Xiaomi>,
        loader: () => fetch('https://brand-shop-server-side-ruby.vercel.app/product')
      },
      {
        path: "/details/:id",
        element: <PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-side-ruby.vercel.app/product/${params.id}`)
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch('https://brand-shop-server-side-ruby.vercel.app/product')
      },
      {
        path: "/update/:id",
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-side-ruby.vercel.app/product/${params.id}`)
      },

    ],
  },
]);

export default router;