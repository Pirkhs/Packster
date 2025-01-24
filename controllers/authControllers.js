import User from '../models/user.js'
import Card from '../models/card.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { JWT_SECRET, JWT_EXPIRES_IN } from './secret.js'


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

const createToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})
}

export const signupPost = (req,res) => {
    User.exists({ email: req.body.email })
    .then(userExists => {
        if (userExists) throw {path: "email", message: "Email already taken"}

        if (!req.body.password) return 
        return bcrypt.hash(req.body.password, 10)
    })
    .then((hash) => {
        return User.create({
            username: req.body.username,
            password: hash,
            email: req.body.email,
        })
    })
    .then(newUser => {
        const token = createToken(newUser._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: JWT_EXPIRES_IN * 1000})
        res.status(201).send({
            status: 'success',
            token,
            data: newUser
        })
    })
    .catch(err => {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    })
}

// !! WIP
export const loginPost = (req, res) => {
    const {email, password} = req.body

    User.login(email, password)
    .then((user) => {
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: JWT_EXPIRES_IN * 1000})
        res.status(200).send({user})
    })
    .catch(err => {
        const errors = handleErrors(err)
        res.status(400).json({errors})
    })
}

export const getCards = (req, res) => {
    Card.find()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err))
}

export const getSingleCard = (req,res) => {
    Card.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err))
}