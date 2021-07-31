const NotFound = {
  async render() {
    return `
<div class='notfound-error'>
  <div class='notfound-container'>
    <div>
    </div>
    <p class="iserror"><span>404</span></p>
      <p class="notfound-tagline">PAGE NOT FOUND</p>
      <div class="clickme">
      <p class='notfound-title'><a href='#' class="back">Back To Home</a></p>
    </div>
  </div>
</div>
          `;
  },

  async afterRender() {

  },
};

export default NotFound;
