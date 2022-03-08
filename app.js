const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./src/routes')
const {json, urlencoded } = express;
const app = express();
const port = process.env.PORT || 4000;
const corsOptions = {
    origin : '*',
    optionSuccessStatus: 200
}

app.use(json());
app.use(urlencoded({ extended: false}));
app.use(cors(corsOptions));

app.use(router);

app.use('/home', (req, res)=>{
    res.sendFile(path.join(__dirname + '/src/vistas/index.html'));
})


app.use('/', (req, res)=>{
    res.send('Este es un microservicio');
})

app.listen(port, ()=>{
console.log(`Servidor inicializado en el puerto: ${port}`);
})