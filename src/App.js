import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from "./features/Cart/Cart";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import ProductDetailPage from "./Pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "login",
    element: (<LoginPage/>),
  },
  {
    path: "signup",
    element: (<SignupPage/>),
  },
  {
    path: "cart",
    element: (<CartPage/>),
  },
  {
    path: "checkout",
    element: (<Checkout/>),
  },
  {
    path: "product-detail",
    element: (<ProductDetailPage/>),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
