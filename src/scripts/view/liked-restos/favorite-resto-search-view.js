import { createRestoItemTemplate } from '../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return /* html */ `
    <div class="content">
    <div class="search-box">
    <input id="query" type="text" class="search-input" placeholder="Search..">
 </div>
    <h2 class="content__heading">Your Favorite Restarant</h2>
        <div id="restos" class="restos">
                   
        </div>
    </div>
<loader-indicator></loader-indicator>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestos(restos = []) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}
export default FavoriteRestoSearchView;
