import { Component } from '../../../core/Component';
import '../../atoms/ShoppingCartIcon';

export class Navigation extends Component {
  static get observedAttributes() {
    return ['items'];
  }

  render() {
    const currentHref = window.location.pathname;
    return `
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <div class="collapse navbar-collapse d-flex justify-content-between">
            <ul class="navbar-nav">
              ${JSON.parse(this.props.items)
                .map(
                  (item) =>
                    `<li class="nav-item">
                      <navigation-link 
                        href="${item.href}" 
                        isactive="${currentHref === item.href}" 
                        content="${item.label}"></navigation-link>
                    </li>
                `,
                )
                .join(' ')}
            </ul>

            <ul class="navbar-nav">
              <li class="nav-item">
                <shopping-cart-icon count="0"></shopping-cart-icon>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    `;
  }
}

customElements.define('it-navigation', Navigation);
