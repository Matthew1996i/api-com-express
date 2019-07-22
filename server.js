// Modulos
const PORT = process.env.PORT || 8081
const ip = require('ip')
const adress = ip.address()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const handlebars = require('express-handlebars')
const funcionarios = require('./routes/funcionarios')
// Template Engine
    // Config

    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

// BodyParser
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

// Public
    app.use(express.static('public'))
    app.use(express.static(path.join(__dirname + 'public'))) // files Css


// Rotas
    app.get('/', (req, res) =>{
        res.render('./home/home')
    })
    app.use('/funcionarios', funcionarios)

// Servidor
app.listen(PORT, ()=>{
    console.log(`Server start: http://localhost:${PORT}`)
    console.log(`Server start: http://${adress}:${PORT}`)
})
