import { Link, useNavigate} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';

function NavBar(){
    const style2 = {
        position: 'sticky',
        backgroundColor: 'rgb(40, 34, 34)',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        width: '100%',
        height: '90px',
    }
    const style = {
        textDecoration: 'none',
        color: 'mistyrose',
        margin: '10px'
    }

    const navigate = useNavigate();
    const logout = () => {
      sessionStorage.clear();
      navigate('/')
        };

    return(
        <Navbar style={style2}>
        <Container >
              <Navbar.Brand ><Link to="/home" style={style}>Home</Link></Navbar.Brand>
               <Nav className="me-auto">
                <Nav.Link><Link to="/addProduct" style={style}> Add Product</Link></Nav.Link>
                <Nav.Link><Link to="/productList" style={style}> Product List</Link></Nav.Link>
        
                <Button className='btn btn-outline-danger' onClick={logout}>Log Out</Button>
            </Nav>
        </Container>
    </Navbar>
    )
}
export default NavBar;