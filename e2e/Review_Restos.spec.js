Feature('Reviewing Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post review restaurant', async ({ I }) => {
  const review = 'e2e testing';

  I.seeElement('.resto-item');

  I.click(locate('.resto__name a').first());

  I.seeElement('form');
  I.fillField('nama', 'user');
  I.fillField('review', review);
  I.click('.btnSubmit');

  I.see(review, '.review-comment');
});
