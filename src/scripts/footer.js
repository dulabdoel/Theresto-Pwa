/* eslint-disable operator-linebreak */
class footerBar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({
      mode: 'open',
    });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */
    `
    <style>
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    scroll-behavior: smooth;
}
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body {
    font-family: 'Quicksand', sans-serif;
    font-size: 12px;
    color: #424242;
}
footer {
    background-color: black;
    padding: 2em;
    width: 100%;
    text-align: center;
}

footer ul {
    margin: 0 auto;
    display: inline-block;
    color: white;
}

footer li {
    display: inline-block;
    margin: 0 1em;
    font-size: 14px;
}

footer a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    min-height:44px;
    min-width:44px;
    display:block;
}
footer p{
    color: white;
    font-size: 14px;
    margin-top: 8px;
    font-style: oblique;
}

    </style>
      <footer>
      <ul>
          <li><a href="#">Help</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/abdul-rahman-2737131a1/">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      <p >All Right Reserved By &copy:AbdulRahman_2021-The Resto</p>
  </footer>
      `;
  }
}
customElements.define('footer-bar', footerBar);
