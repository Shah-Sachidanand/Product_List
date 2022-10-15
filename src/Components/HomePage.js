import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function HomePage() {
  const style = {
    textDecoration: 'none',
    color: 'mistyrose',
    margin: '10px'
}
    return (
      <div>      
      <Navbar bg="dark" variant="light">
      <Container>
          <Navbar.Brand ><Link to="/" style={style}>Welcome To Product-Tracker</Link></Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link><Link to="/productlist" style={style}>Product List</Link></Nav.Link>
          </Nav>
      </Container>
  </Navbar>
  </div>
    );
  }
  
  export default HomePage;
  