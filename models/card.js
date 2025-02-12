import mongoose from 'mongoose'
const Schema = mongoose.Schema

const cardSchema = new Schema ({
    name: {
        type: String,
        required: [true, "name field required"]
    },
    image: {
        type: String,
        required: [true, "image field required"]
    },
    flavourText: {
        type: String,
        required: [true, "flavourText field required"]
    },
    type: {
        type: String,
        required: [true, "type field required"]
    }
}, {timestamps: true})

const Card = mongoose.model("Card", cardSchema)
export default Card