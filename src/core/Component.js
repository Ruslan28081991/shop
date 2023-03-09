export class Component extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.state = {};
    // this.isShadow = false;
  }

  setState(callback) {
    this.state = callback(this.state);
    this.innerHTML = this.render();
  }

  connectedCallback() {
    this.componentDidMount();
    this.innerHTML = this.render();
  }

  disconnectedCallBack() {
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
