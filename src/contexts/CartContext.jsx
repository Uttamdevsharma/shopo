import React,{Children, createContext,useContext,useState} from "react";

const CartContext = createContext();

export const CartProvider = ({Children}) => {
    const [cartItems,setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            
        })
    }
}