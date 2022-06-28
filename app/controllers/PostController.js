

// importamos el modelo
const { Post } = require('../models/index');
//const Post = require('../models/Post');


// exportamos
module.exports ={

    // funcion
    async index(req,res){
        let posts = await Post.findAll();

        // devlvemos los post
        res.json(posts);

    }
}