'use strict';

module.exports = (sequelize, DataTypes) => {
 
  const Character = sequelize.define('Character',
    {
    imagen: {
      type:DataTypes.STRING,
      allowNull: false
    },
    nombre:{ 
      type:DataTypes.STRING,
      allowNull : false
    },
    edad: { 
      type:DataTypes.INTEGER,
      allowNull : false
    },
    peso: { 
      type:DataTypes.INTEGER,
      allowNull : false
    },
    historia: { 
      type:DataTypes.STRING,
      allowNull : false
    }
  }, {
    
    tableName: 'characters'
  });
  Character.associate = function(models){
     // associaciones


  };
  return Character;
};