'use strict';

module.exports = (sequelize, DataTypes) => {
 
  const User = sequelize.define('User', { 
    name: {
      type: DataTypes.STRING,
      allowNull: false,   
      // agregamos validaciones
      validate :{
        isAlpha:{
          msg:" El nombre solo puede contener letras"
        },
        len:{
          args:[2,255],
          msg:"El nombre debe ser minimamente de dos caracteres"
        }
      }
    },
   
    email: {
      type:DataTypes.STRING,
      allowNull: false, 
      unique:true,
      validate:{
        isEmail:{
          msg: "El email debe ser un correo valido"
        }
      } 
    }, 
    password:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len:{
          arg:[6, 255],
        msg: "El password debe ser minimamente de 6 caracteres"
      }
    }
    },
  },{

    tableName : "users"
  });
  User.associate = function(models){
    //{
    /*sequelize,
    modelName: 'user',
  });*/
  // hacemos las asociaciones user y post
  User.hasMany(models.Post,{as:"posts", foreignKey:"userId"})


  };
  return User;
};