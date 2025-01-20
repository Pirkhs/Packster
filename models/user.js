import mongoose from 'mongoose'
import validator from 'validator'
const { isEmail } = validator

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username field required"],
        maxLength: [16, "Maximum length 16 characters"]
    },
    email: {
        type: String,
        required: [true, "Email field required"],
        validate: [isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Password field required"]
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
export default User