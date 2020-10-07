import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MainComponents';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" >
        <div className='container'>
          <NavbarBrand href="Alla" >FIFA</NavbarBrand>
        </div>
      </Navbar>

      <Menu />      
    </div>
  );
}

export default App;
