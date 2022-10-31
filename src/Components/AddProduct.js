import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import {addProduct} from '../Actions/Product'
import {connect} from 'react-redux'
import { openNotify } from '../Noty';


function Main(props) {

  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');


const handleSubmit = (e) => {
  e.preventDefault();
  e.target.reset();
  props.dispatch(
    addProduct({
      key: Math.round(Math.random() * 100),
      product : product,
      price : price,
      desc : desc
    })
  );

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
        <Form.Control type='text'  required onChange={e => setProduct(e.target.value)} placeholder='Product Name'/>
        <Form.Control className='mt-3' type='number' required onChange={e => setPrice(e.target.value)} placeholder='Price'/>
        <Form.Control className='mt-3' type='text' required  onChange={e => setDesc(e.target.value)} placeholder='Description'/>
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
  