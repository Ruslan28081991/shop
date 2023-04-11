import { Component } from './core/Component';
import './core/Router/Router';
import { routes } from './constants/routes';

import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/ProductPage';
import './components/pages/ErrorPage';
import './components/pages/ContactsPage';
import './components/molecules/Footer';
import './components/organism/Navigation';
import './components/pages/AdminPage/AdminPage';

class App extends Component {
  render() {
    return `
        <div class="main-layout">
          <it-navigation></it-navigation>
            <main>
              <app-router>

                <app-route 
                  path="${routes.catalog.href}" 
                  title="Catalog" 
                  component="${routes.catalog.component}">
                </app-route>
                
                <app-route 
                path="${routes.contacts.href}" 
                title="Contacts" 
                component="${routes.contacts.component}">
                </app-route>

                <app-route 
                  path="${routes.cart.href}" 
                  title="Cart" 
                  component="${routes.cart.component}">
                </app-route>

                <app-route 
                  path="${routes.blog.href}" 
                  title="Blog" 
                  component="${routes.blog.component}">
                </app-route>

                <app-route 
                  path="${routes.productView.href}" 
                  title="Product" 
                  component="${routes.productView.component}">
                </app-route>

                <app-route 
                  path="${routes.admin.href}" 
                  title="Admin Page" 
                  component="${routes.admin.component}">
                </app-route>

                <app-route
                  path="${routes.error.href}" 
                  title="Error" 
                  component="${routes.error.component}">
                </app-route>

                <app-outlet></app-outlet>

              </app-router>
              
            </main>
          <it-footer></it-footer>
        </div>
        `;
  }
}

customElements.define('it-app', App);

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   increaseCount = () => {
//     this.setState((state) => {
//       return {
//         count: state.count < 10 ? state.count + 1 : state.count,
//       };
//     });
//   }

//   decreaseCount = () => {
//     this.setState((state) => {
//       return {
//         count: state.count ? state.count - 1 : state.count,
//       };
//     });
//   }

//   onClick = (evt) => {
//     if (evt.target.closest('.plus')) {
//       this.increaseCount();
//     }
//     if (evt.target.closest('.minus')) {
//       this.decreaseCount();
//     }
//   };

// connectedCallback() {
//   this.innetHTML = this.render();
//   this.addEventListener('click', this.onClick);
// }

// disconnectedCallback() {
//   this.removeEventListener('click', this.onclick)
// }

//   componentDidMount() {
//     this.addEventListener('click', this.onClick);
//   }

//   render() {
//     return `
// <div>
//    <button class='btn btn-primary minus'>-</button>
//    <span>${this.state.count}</span>
//    <button class='btn btn-primary plus'>+</button>
// </div>
// `;
//   }
// }

// customElements.define('it-app', App);
