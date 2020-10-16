import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

import '../App.css';
import {Dishes} from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';

export default class Main extends Component{
  
  constructor(props) {
    super(props)
    this.state = { 
        dishes: Dishes,
        selectedDish: null,      
    }
  
  }

  onDishSelect(dishId){
    this.setState ({ selectedDish: dishId });
}
  
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary" >
          <div className='container'>
            <NavbarBrand href="Alla" >FIFA</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)} />   
        <DishDetail prop = {this.state.dishes.filter( (dish) => dish.id === this.state.selectedDish )[0] }/>

      </div>
  );
  }
}
