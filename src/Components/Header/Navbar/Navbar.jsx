import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../../../assets/img/artemis-logo-color.png";
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";

const NavigationBar = () => {

  const menuItems = [
    {id: 1, name: "NOSOTROS", path: "/pages/nosotros"},
    {id: 2, name: "CATÁLOGO", path: "/pages/catalogo"},
    {id: 3, name: "SERVICIOS", path: "/pages/servicios"}
]

  return (
    <>
      <Navbar className="container-fluid row d-flex bg-light justify-content-center" bg="light" variant="light">
        <Container className="navbar navbar-expand-lg navbar-light col-md-11">
          <Navbar.Brand href="/"><img className="animate__animated animate__fadeIn" src={logo} alt="logo" width="100px" /></Navbar.Brand>
          <Nav className="me-auto">
            {menuItems.map(item => <Nav.Link key={item.id} href={item.path}>{item.name}</Nav.Link>)}
{/*         <Nav.Link href="/pages/nosotros">NOSOTROS</Nav.Link>
            <Nav.Link href="/pages/catalogo">CATÁLOGO</Nav.Link>
            <Nav.Link href="/pages/servicios">SERVICIOS</Nav.Link> */}
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
      
    </>
  );
}

export default NavigationBar;

