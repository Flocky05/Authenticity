
import { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic.jsx';
import './AboutUs.css'
const AboutUS = () => {
    const [cosmetics,setCosmetic]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetic(data))
    },[])
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-bold'>Welcome to are shope</h2>
            {
                cosmetics.map(cosmetic=><Cosmetic 
                    key={cosmetic.id}
                    data={cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default AboutUS;