'use strict';

module.exports = (sequelize, DataTypes) =>  {
  
  const Movie = sequelize.define('Movie',
  {
    imagen: {
      type:DataTypes.STRING,
      allowNull: false
    },
    titulo: {
      type:DataTypes.STRING,
      allowNull: false
    },
    fechaCreacion:{
      type:DataTypes.STRING,
      allowNull: false
    },
    calificacion:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    
    tableName: 'movies'
  });
  Movie.associate = function(models){
     // associaciones


  };
  return Movie;
};