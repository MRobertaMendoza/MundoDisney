// importamos desde el index el modelo de usuario
const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig  = require('../../../config/auth');


// creamos las funciones y exportamos
module.exports = {
    // funcion para el Registro
signUp(req, res){


    // encriptamos la contraseña
    // + si le agregamos un +se convierte en un numero
        // otra forma es parsearlo Number.parseInt()
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds))

    // crea un usuario
    User.create({
        name: req.body.name,
        email: req.body.email,
        //password:req.body.password, hacie estan en texto plano, se debe encriptar
        password: password
    }).then(user =>{

        // creamos el token
        
        let token = jwt.sign({user:user},authConfig.secret,{
            expiresIn: authConfig.expires
        }) ;

      // devolvemos coomo un objeto
      res.json({
            user: user,
            token:token
      });

      // abrimos un catch port algun error

    }).catch(err =>{
        // le pasamos el error
        res.status(500).json(err);
    });


}

}
