import { Component } from '../../core/Component';
import { appRoutes } from '../../constants/appRoutes';

export class ShoppingCartIcon extends Component {
  static get observedAttributes() {
    return ['count'];
  }

  render() {
    return `
      <a class="nav-link position-relative" href="${appRoutes.cart}">
      <img src="../../assets/images/icons/cart.svg" alt="cart" width="24" height="24">
      <span class="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
        ${this.props.count}
        <span class="visually-hidden">unread messages</span>
      </span>
    </a>
    `;
  }
}

customElements.define('shopping-cart-icon', ShoppingCartIcon);
