import mongoose from 'mongoose'
const Schema = mongoose.Schema

const collectionSchema = new Schema ({
    userId: {
        type: String,
        required: [true, "user id field required"]
    },
    cards: {
        type: Array,
        required: [true, "card array required"]
    }
}, {timestamps: true})

const Collection = mongoose.model("Collection", collectionSchema)
export default Collection