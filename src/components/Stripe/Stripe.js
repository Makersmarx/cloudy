import React, { Component } from 'react';
import pokeTwo from '../../images/pokeTwo.jpg';
import pokeThree from '../../images/pokeThree.jpg';
import pokeOne from '../../images/pokeOne.jpg';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './Stripe.css';

const stripePublicKey =
  'pk_test_51HPx9SGiSTLQP0n3T36qEGDdyCy1KQ86s0qTh1ZqTTyC5VNONjUcn0SPJ6uuAvkUqCIwATiOoe5R3RW5UQFUEmkY00e1ftDVSC';

class Stripe extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      product: '',
    };
  }

  onToken = (token) => {
    console.log('token', token);
    token.card = void 0;
    const amount = this.state.amount;
    axios
      .post('/api/payment', { token: token, amount: amount })
      .then((charge) => {
        console.log('charge', charge.data);
        alert('You Own that');
      });
  };

  render() {
    return (
      <div className="checkout">
        <div className="checkheader">
          <h1 className="welcome">Art Lessons</h1>
        </div>

        <div className="products">
          <div
            className="poke_two"
            style={{ backgroundImage: `url(${pokeOne})` }}
            onClick={() => this.setState({ amount: 6400, product: 'Pokemon' })}
          >
            <span>Lycanroc Midnight: $64</span>
          </div>

          <div
            className="poke_two"
            style={{ backgroundImage: `url(${pokeTwo})` }}
            onClick={() => this.setState({ amount: 2400, product: 'Pokemon' })}
          >
            <span>Toucannon: $24</span>
          </div>

          <div
            className="poke_three"
            style={{ backgroundImage: `url(${pokeThree})` }}
            onClick={() => this.setState({ amount: 1100, product: 'Pokemon' })}
          >
            <span>Charmeleon: $21</span>
          </div>
        </div>

        {!this.state.amount || !this.state.product ? null : (
          <StripeCheckout
            token={this.onToken} // Token from Stripe used for charge
            stripeKey={stripePublicKey} // Public key
            label={`Pay for ${this.state.product}`} // Main button text
            panelLabel="Charge Me" // Panel button text
            zipCode={false} // Collect zip code
            billingAddress={false} // Collect billing address
            amount={this.state.amount} // Amount shown on panel
          />
        )}
      </div>
    );
  }
}

export default Stripe;
