const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando app
const app = express();


// Iniciando Conexão com banco de dados Mongo


mongoose
    .connect('mongodb://localhost:27017/nodeapi', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('Mongo Conectado!'))

    .catch(erro => {
        console.log(erro);
    });

requireDir('./src/models');

const Product = mongoose.model('Product');

// Rota 
app.get("/", (req, res) => {

    Product.create({
        title: 'React Native',
        description: "Build native app with React",
        url: "http://github.com/facebook/react-native"
    })


    return res.send("Hello wolrd");
});


app.listen(3001);