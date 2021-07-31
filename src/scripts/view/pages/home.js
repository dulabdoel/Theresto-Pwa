import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return /* html */ `
    <section class="container">
    <loader-indicator></loader-indicator>
    <article class="tagpembuka">
        <figure class="figure-headline">
        <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg">
        <img class="lazyload"
            data-src="./images/hero-image_1-large.jpg" 
            alt="BaristaHeadline"></img>
      </picture>
            <figcaption>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ex.
            </figcaption>
        </figure>
        <div class="headline-content">
            <h1 class="headline-tagline">The Resto</h1>
            <p class="headline-dekor">Premium and Authentic Food</p>
            <p class="headline-deskripsi">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis
                quisquam maiores deleniti cumque magnam eveniet dicta temporibus, eos veniam deserunt libero
                expedita totam at, natus architecto impedit, quod voluptatibus. Reiciendis?</p>
        </div>
    </article>
    <div class="parallax">
        <h1 class="parallax-inner__tagline">We Best For You</h1>
    </div>
</section>
    <div class="content">
    <div class="content-border">
    <h2 class="content__heading">Our Best Offering</h2>
    <p class="content__dashed">Indonesian street food is so delicious, we offer the best for you<p>
    </div>
    <div id="restos" class="restos">
    </div>
    </div>
      `;
  },

  async afterRender() {
    const restosContainer = document.querySelector('#restos');
    const loader = document.querySelector('.loader');
    restosContainer.innerHTML = '';
    try {
      const restos = await RestaurantSource.Resto();
      loader.style.display = 'none';
      restos.forEach((list) => {
        restosContainer.innerHTML += createRestoItemTemplate(list);
      });
    } catch (error) {
      console.log(error);
      loader.style.display = 'none';
      restosContainer.innerHTML = '<error-home></error-home>';
      this._errorContent(restosContainer);
    }
  },
};

export default Home;
