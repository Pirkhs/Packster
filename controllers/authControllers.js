import User from '../models/user.js'
import Card from '../models/card.js'
import bcrypt from 'bcryptjs'

export const handleErrors = (err) => {

    let errors = {email: "", username: "", password: ""}

    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        })
    }
    else errors[err.path] = err.message

    return errors
}

export const signupPost = (req,res) => {
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
}

// !! WIP
export const loginGet = (req, res) => {
    res.status(500).send("WIP")
    /*
    User.find().select({ username: req.params.username, password})
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
    */
}

export const getCards = (req, res) => {
    Card.find()
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
}

export const getSingleCard = (req,res) => {
    Card.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
}