import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const favoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }
    return favoriteRestos.find((resto) => resto.id == id);
  },
  getAllRestos() {
    return favoriteRestos;
  },
  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    // pastikan id ini belum ada dalam daftar favorite
    if (this.getResto(resto.id)) {
      return;
    }
    favoriteRestos.push(resto);
  },
  deleteResto(id) {
    favoriteRestos = favoriteRestos.filter((resto) => resto.id != id);
  },
  async searchRestos(query) {
    return (await this.getAllRestos()).filter((resto) => {
      const loweredCaseRestoTitle = (resto.name || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestos = []);

  itActsAsFavoriteRestoModel(favoriteRestoArray);
});
