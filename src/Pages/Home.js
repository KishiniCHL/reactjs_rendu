import { Link } from 'react-router-dom';
// import styled from 'styled-components';


import {
  useGetProductQuery,
} from '../Services/API';

import Navbar from '../Components/Header'; 
import { useCart } from '../Providers/CartContext'; 

import StyledButton from '../Style/StyledButton';
import { CardStyle, ProductImage, CardContainer } from '../Style/CardStyle';

export default function Home() {
  const { data: products, isFetching } = useGetProductQuery();
    console.log(products);
  return (
    <div>
      <Navbar />
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <ProduitsList produits={products}/>
      )}
    </div>
  );
}

function ProduitsList({ produits }) {
  const { addToCart} = useCart();

  if (!produits) {
    return <p>No data</p>;
  }

  return (

    <CardContainer>
      {produits.map((produit) => (
        <CardStyle key={produit.id}>
            <h3>{produit.title}</h3>
            <p>{produit.price} €</p>
            <ProductImage src={produit.image} alt={produit.title} />
            <Link to={`/produits/${produit.id}`}>
                <StyledButton>
                    Voir le produit
                </StyledButton>
            </Link>
            <StyledButton onClick={() => addToCart(produit)}>
            Ajouter au panier
            </StyledButton>
        </CardStyle>
      ))}
    </CardContainer>

  );
}
