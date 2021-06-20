class ErrorHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="error_home">
          <h1 class="error_home_title">sorry, failed to load page!!!</h1>
          <i class="far fa-file-alt"></i>
          <p>please check your connection</p>
        </div>
      `;
  }
}

customElements.define('error-home', ErrorHome);
