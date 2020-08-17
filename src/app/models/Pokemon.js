import Sequelize, { Model } from "sequelize";

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        poke_id: Sequelize.STRING,
        pokemon_image: Sequelize.STRING,
        name: Sequelize.STRING,
        types: Sequelize.STRING,
        abilities: Sequelize.JSONB,
        height: Sequelize.INTEGER,
        weight: Sequelize.INTEGER,
      },
      {
        sequelize,
        modelName: "pokemon",
      },
    );
    return this;
  }
}

export default Pokemon;
