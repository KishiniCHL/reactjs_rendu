import Navbar from '../Components/Header'; 
import { useCart } from '../Providers/CartContext'; 


function Cart() {

        <Navbar />

  const { cart, removeProductCart } = useCart();

  return (
    <div>
      <Navbar />

      <h1>Your Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.price} €</p>
          <button onClick={() => removeProductCart(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;