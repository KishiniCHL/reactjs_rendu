import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavList>
        <NavItem>
          <Link to="/">Accueil</Link>
        </NavItem>
        <NavItem>
          <Link to="/panier">Voir le panier</Link>
        </NavItem>
      </NavList>
    </NavbarStyled>
  );
}