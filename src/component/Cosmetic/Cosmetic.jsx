const Cosmetic = (props) => {
  const { name, price } = props.data;
  return (
    <div>
      <h3>Cosmetic name:{name}</h3>
      <p>Cosmetic price:{price}</p>
    </div>
  );
};

export default Cosmetic;
