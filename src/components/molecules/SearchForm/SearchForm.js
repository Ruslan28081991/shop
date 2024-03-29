import { APP_EVENTS } from '../../../constants/AppEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

class SearchForm extends Component {
  onSearch = (evt) => {
    evt.preventDefault();
    const data = {};
    const formData = new FormData(evt.target);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (data.search) {
      eventEmmiter.emit(APP_EVENTS.searchProducts, { data });
    }
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSearch);
  }

  componentWilUnmount() {
    this.removeEventListener('submit', this.onSearch);
  }

  render() {
    return `
        <form class="d-flex" role="search">
            <input name='search' class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        `;
  }
}

customElements.define('search-form', SearchForm);
