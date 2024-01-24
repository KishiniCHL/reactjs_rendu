import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import CartIcon from '../Assets/cart_icon.svg';
import { useCart } from '../Providers/CartContext'; 



const NavbarStyled = styled.nav`
  padding: 20px;
  background-color: #fff;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
`;

const NavList = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
list-style: none;
padding: 0;
`;

const NavItem = styled.li`
  text-decoration: none;
  font-family: 'Exo 2', sans-serif;
  font-weight: 500;
  width: 300px;
  display: flex;
  justify-content: center;
`;

const TitleStyle = styled.h1`
  font-family: 'Lobster', 'Montserrat', 'Roboto', sans-serif;
  text-align: center;
  font-size: 28px;
  background: rgb(252,192,246);
background: radial-gradient(circle, rgba(252,192,246,1) 0%, rgba(147,96,208,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  padding: 0;
`;


const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;


export default function Navbar() {
  const { cart } = useCart();


  return (
    <NavbarStyled>
      <NavList>
      <NavItem>
        <StyledLink to="/">Accueil</StyledLink>
      </NavItem>
        <NavItem>
          <TitleStyle>
          ★ La boutique Skyblog trop stylé et cool ★
          </TitleStyle>
        </NavItem>
        <NavItem>
          <StyledLink to="/panier">
          <div style={{display: 'flex', alignItems: 'center'}}>
            Voir le panier ({cart.length} produits)
            <img src={CartIcon} alt="Cart" />
          </div>
          </StyledLink>
        </NavItem>
      </NavList>
    </NavbarStyled>
  );
}