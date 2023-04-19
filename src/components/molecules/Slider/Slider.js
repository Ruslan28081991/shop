import { Component } from '../../../core/Component';

import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.scss';

class Slider extends Component {
  static get observedAttributes() {
    return ['slides'];
  }

  initSwiper() {
    new Swiper('.it-slider-swiper', {
      modules: [Navigation, Pagination, Autoplay],
    });
  }

  componentDidMount() {
    this.initSwiper();
  }

  render() {
    return `
    <div 
        class='it-slider-swiper swiper' 
        style="height: ${height ?? '300px'}; width: ${width ?? '100%'}">
        <div class="swiper-wrapper">
      ${this.props.slides.map((slide) => {
        return `
            <div class="swiper-slide"></div>
        `;
      })}

    </div>
    <div class="swiper-pagination"></div>
  
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
    `;
  }
}

customElements.define('it-slider', Slider);
