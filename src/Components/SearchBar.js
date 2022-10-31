import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../Assets/css/Product.css'


function SearchBar(props) {
  const [search, setNewSearch] = useState("");
  const { products } = props.products;
  const { handleDelete } = props;

  const handleSearchChange = (e) => {
    e.preventDefault();
    setNewSearch(e.target.value);
  };
  const filtered = 
     products.filter((product) =>
     product.product.toLowerCase().includes(search.toLowerCase())
    );

  const style = {
    height:'40px',
    width:'33.33%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'33%',marginTop:'5%', marginRight:'33%', marginBottom:'5%'
    


  }

  const style2 ={
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'baseline',
    width: '18rem', height:'10rem',
    marginTop:'30px',
    marginLeft:'30px'
  }
    return (
      <div style={{}}>
        <input style={style} role="search" value={search} onChange= {handleSearchChange} className="form-control me-2 d-flex"  type="text" placeholder="Search" aria-label="Search"/>
          <div id='container'>
          <Row>
          {filtered.length > 0 ? filtered.map((product) => (
              <Card style={style2}>
                <Card.Body>
                  <Card.Title>
                    {product.product} 
                    <Button className='rbtn' variant="outline-danger" size="sm" onClick={(e) => handleDelete(product)}>
                        Remove
                      </Button>
                  </Card.Title>
                  <Card.Text>
                  <p style={{fontSize:'10px'}}>{product.desc}</p>
                    <span>Price-</span>
                    {product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            )):
            <h5 style={style}>No Product Found &#160;  <span>!!</span></h5>
          }
        </Row>
        </div>
   </div>  
    )
}

  export default SearchBar;
  