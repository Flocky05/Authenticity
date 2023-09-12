

const MovieDetailsMore = (props) => {
    const {Title,Released,Plot,Language,Images}=props.data;
    return (
        <div className="my-20 bg-gray-300">
            <h3>Title: {Title}</h3>
            <h4>Released:{Released} </h4>
            <p>Plot: {Plot}</p>
            <p>Language:{Language} </p>
            <div className="grid grid-cols-2">
                <img className="w-full" src={Images[0]} alt="" />
                <img className="w-full" src={Images[1]} alt="" />
                <img className="w-full" src={Images[2]} alt="" />
                <img className="w-full" src={Images[3]} alt="" />
            </div>
        </div>
    );
};

export default MovieDetailsMore;