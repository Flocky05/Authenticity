import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieDetailsMore from "./MovieDetailsMore";


const MovieDetail = () => {

  let [searchParams, setSearchParams] = useSearchParams();
   console.log(searchParams)
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