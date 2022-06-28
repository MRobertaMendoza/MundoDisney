const express = require('express');
const app = express();
// requerimos sequelize
const {sequelize} = require('./models/index');


//setting
const port = process.env.PORT || 3000;

//middlewaress
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//endpoints
app.use(require('./routes'));

app.listen(port, () => {
  console.log('Escuchando port 3000')


  // para conectarnos, y se devuelve una promesa
  sequelize.authenticate().then(()=>{
    console.log('Nos hemos conectado a la BD !!');
  })
});