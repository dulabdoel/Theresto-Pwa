class heroBar extends HTMLElement {
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
    .hero {
        display:grid;
    justify-content: center;
    align-items: center;
    min-height: 450px;
    width: 100%;
    margin:0;
    text-align: center;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.441),
      rgba(0, 0, 0, 0.651)
    ),
    url('hero-image_2.jpg');
    background-position: center;
    background-color: rgb(0, 0, 0);
    background-size: cover;
}
.hero-tagline {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 48px;
    font-weight:600;
    margin-top:100px;
}
.hero-tagline span{
    color:#c1121f;
    font-weight:700;
}
.hero-text span{
    color:#c1121f;
    font-weight:600;
}
.hero p{
    margin-bottom:100px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    font-size:18px;
}

/* REsponsive */
@media screen and (max-width:400px) {
    .hero-tagline {
        font-size: 28px;
    }
    .hero p{
        font-size: 14px;
    }
}
@media screen and (max-width:650px) {
    .hero-tagline {
        font-size: 32px;
    }
    .hero p{
        font-size: 14px;
    }
}

@media screen and (min-width: 650px) {
    .hero-tagline {
        font-size:38px;
    }
}
 
@media screen and (min-width: 850px) {
  .hero-tagline{
      font-size: 42px;
  }
}
        </style>
<div class="hero">
<div class="hero-inner">
        <h1 class="hero-tagline">The Taste Of <span>Indonesia</span></h1>
    </div>
    <div class="hero-text">
        <p><span>Indonesia</span> Street Food</p>
    </div>
</div>
          `;
  }
}
customElements.define('hero-bar', heroBar);
