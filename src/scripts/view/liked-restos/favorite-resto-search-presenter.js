class FavoriteRestoSearchPresenter {
  constructor({ favoriteRestos, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteRestos = favoriteRestos;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestos(latestQuery);
    });
  }

  async _searchRestos(latestQuery) {
    this._latestQuery = latestQuery.trim();
    let foundRestos;
    if (this.latestQuery.length > 0) {
      foundRestos = await this._favoriteRestos.searchRestos(this.latestQuery);
    } else {
      foundRestos = await this._favoriteRestos.getAllRestos();
    }
    this._showFoundRestos(foundRestos);
  }

  _showFoundRestos(restos) {
    this._view.showFavoriteRestos(restos);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
