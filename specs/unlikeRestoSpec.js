import RestaurantIdb from '../src/scripts/data/restaurant-db';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking Resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await RestaurantIdb.putResto({ id: 1 });
  });
  afterEach(async () => {
    await RestaurantIdb.deleteResto(1);
  });
  it('should display unlike widget when the restaraunt has been add', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike restaurant"]'))
      .toBeTruthy();
  });
  it('should not display widget when the restaurant has been add', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label= "like restaurant"]'))
      .toBeFalsy();
  });
  it('should be able to remove liked restaurant from the favorite page', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label ="unlike restaurant"]').dispatchEvent(new Event('click'));
    expect(await RestaurantIdb.getAllRestos()).toEqual([]);
  });
  it('should not throw error if the unliked resturant is not show in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // remove resturant from list
    await RestaurantIdb.deleteResto(1);

    // simulasikan user click widget batal
    document.querySelector('[aria-label= "unlike restaurant"]').dispatchEvent(new Event('click'));
    expect(await RestaurantIdb.getAllRestos()).toEqual([]);
  });
});
