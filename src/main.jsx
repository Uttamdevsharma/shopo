import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { rootRouter } from './router/router.jsx';
import './App.css'
import { CartProvider } from './contexts/CartContext.jsx';

createRoot(document.getElementById('root')).render(

  
    <CartProvider>
      <RouterProvider router = {rootRouter}/>

    </CartProvider>
    
 
  
)
