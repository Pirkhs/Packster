import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import password from './password.js'
import Card from '../models/card.js'
import User from '../models/user.js'

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const CONNECTION_STRING = `mongodb+srv://nbriers32:${password}@packster.f88id.mongodb.net/packster?retryWrites=true&w=majority&appName=Packster`

mongoose.connect(CONNECTION_STRING)
.then(result => {
    app.listen(3000)
})
.catch(err => console.log(err))

app.post('/api/packster/users', (req,res) => {
    const user = new User(req.body)
    user.save()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

app.get('/api/packster/cards', (req, res) => {
    Card.find()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

app.get('/api/packster/cards/:id', (req,res) => {
    Card.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

