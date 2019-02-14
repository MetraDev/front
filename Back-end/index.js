
const express = require('express')
const app = express();
const bodyParser= require('body-parser')
const port = +process.argv.slice(2)[0]|| process.env.PORT || 3001;

require('./config/mongoose');



app.use(bodyParser.json())
app.use('/teams', require ('./Routes/team.js'))
app.use('/user', require ('./Routes/users.js'))
app.use('/role', require ('./Routes/role.js'))
app.use('/city', require ('./Routes/city.js'))




app.listen(port, ()=> console.log(`Servidor escuchando en el puerto ${port}`))