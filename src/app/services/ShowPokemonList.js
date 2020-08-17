import Pokemon from "../models/Pokemon";
import { Op } from "sequelize";

class ShowPokemonList {
  async execute({ offset, limit, id }) {
    if (id) {
      const pokemon = await Pokemon.findOne({
        where: {
          poke_id: id,
        },
      });

      return pokemon;
    }

    const list = await Pokemon.findAll({
      where: {
        poke_id: {
          [Op.between]: [offset + 1, offset + limit],
        },
      },
      order: ["poke_id"],
      limit,
    });

    return list;
  }
}

export default ShowPokemonList;
