import { useEffect, useState } from "react";
import MovieDetailsMore from "./MovieDetailsMore";


const MovieDetail = () => {
    const [movieDetails,setMovieDetail]=useState([]);
    useEffect(()=>{
        fetch('flim.json')
        .then(res=>res.json())
        .then(data=>setMovieDetail(data))
    },[])
    return (
        <div>
            {
                movieDetails.map(movieDetail=><MovieDetailsMore
                key={movieDetail}
                data={movieDetail}
                ></MovieDetailsMore>)
            }
        </div>
    );
};

export default MovieDetail;