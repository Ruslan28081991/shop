export class Component extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.state = {};
    this.isShadow = false;
  }

  setState(callback) {
    this.state = callback(this.state);
    if (this.isShadow) {
      this.shadowRoot.innerHTML = this.render();
    } else {
      this.innerHTML = this.render();
    }
  }

  connectedCallback() {
    if (this.isShadow) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = this.render();
    } else {
      this.innerHTML = this.render();
    }

    this.componentDidMount();
  }

  disconnectedCallback() {
    this.componentWilUnmount();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWilUpdate(name, oldValue, newValue);
    this.getAttributeNames().forEach((name) => {
      this.props[name] = this.getAttribute(name);
    });
  }

  // dispatch(type, props) {
  //   this.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: props }));
  // }

  componentDidMount() {}

  componentWilUnmount() {}

  componentWilUpdate() {}

  render() {}
}
