import { Component } from '../../../core/Components';

class ContactsPage extends Component {
  render() {
    return `
            <h1>ContactsPage</h1>
        `;
  }
}

customElements.define('contacts-page', ContactsPage);
