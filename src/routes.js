import { Router } from 'express';

import PokemonController from './app/controllers/PokemonController';

const routes = new Router();

routes.get('/pokemon', PokemonController.index);

export default routes;
