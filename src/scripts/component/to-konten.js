class ToKonten extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#mainContent" class="to-konten" tabindex="0">To Konten</a>
          `;
  }
}

customElements.define('to-konten', ToKonten);
