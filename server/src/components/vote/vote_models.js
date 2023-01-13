import mongoose from "mongoose"

const { Schema } = mongoose

const voteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reponse_A: {
        type: String,
        required : true
    },
    reponse_B: {
        type:String,
        required : true
    },
    nb_a: {
        type:Number
    },
    nb_b: {
        type: Number
    }

})

const Vote = mongoose.model('Vote', voteSchema)

export default Vote