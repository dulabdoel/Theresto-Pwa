const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the resto that has been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    expect(await favoriteResto.getResto(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getResto(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getResto(3))
      .toEqual(undefined);
  });
  it('should refuse a resto from being added if it does not have the correct property', async () => {
    favoriteResto.putResto({ aProperty: 'property' });

    expect(await favoriteResto.getAllRestos())
      .toEqual([]);
  });
  it('can return all of the resto that have been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    expect(await favoriteResto.getAllRestos())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });
  it('should remove favorite resto', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(1);

    expect(await favoriteResto.getAllRestos())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });
  it('should handle request to remove a resto even though the resto has been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(4);

    expect(await favoriteResto.getAllRestos())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
  it('should be able to search for restos', async () => {
    favoriteResto.putResto({ id: 1, name: 'restaurant a' });
    favoriteResto.putResto({ id: 2, name: 'restaurant b' });
    favoriteResto.putResto({ id: 3, name: 'restaurant abc' });
    favoriteResto.putResto({ id: 4, name: 'ini mah restaurant abcd' });

    expect(await favoriteResto.searchRestos('restaurant a')).toEqual([
      { id: 1, name: 'restaurant a' },
      { id: 3, name: 'restaurant abc' },
      { id: 4, name: 'ini mah restaurant abcd' },
    ]);
  });
};

export { itActsAsFavoriteRestoModel };
