
// importamos
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

// hacemos una funcion de tipo middlewares
module.exports = (req,res, next)=>{

    // para poder ver 
    console.log(req.headers);
    
    // comprobamos que existe el token
    if (!req.headers.authorization) {
        res.status(401).json({msg:"Acceso no autorizado  !!"} );
        
    }else{
        // comprobamos la validez de este token
        let token = req.headers.authorization.split(" ")[1];
    
          // comporbamos y le pasamos un colback
        jwt.verify(token, authConfig.secret, (err, decoded)=>{
           
            if (!err) {
                err.status(500).json({msg:"ha ocurrido un problema al decodificar el token", err});
               
            
            } else{
                     
                    //console.log(decoded);
                    req.user = decoded;
                    //devuelve next 
                     next(); 
            }

        })
    
   
    }
};