import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";

import "../App.css";
import About from "../pages/About";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

export const rootRouter = createBrowserRouter([
    {path:'/' , element: <RootLayout/>,
        children: [
            {index:true , element:<Home/>},
            {path: '/about' , element:<About/>},
            {path: "/product/:id", element: <ProductDetails/>},
            {path: "/cart", element: <Cart/>},
            {path: "*", element: <NotFound/>},
            
        ]
    }
])