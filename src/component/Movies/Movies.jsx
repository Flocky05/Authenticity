import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";


const Movies = () => {
    const [flims,setFlim]=useState([]);

    useEffect(()=>{
        fetch('flim.json')
        .then(res=>res.json())
        .then(data=>setFlim(data))
    },[])
    return (
        <div>
            <h3 className="text-orange-500 font-bold text-center text-3xl p-5">Our Movies Collections are :</h3>
            <div className="grid grid-cols-3">
           {
             flims.map(flim => <MovieCard
                key={flim.Title}
                data={flim}
                ></MovieCard>)
           }
        </div>
        </div>
    );
};

export default Movies;