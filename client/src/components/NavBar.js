import React, { useContext } from 'react';
import { Context } from '../index';
import {Nav, Navbar, Container, NavLink} from 'react-bootstrap'
import { SHOP_ROUTE } from '../utils/consts';
import '../styles/Navbar.scss'

const NavBar = () => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="brand" to={SHOP_ROUTE}>Devstore</NavLink>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
