import User from '../models/user.js'
import Card from '../models/card.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { JWT_SECRET, JWT_EXPIRES_IN } from './secret.js'
import Type from '../models/type.js'
import Collection from '../models/collection.js'


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

const createUserCollection = async (userId) => {
    Collection.create({
        userId: userId,
        cards: []
    })
    return []
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
        return newUser._id
    })
    .then(newUserId => {
        createUserCollection(newUserId)
        return newUserId
    })
    .then(newUserId => {
        res.status(201).send({
            status: 'success',
            data: newUserId
        })
    })
    .catch(err => {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    })
}

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

export const verifyToken = async (req, res) => {
    try {
        const token = req.cookies.jwt
        if (!token) throw {status: 400, message: "No token could be found"}
        
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) throw {status: 400, message: err.message}
            res.status(200).send(decodedToken)
        })
    }
    catch(err) {
        res.status(err.status).send(err.message)
    }
}

export const logoutGet = (req, res) => {
    res.cookie('jwt', 'none', {
        maxAge: 1,
        httpOnly: true
    })
    res.status(200).json({
        status: 'success',
        data: {}
    })
}

export const checkUser = (req, res) => {
    try {
        const token = req.cookies.jwt
        if (!token) throw {status: 400, message: "No token could be found"}
        
        jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
            if (err) throw {status: 400, message: err.message}
            let user = await User.findById(decodedToken.id)
            res.status(200).send(user)
        })
    }
    catch(err) {
        res.status(err.status).send(err.message)
    }
}

export const getCardsRandom = (req, res) => {
    const cardQuantity = req.body.cards
    Card.aggregate().sample(cardQuantity)
    .then(randomCards => res.send(randomCards))
    .catch(err => res.status(400).send(err))
}


export const addCardsToUser = async (req, res) => {
    try {
        const packedCards = req.body.cardIds
        let collection = await Collection.findOne({userId: req.params.user_id})
        if (collection === null) throw Error("No collection associated with this user")
        collection.cards.push(...(packedCards))
        collection.cards = [... new Set(collection.cards)]
        await collection.save();
        res.status(201).send(collection)
    }
    catch(err){
        res.status(400).json(err.message)
    }
}

export const postCard = (req, res) => {
    Card.create({
        name: req.body.name,
        image: req.body.image,
        flavourText: req.body.flavourText,
        type: req.body.type
    })
    .then(response => {
        res.status(201).send(response)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}

export const getUserCards = async (req, res) => {
    try {
        const {user_id} = req.params
        const collection = await Collection.findOne({userId: user_id})
        if (collection === null) {
            await createUserCollection(user_id)
            return res.status(200).send([])
        }
        res.status(200).send(collection.cards)
    }
    catch(err){
        res.status(400).send(err)
    }
}

export const getCardTypes = async (req, res) => {
    try {
        const types = await Type.find()
        res.status(200).send(types)
    }
    catch(err) {res.status(400).send(err)}
}

export const updatePacksOpened = async (req, res) => {
    try{
        const userId = req.params.user_id
        const user = await User.findById(userId)
        user.packsOpened += 1
        user.save();
        res.status(200).send(user)
    }
    catch(err) {res.status(400).send(err)}
}