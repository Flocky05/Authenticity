
import AddToCard from "../../assets/images/add to card/add-to-card.png"
const ProductCard = (props) => {
    const {name,img,price,stock,ratings,seller}=props.data;
    return (
        <div className="border-2 m-8 rounded-md">
            <img className="p-1" src={img} alt="" />
            <div className="pl-2 mb-0">
                <p className="text-lg font-semibold">{name} </p>
                <p>price:${price} </p>
                <p>stock: {stock} </p>
                <div className="py-3 text-sm">
                    <p>seller:{seller}</p>
                    <p>Ratting:{ratings}</p>
                </div>
            </div>
            <div className="flex justify-center items-center bg-orange-200 -mb-0">
                    <p>Add to Cart</p>
                    <img className=" h-8" src={AddToCard} alt="" />
            </div>
        </div>
    );
};

export default ProductCard;