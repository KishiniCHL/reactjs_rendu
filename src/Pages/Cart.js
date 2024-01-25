import { Link } from "react-router-dom";
import Navbar from "../Components/Header";
import { useCart } from "../Providers/CartContext";
import { StyledButton } from "../Style/StyledButton";
import styled from "styled-components";
import { CardStyle, ProductImage } from "../Style/CardStyle";

const CartContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
`;

function Cart() {
  const { cart, removeProductCart, clearCart } = useCart();
  const total = cart.reduce(
    (somme, product) => somme + parseFloat(product.price),
    0
  );
  return (
    <div>
      <Navbar />
      <CartContainer>
        <div>
          <h1>Votre panier</h1>
          {cart.length > 0 && (
            <StyledButton onClick={clearCart}>
              Retirer tous les articles
            </StyledButton>
          )}
          <p>Total: {total} €</p>
        </div>

        {cart.length > 0 ? (
          <>
            {cart.map((product) => (
              <CardStyle key={product.id}>
                <h2>{product.title}</h2>
                <ProductImage src={product.image} alt={product.title} />
                <p>{product.price} €</p>
                <StyledButton onClick={() => removeProductCart(product.id)}>
                  Retirer l'article
                </StyledButton>
              </CardStyle>
            ))}
          </>
        ) : (
          <p>
            Vous n'avez pas d'articles.{" "}
            <Link to="/">
              Retournez à la page d'accueil pour voir les produits
            </Link>
          </p>
        )}
      </CartContainer>
    </div>
  );
}

export default Cart;
