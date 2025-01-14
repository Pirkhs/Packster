import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import password from './password.js'
import Card from '../models/card.js'

const app = express()
app.use(cors())

const CONNECTION_STRING = `mongodb+srv://nbriers32:${password}@packster.f88id.mongodb.net/packster?retryWrites=true&w=majority&appName=Packster`

mongoose.connect(CONNECTION_STRING)
.then(result => {
    app.listen(3000)
})
.catch(err => console.log(err))

app.get('/api/packster/addCard', (req, res) => {
    const card = new Card({
        name: "test Card",
        image: "test url",
        type: "test type",
        flavourText: "test text"
    })

    card.save()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

app.get('/api/packster/getAllCards', (req, res) => {
    Card.find()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

app.get('/api/packster/getCardById', (req,res) => {
    Card.findById('678698956dd2b56504430abd')
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

