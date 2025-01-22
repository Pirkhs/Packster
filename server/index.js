import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import password from './password.js'
import { getCards, signupPost, loginGet, getSingleCard } from '../controllers/authControllers.js'

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

const CONNECTION_STRING = `mongodb+srv://nbriers32:${password}@packster.f88id.mongodb.net/packster?retryWrites=true&w=majority&appName=Packster`

mongoose.connect(CONNECTION_STRING)
.then(result => {
    app.listen(3000)
})
.catch(err => console.log(err))

app.post('/api/packster/users', signupPost)

app.get('/api/packster/users/:username', loginGet)

app.get('/api/packster/cards', getCards)

app.get('/api/packster/cards/:id', getSingleCard )

