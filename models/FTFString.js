const model = (sequelize, DataTypes) => {
    const FTFString = sequelize.define(
      "FTFString",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        ftfstr: { type: DataTypes.STRING(1000), allowNull: false }
      },
      {
      }
    );
  
    return  FTFString;
  };
  
  module.exports = model;