class ErrorFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="save">
          <h1 class="error-fav-title">Upsss Sorry......!!!</h1>
          <i class="fas fa-save" class="map"></i>
          <p><span class="save-not_found">Data Not Found</span></p>
        </div>
      `;
  }
}

customElements.define('error-favorite', ErrorFavorite);
