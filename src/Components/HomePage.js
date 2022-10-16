
import { connect } from 'react-redux';
import {deletePoduct} from '../Actions/Product'
import SearchBar from './SearchBar';



function HomePage(props) {
      const handleDelete = (product) => {
        console.log('delete', product);
        props.dispatch(deletePoduct(product));
      };
    
    return (
       <>      
             <SearchBar
             products = {props.state.products}
             history = {props.history}
             handleDelete = {handleDelete}
             /> 
       </>
    );
  
    }
  function mapStateToProps(state) {
    return {
      state,
    };
  }
  
  export default connect(mapStateToProps)(HomePage);
  