import { useCart } from "./CustomProvider";

const CartItem = ({ product, id }) => {
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(id, product);
  };

  return (
    <div className="cart-product">
      <p className="cart-product__quantity">{product.quantity}</p>
      <img
        src={product.image}
        alt={product.title}
        className="cart-product__img"
      />
      <h5 className="cart-product__title">{product.title} </h5>
      <p className="cart-product__price">${product.price} usd</p>
      <button onClick={handleRemove} className="cart-product__btn ">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
};

export default CartItem;
