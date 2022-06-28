'use strict';
// importamos el modelo user para poder crearlo
const{ User } = require('../../models/index');

// necesitamos añadir contraseñas para ello añadimos bcrypt
const bcrypt = require('bcrypt');

// necesitaremos confiuracion de autenticacion
const authConfig = require('../../../config/auth');




module.exports = {
  up :(queryInterface, Sequelize)=> {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   // devolvemos una promesa
   return Promise.all([

    //////////////////////// creamos usuario 1///////////////////////////
    User.create({
      name: "Anton",
      email: "azr@azr.ar",
      password: bcrypt.hashSync("123456", +authConfig.rounds),
      // a este usuario le vincularemos varios post
      posts:[
        {
          title: "Title 1",
          body: "Body 1"
        },
        {
          title: "Title 2",
          body: "Body 2"
        },

      ]
    }, 
    // las asociaciones, para poder crear las vinculaciones
    {
      include: "posts"

    }),
    ///////////////////////1| usuario ////////////////////

    /////////////////////////2 usuario////////////////////////////////////
    // creamos usuario
    User.create({
      name: "Lucia",
      email: "lucia@gmail.ar",
      // lo convertimos en integer porque sino dara un error
      // para ello le agrego un + ..asi +authConfig.rounds)
      password: bcrypt.hashSync("123456", +authConfig.rounds),
      // a este usuario le vincularemos varios post
      posts:[
        {
          title: "Title 3",
          body: "Body 3"
        },
        {
          title: "Title 4",
          body: "Body 4"
        },

      ]
    }, 
    // las asociaciones, para poder crear las vinculaciones
    {
      include: "posts"

    })

   ]);

  },

   down :(queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   // creamos una promesa
   return Promise.all([
    // con una lista []
    queryInterface.bulkDelete('posts', null, {}), 
    queryInterface.bulkDelete('users', null, {})
   ]);



  }
};
