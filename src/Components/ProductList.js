import Product from './Product'
import {deletePoduct} from '../Actions/Product'
import {connect} from 'react-redux'


function ProductList(props) {
  
  const handleDelete = (product) => {
    console.log('delete', product);
    props.dispatch(deletePoduct(product));
  };
    return (
      <div>
        <h4 style={{margin:'20px'}}>List Of Added Product - </h4>
        <Product
            products = {props.state.products}
            handleDelete = {handleDelete}
            history = {props.history}
          />
          
      </div>
    );
  }

  function mapStateToProps(state) {
    return {
      state,
    };
  }
  
  export default connect(mapStateToProps)(ProductList);
  