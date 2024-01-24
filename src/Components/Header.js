import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import CartIcon from '../Assets/cart_icon.svg';
import { useCart } from '../Providers/CartContext'; 



const NavbarStyled = styled.nav`
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
`;

const NavList = styled.ul`
display: flex;
justify-content: space-between;
list-style: none;
padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;


export default function Navbar() {
  const { cart } = useCart();


  return (
    <NavbarStyled>
      <NavList>
        <NavItem>
          <Link to="/">Accueil</Link>
        </NavItem>
        <NavItem>
          <div>
          <Link to="/panier">Voir le panier ({cart.length} produits)</Link>
            <img src={CartIcon} alt="Cart" />
          </div>
        </NavItem>
      </NavList>
    </NavbarStyled>
  );
}