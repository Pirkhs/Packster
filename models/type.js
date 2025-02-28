import mongoose from 'mongoose'
const Schema = mongoose.Schema

const typeSchema = new Schema ({
    type: {
        type: String,
        required: [true, "type field required"]
    }
}, {timestamps: true})

const Type = mongoose.model("Type", typeSchema)
export default Type