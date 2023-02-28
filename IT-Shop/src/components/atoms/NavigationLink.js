import { Component } from '../../core/Component';

export class NavigationLink extends Component {
  static get observedAttributes() {
    return ['href', 'isactive', 'content'];
  }
  render() {
    const { href = '#', content, isactive } = this.props;
    return `
      <a class="nav-link ${isactive ? 'active' : ''}" href="${href}">${content}</a>
    `;
  }
}

customElements.define('navigation-link', NavigationLink);
