import CreatePokemonService from "../services/CreatePokemonService";
import ShowPokemonList from "../services/ShowPokemonList";

class PokemonController {
  async index(req, res) {
    const createPokemon = new CreatePokemonService();

    const { page, limit } = req.query;

    const offset = (Number(page) * Number(limit) - Number(limit));

    if (page <= 0 || limit <= 0) {
      return res.status(400).json(
        { error: "Query params must be greater than 0" },
      );
    }

    const pokemonList = await createPokemon.execute({ page, limit });

    return res.json(pokemonList);
  }

  async pokemonIndex(req, res) {
    const { id } = req.params;
    const showPokemonList = new ShowPokemonList();

    const pokemon = await showPokemonList.execute({ id });

    return res.json(pokemon);
  }
}

export default new PokemonController();
