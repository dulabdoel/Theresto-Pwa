class footerBar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({
      mode: 'open',
    });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
  footer {
    background-color:black;
    padding: 16px;
    margin-top:8px;
  }
   
  footer p {
    text-align: center;
    color: #fff;
    font-weight:600;
  }
  @media screen and (max-width:400px){
    footer p{
    font-weight: 500;
    font-size: small;
  }
  }
  @media screen and (max-width:650px){
    footer p{
    font-weight: 500;
    font-size: 16px;
  }
  }
   
  
      </style>
     <footer>
     <p >&copy Copyright-The Resto 2021 || Abdulrahman</p>
 </footer>
        `;
  }
}
customElements.define('footer-bar', footerBar);
