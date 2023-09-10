import { useEffect, useState } from "react";
import Bio from "../Bio/Bio";


const Blog = () => {
    const [bios,setBio]=useState([]);
    useEffect(()=>{
        fetch('bio.json')
        .then(data=>data.json())
        .then(data=>setBio(data))
    },[])
    return (
        <div>
            <h2 className="text-xl font-bold text-center m-8">This is Profile authentication page</h2>
            {
                bios.map(bio=> <Bio
                key={bio.id}
                data={bio}
                ></Bio>)
            }
        </div>
    );
};

export default Blog;