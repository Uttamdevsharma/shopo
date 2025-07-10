import React,{useState} from "react";
import productsData from "../data/products";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Home = () =>{

    const {addToCart } = useCart();

    const [searchTerm,setSearchTerm] = useState("");
    const [sortOrder,setSortOrder] = useState(" ");

    //Filtered Data
    const filteredProducts = productsData
    .filter(
        (product) => 
        product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase) || 
    product.description.toLowerCase().includes(searchTerm.toLowerCase())

          )
    .sort((a,b) => {

        if(sortOrder == 'low') return a.price - b.price;
        if(sortOrder == 'high') return b.price - a.price;
        return 0;       
    });


    return (

        
<div className="max-w-7xl mx-auto p-6">
 
  <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 rounded w-full md:w-1/2"
    />
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="border p-2 rounded w-full md:w-1/4"
    >
      <option value="">Sort by Price</option>
      <option value="low">Low → High</option>
      <option value="high">High → Low</option>
    </select>   
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

    {filteredProducts.length === 0 && (
        <p class="text-center text-gray-500 mt-8">No Products Found</p>
    )}

    {filteredProducts.map( (product) => (
        <div key={product.id} class="bg-white rounded shadow p-4">
            <img
             src={product.image}
             alt={product.title}
             class="w-full h-48 object-cover mb-4 rounded"           
             />
             <h2 class="text-lg font-bold">{product.title}</h2>
             <p class="text-sm text-gray-600 mb-2">{product.description}</p>
             <p class="text-blue-600 font-semibold mb-3">{product.price}</p>

             <div class="flex justify-between items-center">
                <button
                  onClick={() => addToCart(product)}
                  class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" 
                
                >
                    Add to Cart
                </button>


                <Link 
                to ={`/product/${product.id}`} //Template Literal
                class="text-blue-500 underline hover:text-blue-700"
                
                >
                details</Link>

             </div>

      </div>

    ))}

  </div>
</div>


 );

};

export default Home;
