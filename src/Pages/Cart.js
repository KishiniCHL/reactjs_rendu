import { Link } from 'react-router-dom';


import Navbar from '../Components/Header'; 
import { useCart } from '../Providers/CartContext'; 

import StyledButton from '../Style/StyledButton';



function Cart() {

  const { cart, removeProductCart, clearCart } = useCart();
  const total = cart.reduce((somme, product) => somme + parseFloat(product.price), 0);
  return (
    <div>
    <Navbar />
    <h1>Votre panier</h1>
    {cart.length > 0 ? (
      <>
        {cart.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.price} €</p>
            <StyledButton onClick={() => removeProductCart(product.id)}>
              Retirer l'article
            </StyledButton>
          </div>
        ))}
        <p>Total: {total} €</p>
      </>
    ) : (
      <p>Vous n'avez pas d'articles. <Link to="/">Retournez à la page d'accueil pour voir les produits</Link></p>
    )}
    {cart.length > 0 && (
      <StyledButton onClick={clearCart}>Retirer tous les articles</StyledButton>
    )}
  </div>
  );
}

export default Cart;