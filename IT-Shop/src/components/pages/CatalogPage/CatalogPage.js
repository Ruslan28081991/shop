import { Component } from '../../../core/Component/Component';
import '../../atoms/NavigationLink';

export class CatalogPage extends Component {
  render() {
    return `
      <h1>CatalogPage</h1>
    `;
  }
}

customElements.define('catalog-page', CatalogPage);
