import { Component } from './core/Component/Component';
import './components/molecules';
import './components/pages';
import { menuItems } from './constants/menuItems';
import { routes } from './constants/routes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchValue: '',
    };
  }
  render() {
    const pathname = window.location.pathname;
    console.log(pathname);
    console.log(routes);
    console.log(routes.find((item) => item.href === pathname));
    return `
      <div class="main-layout">
      <header>
        <it-navigation items='${JSON.stringify(menuItems)}'></it-navigation>
      </header>
        ${routes.find((item) => item.href === pathname)?.component ?? '<error-page></error-page>'}
      </div>
    `;
  }
}

customElements.define('it-app', App);
