import { model, Schema } from 'mongoose'
const productSchema = new Schema({
    name: {type: String, unique:true ,required: true},
    category:{type: String, default: 'not defined'},
    description:{type: String, default: ''},
    image: {type:String},
    price: {type: Number, default: 0}

},{
    timestamps:true
})

export default model('Product',productSchema)