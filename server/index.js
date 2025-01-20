import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import password from './password.js'
import Card from '../models/card.js'
import User from '../models/user.js'

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const CONNECTION_STRING = `mongodb+srv://nbriers32:${password}@packster.f88id.mongodb.net/packster?retryWrites=true&w=majority&appName=Packster`

const handleErrors = (err) => {

    let errors = {email: "", username: "", password: ""}

    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        })
    }
    else errors[err.path] = err.message

    return errors
}

mongoose.connect(CONNECTION_STRING)
.then(result => {
    app.listen(3000)
})
.catch(err => console.log(err))

app.post('/api/packster/users', (req,res) => {
    User.exists({ email: req.body.email })
    .then(userExists => {
        if (userExists) throw {path: "email", message: "Email already taken"}
        if (!req.body.password) return 
        
        return bcrypt.hash(req.body.password, 10)
    })
    .then((hash) => {
        const newUser = new User({
            username: req.body.username,
            password: hash,
            email: req.body.email,
        })
        return newUser.save()
    })
    .then(result => res.send(result))
    .catch(err => {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    })
})

app.get('/api/packster/users/:username', (req, res) => {
    User.find().select({ username: req.params.username, password })
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('/api/packster/cards', (req, res) => {
    Card.find()
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
})

app.get('/api/packster/cards/:id', (req,res) => {
    Card.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
})

