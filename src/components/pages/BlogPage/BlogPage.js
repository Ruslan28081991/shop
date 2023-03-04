import { Component } from '../../../core/Components';

class BlogPage extends Component {
  render() {
    return `
            <h1>BlogPage</h1>
        `;
  }
}

customElements.define('blog-page', BlogPage);
