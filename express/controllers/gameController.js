import {
  getAllGames,
  getGameById,
  createNewGame,
  updateExistingGame,
  deleteExistingGame
} from "../services/gameService.js";

export const getGames = (req, res) => {
  const games = getAllGames();
  res.json(games);
};

export const getGame = (req, res) => {
  const id = parseInt(req.params.id);

  const game = getGameById(id);

  if (!game) {
    return res.status(404).json({ message: "Game not found" });
  }

  res.json(game);
};

export const createGame = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "Name and price are required"
    });
  }

  const newGame = createNewGame(name, price);

  res.status(201).json(newGame);
};

export const updateGame = (req, res) => {
  const id = parseInt(req.params.id);

  const updatedGame = updateExistingGame(id, req.body);

  if (!updatedGame) {
    return res.status(404).json({ message: "Game not found" });
  }

  res.json(updatedGame);
};

export const deleteGame = (req, res) => {
  const id = parseInt(req.params.id);

  const deletedGame = deleteExistingGame(id);

  if (!deletedGame) {
    return res.status(404).json({ message: "Game not found" });
  }

  res.json({
    message: "Game deleted",
    game: deletedGame
  });
};