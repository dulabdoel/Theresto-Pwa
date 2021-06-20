const ToTopInitiator = {
  async init(footerElm) {
    this._footerElm = footerElm;
    this._setEvent();
  },

  _setEvent() {
    const scrollTop = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    this._footerElm.eventBtnTop = scrollTop;
  },
};

export default ToTopInitiator;
