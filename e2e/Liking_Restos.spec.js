const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
const erroCondition = 'Tidak ada resto untuk ditampilkan';

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#query');
  I.see(erroCondition, '.resto-item__not__found');
});
// Likiing Restaurant
Scenario('liking one resto', async ({ I }) => {
  I.see(erroCondition, '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto__name a');

  const firstResto = locate('.resto__name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto__name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
// Unliking Restaurant
Scenario('unliking one restaurant', async ({ I }) => {
  I.see(erroCondition, '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto__name a');
  const firstResto = locate('.resto__name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto__name');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.click(likedRestoTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item__not__found');
  const unlikeResto = await I.grabTextFrom('.resto-item__not__found');

  assert.strictEqual(unlikeResto, erroCondition);
});
Scenario('searching resto', async ({ I }) => {
  I.see(erroCondition, '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto__name a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto__name a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.resto__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestos = titles.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestos = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(matchingRestos.length, visibleLikedRestos);

  matchingRestos.forEach(async (name, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.resto__name').at(index + 1));
    assert.strictEqual(name, visibleTitle);
  });
});
