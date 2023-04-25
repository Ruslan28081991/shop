import { Component } from '../../../core/Component';

import Swiper, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.scss';

class Slider extends Component {
  static get observedAttributes() {
    return ['slides', 'width', 'height'];
  }

  initSwiper() {
    new Swiper('.it-slider-swiper', {
      modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
      pagination: {
        el: '.swiper-pagination',
      },
      effect: 'coverflow',
      grabCursor: true,
      slidesPerView: '3',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      // centeredSlides: true, // это слайд по 3 картинки с замедлением слайда
      // speed: 1000,
      // slidesPerView: 3,

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  componentDidMount() {
    this.initSwiper();
  }

  render() {
    const { width, height } = this.props;
    return `
      <div 
        class='it-slider-swiper swiper' 
        style="height: ${height ?? '300px'}; width: ${width ?? '100%'}">
        <div class="swiper-wrapper">
        ${JSON.parse(this.props.slides)
          .map((slide) => {
            return `
            <div class="swiper-slide">${slide}</div>
          `;
          })
          .join(' ')}
      </div>
      <div class="swiper-pagination"></div>
    
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    `;
  }
}

customElements.define('it-slider', Slider);
