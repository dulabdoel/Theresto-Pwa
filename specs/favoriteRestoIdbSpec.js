import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import RestaurantIdb from '../src/scripts/data/restaurant-db';

describe('Favorite Restaurant Idh Contract Tes Implementation', () => {
  afterEach(async () => {
    (await RestaurantIdb.getAllRestos()).forEach(async (resto) => {
      await RestaurantIdb.deleteResto(resto.id);
    });
  });
  itActsAsFavoriteRestoModel(RestaurantIdb);
});
