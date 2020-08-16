import Sequelize, { Model } from 'sequelize';

class Pokemon extends Model {
  static init(sequelize) {
    super.init({
      id: Sequelize.INTEGER,
      poke_id: Sequelize.STRING,
      name: Sequelize.STRING,
      types: Sequelize.STRING,
      abilities: Sequelize.STRING,
      height: Sequelize.INTEGER,
      weight: Sequelize.INTEGER,
    });
    return this;
  }
}

export default Pokemon;
