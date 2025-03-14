import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

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
    },
    cards: {
        type: Array,
        required: false,
        default: [],
    },
    packsOpened: {
        type: Number,
        required: [true, "packsOpened field required"],
        default: 0,
    }
}, {timestamps: true})

// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (!user) throw {path: "email", message: "Email is not registered"}
    
    const auth = await bcrypt.compare(password, user.password)
    if (!auth) throw {path: 'password', message: 'Password is incorrect'}
     
    return user
}

const User = mongoose.model('User', userSchema)
export default User