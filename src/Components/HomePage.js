
import { connect } from 'react-redux';
import {deletePoduct} from '../Actions/Product'
import SearchBar from './SearchBar';



function HomePage(props) {
      const handleDelete = (product) => {
        console.log('delete', product);
        props.dispatch(deletePoduct(product));
      };
    
    return (
      <div>      

            <div style={{marginLeft:'33%',marginTop:'5%', marginRight:'33%'}}> 
             <SearchBar
             products = {props.state.products}
             history = {props.history}
             handleDelete = {handleDelete}
             /> 
             </div>

  </div>
    );
  
    }
  function mapStateToProps(state) {
    return {
      state,
    };
  }
  
  export default connect(mapStateToProps)(HomePage);
  