const data = {
  users: [
    {
      name: 'John',
      active: true,
      gender: 'unknown',
    },
  ],
  movies: [
    {
      name: 'The Shawshank Redemption',
      genre: 'drama',
    },
  ],
};

export function getFromDb(key: string) {
  const result = data[key];
  return { data: result };
}
