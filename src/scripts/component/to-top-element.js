/* eslint-disable no-underscore-dangle */
class ToTopElm extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  set eventBtnTop(event) {
    this._eventClick = event;
    this._render();
  }

  _render() {
    this.innerHTML = `
                    <div>
                        <button id="backToTop" aria-label="To Top" aria-hidden="true" class="to-top"><i class="fa fa-arrow-up fa-lg"></i></button>
                    </div>
                `;
    this.querySelector('#backToTop').addEventListener('click', this._eventClick);
  }
}
customElements.define('to-top', ToTopElm);
