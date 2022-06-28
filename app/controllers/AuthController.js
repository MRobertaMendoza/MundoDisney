// importamos desde el index el modelo de usuario
const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig  = require('../../config/auth');


// creamos las funciones y exportamos
module.exports = {

//funcion para login
signIn(req, res){
// nos logueamos por email ya que  es unico
let {email, password } = req.body;

// buscamos usuario
User.findOne({
    where  : {
        email: email
    }
}).then(user=>{// todo esto para el login

        if(!user) {
            res.status(404).json({msg:"El usuario con ese correo no encontrado"});
            
        } else {
            if (bcrypt.compareSync(password, user.password)) {
                // devolvemos o creamos un token
                let token = jwt.sign({user: user}, authConfig.secret,{
                  expiresIn: authConfig.expires 
                });
                res.json({
                    user: user,
                    token: token 
                })
                
            } else{
                // autorizamos acceso
                res.status(401).json({msg:"Contraseña incorrecta"})
            }
                
                 
        }



}).catch(err=>{
    res.status(500).json(err);
})

},

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