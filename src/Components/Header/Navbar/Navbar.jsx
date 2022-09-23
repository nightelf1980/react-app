import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../../../assets/img/artemis-logo-color.png";
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import "./Navbar.css"

const NavigationBar = () => {

  const menuItems = [
    {id: 1, name: "NOSOTROS", path: "/pages/nosotros"},
    {id: 2, name: "SERVICIOS", path: "/pages/servicios"},
    {id: 3, name: "CATÁLOGO", path: "/pages/catalogo"}
]

  return (
    <>
      <Navbar className="container-fluid row d-flex bg-light justify-content-center" bg="light" variant="light">
        <Container className="navbar navbar-expand-lg navbar-light col-md-11">
          <Link to="/"><img className="animate__animated animate__fadeIn navbar-brand" src={logo} alt="logo" width="60px" /></Link>
          <Nav className="me-auto">
            {menuItems.map(item => <Link key={item.id} className="nav-link" to={item.path}>{item.name}</Link>)}
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
      
    </>
  );
}

export default NavigationBar;

{/* <Navbar className="container-fluid row d-flex bg-light justify-content-center" bg="light" variant="light">
<Container className="navbar navbar-expand-lg navbar-light col-md-11">
  <Link to="/"><img className="animate__animated animate__fadeIn navbar-brand" src={logo} alt="logo" width="100px" /></Link>
  <Nav className="me-auto">
    {menuItems.map(item => <Link key={item.id} className="nav-link" to={item.path}>{item.name}</Link>)}
    <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
      {subMenuItems.map(subItem => <Link key={subItem.id} className="dropdown-item" to={subItem.path}>{subItem.name}</Link>)}
    </NavDropdown>
  </Nav>
</Container>
<CartWidget />
</Navbar> */}