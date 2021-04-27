import React, { Component } from 'react';
import './App.css';
import {getOrders, postOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      allOrders: []
    }
  }

  componentDidMount() {
    getOrders()
      .then(orders => {
        this.setState({allOrders: orders.orders})
      })
      .catch(err => console.error('Error fetching:', err));
  }

  addOrder = (newOrder) => {
    console.log(this.state.allOrders)
    postOrder(newOrder)
      .then(result => this.setState({ allOrders: [...this.state.allOrders, result]  }))
  }

  render() {
    return (
      <main className="App" data-cy='main'>
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={this.addOrder}/>
        </header>
        <Orders orders={this.state.allOrders}/>
      </main>
    )
  }
}

export default App;
