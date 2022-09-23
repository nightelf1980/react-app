import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./CategoryNavbar.css"

const CategoryNavbar = () => {

  const subMenuItems = [
    {id:21, name: "PLANTAS DE INTERIOR Y EXTERIOR", image: "linkinterioryexterior.png", path: "/pages/categoria/1"},
    {id:22, name: "TIERRA DE HOJA", image: "linktierradehoja.png", path: "/pages/categoria/2"},
    {id:23, name: "SUSTRATOS", image: "linksustratos.png", path: "/pages/categoria/3"},
    {id:24, name: "MACETEROS", image: "linkmaceteros.png", path: "/pages/categoria/4"},
  ]

  return (
    <>
      <Navbar className="container-fluid row d-flex justify-content-center">
        <Container className="navbar navbar-expand-lg navbar-light">
            <Nav className="mx-auto">
                {subMenuItems.map(item => <Link key={item.id} className="nav-link category-labels" to={item.path}><img src={"../../img/" + item.image} className="card-img-top" alt={item.title} title={item.title}/></Link>)}
            </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default CategoryNavbar;