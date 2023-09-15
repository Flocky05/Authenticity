

const Cosmetic = (props) => {
  const { name, price,id,img } = props.data;
  const handleAddToCart =props.handleAddToCart;
  
  return (
    <div className="bg-blue-950 border-2 rounded-xl my-10 text-white w-2/4 mx-auto drop-shadow-xl">
      <img className="w-full rounded-lg" src={img} alt="" />
      <h3 className="text-3xl font-semibold">Cosmetic name:<span className="text-red-500">{name}</span></h3>
      <p className="text-xl ">Cosmetic price:$ {price}</p>
      <p className="text-lg ">Cosmetic id is:{id}</p>
      <button onClick={()=>{handleAddToCart(props.data)}}  className="bg-green-800 px-4 py-1 rounded-lg my-4">Add to Cart</button>
    </div>
  );
};

export default Cosmetic;
