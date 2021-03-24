import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <Navbar
        className={`mr-auto mx-auto ${styles.navbar_heigth}`}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
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

      <div className={styles.header}>
        <ul>
          <li>
            <a href="/content/wiki/">Guias Completos</a>
          </li>
          <li>
            <a href="/games/86295/feature/os-games-mais-aguardados-de-2021">
              Games mais esperados de 2021
            </a>
          </li>
          <li>
            <a href="/playstation-4-ps4/57806/feature/os-25-melhores-games-do-playstation-4">
              Os 25 melhores jogos de PS4
            </a>
          </li>
          <li>
            <a href="/xbox-one/83199/feature/os-25-melhores-jogos-do-xbox-one">
              Os 25 melhores jogos de Xbox One
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
