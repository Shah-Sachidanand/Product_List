import './App.css';
import React from 'react';
import LogIn from './Components/LogIn';
import HomePage from './Components/HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import useToken from './Components/UseToken';


function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <LogIn setToken={setToken} />
  }
  return ( <div>    
     <Router>
      <Routes>
          <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
