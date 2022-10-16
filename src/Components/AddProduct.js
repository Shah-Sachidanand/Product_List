import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import {addProduct} from '../Actions/Product'
import {connect} from 'react-redux'
import { openNotify } from '../Noty';


function Main(props) {

  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [productVal, setProductVal] = useState();
  const [priceVal, setPriceVal] = useState();

const handleSubmit = (e) => {
  setPriceVal('');
  setProductVal('');
  props.dispatch(
    addProduct({
      key: Math.round(Math.random() * 100),
      product : product,
      price : price
    })
  );
  setProduct('');
  setPrice('');

  openNotify(
    'success',
    'Product Added',
    'You Successfully added Product'
  );
}

  const style ={
    marginTop: '30px',
    height:'10px',
    width:'400px',
    marginBottom:'200px'

  }
    return (
      <div justify='space-around' align='middle'>
      <Form style={style} onSubmit={handleSubmit}>
      <h4 className='mb-3 '> Lets Add A Product</h4>
      <Form.Group className="mb-3">
        <Form.Control type='text' value={productVal}  required onChange={e => setProduct(e.target.value)} placeholder='Product Name'/>
        <Form.Control className='mt-3'value={priceVal} type='number' required onChange={e => setPrice(e.target.value)} placeholder='Price'/>
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
  export default connect(mapStateToProps)(Main);
  