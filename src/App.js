import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Main from './Components/AddProduct';
import ProductList from './Components/ProductList';
import useToken from './Components/UseToken';
import LogIn from './Components/LogIn';
import NavBar from './Components/Nav';



function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <LogIn setToken={setToken}/>

    )    
  }
  if(token){
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      <Route eaxact path='/home' element={<HomePage />} />
      <Route eaxact path='/addProduct' element={<Main />} />
      <Route eaxact path='/productlist' element={<ProductList />} />
    </Routes>
  </div>
  );
}
}



export default App;