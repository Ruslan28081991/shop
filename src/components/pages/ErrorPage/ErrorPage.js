import { Component } from '../../../core/Components';

class ErrorPage extends Component {
  render() {
    return `
            <h1>ErrorPage</h1>
        `;
  }
}

customElements.define('error-page', ErrorPage);
