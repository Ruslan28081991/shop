import { Component } from '../../../core/Component';
import './Card.scss';

class Card extends Component {
  static get observedAttributes() {
    return ['image', 'title', 'description', 'price'];
  }

  render() {
    const { image, title, description, price } = this.props;

    return `
            <div class="card">
                <img class="image-fit" src="${image}"
                class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title fix-line-of-title">${title}</h5>
                  <p class="card-text fix-line-of-description">${description}</p>
                  <div class="d-flex justify-content-between align-items-center border-top pt-2">
                    <strong class="card-title">
                     ${price} BYN
                    </strong>
                    <a href="#" class="btn btn-primary">Купить</a>
                  </div>
                </div>
            </div>
        `;
  }
}

customElements.define('it-card', Card);
