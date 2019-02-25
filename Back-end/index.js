require('./config/environment');
require('./config/mongoose');
//const port = +process.argv.slice(2)[0]|| process.env.PORT || 3001;
const PORT = process.env.PORT;
const express = require('express')
const app = express();
const bodyParser= require('body-parser')





app.use(bodyParser.json())
app.use('/team', require ('./Routes/team.js'))
app.use('/user', require ('./Routes/users.js'))
app.use('/role', require ('./Routes/role.js'))
app.use('/city', require ('./Routes/city.js'))
app.use('/idea', require ('./Routes/idea.js'))
app.use('/authorization', require ('./Routes/regUser.js'))
app.use('/business', require ('./Routes/businessmodel.js'))




app.listen(PORT, ()=> console.log(`Servidor escuchando en el puerto ${PORT}`))