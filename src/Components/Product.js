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
          {products && 
          products.map((product, index) => {
            return(
              <Card style={style}>
                <Card.Body>
                  <Card.Title>
                    {product.product} 
                    <Button className='rbtn' variant="outline-danger" size="sm" onClick={(e) => handleDelete(product)}>
                        Remove
                      </Button>
                  </Card.Title>
                  <Card.Text>
                    <span>Price-</span>
                    {product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </Row>
        </div>
  )}

export default Product;