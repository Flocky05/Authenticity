
import { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic.jsx';

const AboutUS = () => {
    const [cosmetics,setCosmetic]=useState([]);
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetic(data))
    },[]);
    const handleAddToCart=(product)=>{
        const newProduct=[...products,product];
        setProduct(newProduct);
    }
    return (
        <div className='flex justify-between text-center'>
            <div>
                <h2 className='text-3xl font-bold'>Welcome to are shope</h2>
                {
                    cosmetics.map(cosmetic=><Cosmetic 
                        key={cosmetic.id}
                        data={cosmetic}
                        handleAddToCart={handleAddToCart}
                        ></Cosmetic>)
                }
            </div>
            <div className='bg-blue-200 w-1/4'>
                <h2 className='text-xl font-semibold'>The Calculation section </h2>
                <h3 className='text-start p-4'>Total clicked for Buy :{products.length} </h3>
            </div>
        </div>
    );
};

export default AboutUS;