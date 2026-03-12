let games = [
  { id: 1, name: "FIFA 24", price: 60 },
  { id: 2, name: "Call of Duty", price: 70 },
  { id: 3, name: "Minecraft", price: 30 }
];

export const getAllGames = () => {
  return games;
};

export const getGameById = (id) => {
  return games.find(g => g.id === id);
};

export const createNewGame = (name, price) => {
  const newGame = {
    id: games.length + 1,
    name,
    price
  };

  games.push(newGame);

  return newGame;
};

export const updateExistingGame = (id, data) => {
  const game = games.find(g => g.id === id);

  if (!game) return null;

  if (data.name) game.name = data.name;
  if (data.price) game.price = data.price;

  return game;
};

export const deleteExistingGame = (id) => {
  const index = games.findIndex(g => g.id === id);

  if (index === -1) return null;

  return games.splice(index, 1)[0];
};