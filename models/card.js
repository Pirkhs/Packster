import mongoose from 'mongoose'
const Schema = mongoose.Schema

const cardSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    flavourText: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Card = mongoose.model("Card", cardSchema)
export default Card