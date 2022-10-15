import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import {addProduct} from '../Actions/Product'
import {connect} from 'react-redux'

function Product(props) {

  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  props.dispatch(
    addProduct({
      product : product,
      price : price
    })
  )
}

  const style ={
    marginTop: '300px',
    height:'10px',
    width:'400px',
  }
    return (
      <div justify='space-around' align='middle'>
      <Form style={style} onSubmit={handleSubmit}>
      <h4 className='mb-3 '> Lets Add A Product</h4>
      <Form.Group className="mb-3">
        <Form.Control type='text'  required onChange={e => setProduct(e.target.value)} placeholder='Product Name'/>
        <Form.Control className='mt-3' type='number' required onChange={e => setPrice(e.target.value)} placeholder='Price'/>
      </Form.Group>
      <Button type='submit'>Add Product</Button>
      </Form>
    </div>
    );
  }
  function mapStateToProps(state) {
    return {
      state,
    };
  }
  export default connect(mapStateToProps)(Product);
  