const Cosmetic = (props) => {
  const { name, price,_id } = props.data;
  return (
    <div className="bg-blue-500 border-2 rounded-xl p-10 m-12 text-white">
      <h3 className="text-3xl font-semibold">Cosmetic name:<span className="text-red-500">{name}</span></h3>
      <p className="text-xl ">Cosmetic price: {price}</p>
      <p className="text-lg ">Cosmetic id is:{_id}</p>
    </div>
  );
};

export default Cosmetic;
