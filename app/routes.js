// importamos
const express = require('express');
const router = express.Router();

//middelwares, importamos
const auth = require('./middlewares/auth');


//traemos los controladores
//const AuthController = require('./controllers/AuthController'); 
const login = require('./controllers/auth/login'); 
const register = require('./controllers/auth/register'); 
const PostController = require('./controllers/PostController');



// probamos
router.get('/', (req, res) => {
    //res.send('Hello World I Mary!')
    res.json({ hello: "world I Mary !!"});
  });

//dos rutas: login  y register
///api/singin & /api/singup
// Se puede llamar login a esta ruta '/api/login(signin)
router.post('/api/signin', login.signIn);
router.post('/api/signup', register.signUp);

// rutas post
//  esta funcion(auth), se ejecutara antes del PostController.index
router.get('/api/posts' , auth, PostController.index);
  //exportamos
  module.exports = router;