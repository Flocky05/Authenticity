

const MovieCard = (props) => {
    const {Title,Released,Plot,Language,Poster}=props.data;
    return (
        <div className="bg-gray-800 text-white w-11/12 my-5 mx-auto rounded-xl">
            <img className="w-full opacity-80 hover:opacity-100" src={Poster} alt="" />
            <div className="p-4">
                <h2>Movie Name: <span className="text-xl font-bold hover:text-orange-600">{Title}</span> </h2>
                <p>Released Date :{Released} </p>
                <p>plot :{Plot} </p>
                <p className="mb-4">Language :{Language} </p>
                <a className="bg-blue-800 px-4 py-1 rounded-lg" href={"/movieDetails?Title="+Title}>more</a>
            </div>
        </div>
    );
};

export default MovieCard;