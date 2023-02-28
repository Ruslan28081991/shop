import { Component } from '../../../core/Component';

export class ShoppingCartPage extends Component {
  render() {
    return `
        <h1>ShoppingCartPage</h1>
    `;
  }
}

customElements.define('shopping-cart-page', ShoppingCartPage);
