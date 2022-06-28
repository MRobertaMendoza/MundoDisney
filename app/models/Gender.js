'use strict';

module.exports = (sequelize, DataTypes) =>  {
  
  const Gender = sequelize.define('Gender',
  {
    nombre:{
       type:DataTypes.STRING,
    allowNull: false
  },
    imagen:{
      type:DataTypes.STRING,
   allowNull: false
 },
  },{
    
    tableName: 'genders'
  });
  Gender.associate = function(models){
     // associaciones


  };
  return Gender;
};