
const Bio = (props) => {
    const {name,bio,img}=props.data;
    return (
        <div className="flex flex-col items-center">
            
            <div className="bg-red-100 w-2/4 m-10 rounded-lg">
            <div className="flex justify-between p-4 items-center">
                <h3>Name: <span className="text-xl font-bold">{name}</span> </h3>
                <img className="w-16 h-16 rounded-full border-2 border-red-500" src={img} alt="" />
            </div>
            <div className="p-4">
                <p>{bio}</p>
                <a className="px-4 py-1 rounded-lg bg-pink-500 text-white mt-3" href="/">learn More</a>
            </div>
        </div>
        </div>
    );
};

export default Bio;