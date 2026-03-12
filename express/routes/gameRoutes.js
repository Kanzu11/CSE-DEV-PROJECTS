import express from "express";
import {
  getGames,
  getGame,
  createGame,
  updateGame,
  deleteGame
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/", getGames);
router.get("/:id", getGame);
router.post("/", createGame);
router.put("/:id", updateGame);
router.delete("/:id", deleteGame);

export default router;
