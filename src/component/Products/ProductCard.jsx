

const ProductCard = (props) => {
    const {name,img,price,stock,category}=props.data;
    return (
        <div>
            <h2>{name} </h2>
            <img src={img} alt="" />
            <p>{price} </p>
            <p>{stock} </p>
            <p>{category} </p>
        </div>
    );
};

export default ProductCard;