import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";


const Products = () => {
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className="flex justify-between p-10">
            <div className="grid grid-cols-3">
                {
                    products.map(product=><ProductCard
                    key={product.id}
                    data={product}
                    ></ProductCard>)
                }
            </div>
            <div>
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet delectus dolore, aspernatur officiis nostrum error totam consectetur voluptatibus soluta impedit?</h3>
            </div>
        </div>
    );
};

export default Products;