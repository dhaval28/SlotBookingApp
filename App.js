import React, { Component } from 'react';
import SlotBooking  from './src/slotbooking.js';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <SlotBooking />      
    );
  }
}

export default App;