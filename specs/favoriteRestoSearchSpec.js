import RestaurantIdb from '../src/scripts/data/restaurant-db';
import FavoriteRestoSearchPresenter from '../src/scripts/view/liked-restos/favorite-resto-search-presenter';
import FavoriteRestoSearchView from '../src/scripts/view/liked-restos/favorite-resto-search-view';

describe('Searching restos', () => {
  let presenter;
  let favoriteRestos;
  let view;

  const searchRestos = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };
  const setRestoSearchContainer = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };
  const constructPresenter = () => {
    favoriteRestos = spyOnAllFunctions(RestaurantIdb);
    presenter = new FavoriteRestoSearchPresenter({
      favoriteRestos,
      view,
    });
  };
  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });
  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestos('restaurant a');
      expect(presenter.latestQuery).toEqual('restaurant a');
    });
    it('should ask the model to search for liked restos', () => {
      searchRestos('restaurant a');
      expect(favoriteRestos.searchRestos)
        .toHaveBeenCalledWith('restaurant a');
    });
    it('should show -when the resto returned does not contain a title', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__name');
        expect(restoTitles.item(0).textContent).toEqual('-');
        done();
      });
      favoriteRestos.searchRestos.withArgs('restaurant a').and.returnValues([
        { id: 444 },
      ]);
      searchRestos('restaurant a');
    });
    it('should show the restos found by Favorite Restos', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(3);
        done();
      });
      favoriteRestos.searchRestos.withArgs('restaurant a').and.returnValues([
        { id: 111, name: 'restaurant abc' },
        { id: 222, name: 'ada juga restaurant abcde' },
        { id: 333, name: 'ini juga boleh restaurant a' },
      ]);
      searchRestos('restaurant a');
    });
    it('should show the name of th resto found  by Fav Resto', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__name');
        expect(restoTitles.item(0).textContent).toEqual('restaurant abc');
        expect(restoTitles.item(1).textContent).toEqual('ada juga restaurant abcde');
        expect(restoTitles.item(2).textContent).toEqual('ini juga boleh restaurant a');

        done();
      });
      favoriteRestos.searchRestos.withArgs('restaurant a').and.returnValues([
        { id: 111, name: 'restaurant abc' },
        { id: 222, name: 'ada juga restaurant abcde' },
        { id: 333, name: 'ini juga boleh restaurant a' },
      ]);
      searchRestos('restaurant a');
    });
  });
  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestos(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestos('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestos('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestos('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });
    it('should show all favorite restos', () => {
      searchRestos('    ');

      expect(favoriteRestos.getAllRestos)
        .toHaveBeenCalled();
    });
  });
  describe('When no favorite Restos could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length)
          .toEqual(1);
        done();
      });

      favoriteRestos.searchRestos.withArgs('restaurant a').and.returnValues([]);

      searchRestos('restaurant a');
    });
    it('should not show any resto', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(0);
        done();
      });

      favoriteRestos.searchRestos.withArgs('restaurant a').and.returnValues([]);

      searchRestos('restaurant a');
    });
  });
});
