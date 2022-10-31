import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../Assets/css/Product.css'


function Product(props) {

    const { products } = props.products;
    const { handleDelete } = props;

  const style ={
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'baseline',
  width: '18rem', height:'10rem',
  marginTop:'30px',
  marginLeft:'30px'
}

  // Generate cards for all the products added..
  return (
      <div id='container'>
        <Row>
          {products.length > 0 ? products.map((product) => (
              <Card style={style}>
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
  )}

export default Product;

// {products.length > 0 ? products.map((product) => (
//   <Product key={product.key}/>
// )) : <p>No results found</p> }