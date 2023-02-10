
import { useCart } from './CustomProvider'

const CartItem = ({ product, id,}) => {

  const { removeFromCart } = useCart()

  const handleRemove = () => {
    removeFromCart(id)
  }

  return (
    <div key={product.id} className="product">
      <p>{product.quantity}</p>
      <img src={product.image} alt={product.title} className="product__img" />
      <h5 className="product__title">{product.title} </h5>
      <p className="product__price">${product.price} usd</p>
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default CartItem;
