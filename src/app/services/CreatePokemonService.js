import Pokemon from "../models/Pokemon";
import api from "../../services/api";
import axios from "axios";

import ShowPokemonList from "./ShowPokemonList";

class CreatePokemonService {
  async execute({ page = 1, limit = 20 }) {
    const showPokemonList = new ShowPokemonList();

    const offset = (Number(page) * Number(limit) - Number(limit));

    const response = await api.get(
      `/pokemon?offset=${offset}&limit=${Number(limit)}`,
    );

    const { results } = response.data;

    const pokemonsURL = results.map((pokemon) => pokemon.url);

    const newPokemon = async (url) => {
      const response = await axios.get(url);

      const {
        id,
        height,
        weight,
        types,
        name,
        abilities,
        sprites,
      } = response.data;

      const pokemon = await Pokemon.findOne({
        where: {
          poke_id: id,
        },
      });

      if (pokemon) {
        return;
      }

      const newPokemon = await Pokemon.create({
        poke_id: id,
        height,
        weight,
        pokemon_image: sprites.front_default,
        name,
        types: JSON.stringify(types),
        abilities: JSON.stringify(abilities),
      });

      return newPokemon;
    };

    // pokemonsURL.map(async (url) => await newPokemon(url));

    await Promise.all(
      pokemonsURL.map(async (url) => await newPokemon(url)),
    );

    const pokemonList = showPokemonList.execute({ limit, offset });

    return pokemonList;
  }
}

export default CreatePokemonService;
