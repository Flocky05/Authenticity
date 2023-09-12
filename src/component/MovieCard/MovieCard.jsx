

const MovieCard = (props) => {
    const {Title,Released,Plot,Language,Poster}=props.data;
    return (
        <div className="bg-gray-800 text-white w-11/12 my-5 mx-auto rounded-xl">
            <img className="w-full" src={Poster} alt="" />
            <h2>Movie Name: {Title}</h2>
            <p>Released Date :{Released} </p>
            <p>plot :{Plot} </p>
            <p>Language :{Language} </p>
        </div>
    );
};

export default MovieCard;