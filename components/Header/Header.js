import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <Navbar
        className={`mr-auto mx-auto ${styles.navbar_heigth} ${styles.bg_custom_2}`}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="dark"
      >
        <Navbar.Brand href="#home">Totally NOT Ign ¯\_(ツ)_/¯</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">PS5</Nav.Link>
            <Nav.Link href="#deets">Xbox Series X/S</Nav.Link>
            <Nav.Link href="#deets">Switch</Nav.Link>
            <Nav.Link href="#deets">PC</Nav.Link>
            <Nav.Link href="#deets">Descontos</Nav.Link>
            <NavDropdown title="Ver Mais" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ver Mais</NavDropdown.Item>
            </NavDropdown>
            {/* <Button variant="primary">Entrar</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
