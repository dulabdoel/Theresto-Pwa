class ErrorDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
  <div class="error_home">
    <h1>sorry, failed to load page!!!</h1>
    <i class="far fa-file-alt"></i>
    <p>please check your connection!!</p>
  </div>
        `;
  }
}

customElements.define('error-detail', ErrorDetail);
