class LoaderIndicator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="loader">
        <div class="spin1"></div>
        <div class="spin2"></div>
        <div class="spin3"></div>
        <div class="spin4"></div>
        <div class="spin5"></div>
        <div class="spin6"></div>
        <div class="spin7"></div>
        <div class="spin8"></div>
        </div>
      `;
  }
}

customElements.define('loader-indicator', LoaderIndicator);
