import { Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage';
import Main from './Components/Main';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
    <Home />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/productlist' element={<ProductList />} />


    </Routes>
  </div>
  );
}

export default App;