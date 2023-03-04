import { Component } from './core/Components';
import './components/templates/Header';
import { routes } from './constants/routes';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/ProductPage';
import './components/pages/ErrorPage';
import './components/pages/ContactsPage';

class App extends Component {
  render() {
    const pathname = window.location.pathname;

    return `
        <div class="main-layout">
          <it-header></it-header>
          <main>
            <hr class="dropdown-divider" />
            ${
              routes.find((route) => route.href === pathname)?.component ??
              '<error-page></error-page>'
            }
          </main>
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

//   increaseCount() {
//     this.setState((state) => {
//       return {
//         count: state.count < 10 ? state.count + 1 : state.count,
//       };
//     });
//   }

//   decreaseCount() {
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