const fs = require('fs')
const express = require('express')
const path = require('path')
const { get } = require('http')

const app = express()

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http creado con express escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en el servidor ${error}`))

app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos al desafio nº 3</h1>')
})

app.get('/productos', (req, res) => {   
    fs.readFile(`./productos.json`, 'utf-8', (err, data) => {
        if (err) {
            return({message: 'Error en la consulta'})
        }else{
            res.json(data)
        }
    })
})

app.get('/productoRandom', (req, res) => {
    fs.readFile(`./productos.json`, 'utf-8', (err, data) => {
    if (err) {
        res.send({message: 'Error en la consulta'})
    }else{
        let obj = JSON.parse(data)
        let randomNumber = Math.floor(Math.random() * (obj.length))
        res.send(obj[randomNumber])
    }
})
})