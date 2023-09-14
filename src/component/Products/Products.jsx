import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";


const Products = () => {
    const [products,setProduct]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    const handleAddToCard=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="flex justify-between p-10">
            <div className="grid grid-cols-3 w-5/6">
                {
                    products.map(product=><ProductCard
                    key={product.id}
                    data={product}
                    handleAddToCard={handleAddToCard}
                    ></ProductCard>)
                }
            </div>
            <div className="bg-orange-200 p-2 text-center">
                <h3 className="text-xl font-semibold">Order Summary</h3>
                <h3>selected product numbers are:{cart.length}</h3>
                <button className="bg-red-500 text-white px-4 py-1 rounded-lg w-3/5">calculate</button>
            </div>
        </div>
    );
};

export default Products;