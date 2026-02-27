import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "./layouts/RootLayout";
import ShopLayout from "./layouts/ShopLayout";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import Cart from "./components/Cart/Cart";
import Pay from "./components/Pay/Pay.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "home", element: <Navigate to="/" replace /> },

      { path: "about", element: <About /> },

     {
  path: "shop",
  element: <ShopLayout />,
  children: [
    { index: true, element: <Shop /> },  
    { path: ":productId", element: <ProductDetails /> },
    { path: "cart", element: <Cart /> },
    { path: "pay", element: <Pay />,handle:{hideLayout:true} },
  ],
}
    ],
  },

  { path: "/*", element: <NotFound/> },
]);

export default router;
