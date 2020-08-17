import { Router } from "express";

import PokemonController from "./app/controllers/PokemonController";

const routes = new Router();

routes.get("/pokemon", PokemonController.index);

routes.get("/pokemon/:id", PokemonController.pokemonIndex);

export default routes;
