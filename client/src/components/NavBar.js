import React, { useContext } from 'react';
import { Context } from '../index';
import { Nav, Navbar, Container, NavLink, Button } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/consts';
import '../styles/Navbar.scss';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar className="nav" bg="dark" variant="dark">
      <Container>
        <NavLink className="nav__brand" to={SHOP_ROUTE}>
          Devstore
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button className="nav__btn" variant="outline-light">
              Admin mode
            </Button>
            <Button className="nav__btn" variant="outline-light">
              Login
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant="outline-light"
              onClick={() => user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
