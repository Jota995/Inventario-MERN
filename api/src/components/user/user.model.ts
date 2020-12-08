import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    username: {type:String},
    email:{type: String, required:true, unique:true},
    password:{type: String, required:true},
    image:{type: String}

},{
    timestamps: true
})

export default model('User', userSchema)