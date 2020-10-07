import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MainComponents';
import {Dishes} from './shared/dishes';

export default class App extends Component{
  
  constructor(props) {
    super(props)
    this.state = {
        dishes:Dishes      
    }
  
  }
  
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary" >
          <div className='container'>
            <NavbarBrand href="Alla" >FIFA</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes = {this.state.dishes} />      
      </div>
  );
  }
}
