module.exports = (sequelize, DataTypes) =>
  sequelize.define('Contact', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    phonenumber: {
      type: DataTypes.STRING,
      unique: true
    }
  })
