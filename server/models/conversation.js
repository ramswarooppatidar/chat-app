const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    text : {
        type : String,
        default : ""
    },
    imageUrl : {
        type : String,
        default : ""
    },
    vedioUrl : {
        type : String,
        default : ""
    },
    seen : {
        type : boolean,
        default : false
    }
}, {
    timestamps : true
})

const converSchema = new mongoose.Schema({
    sender:{
        type : mongoose.Schema.ObjectId,
        required : true,
        ref : 'User'
    },
    receiver : {
        type : mongoose.Schema.ObjectId,
        required : true,
        ref : 'User'
    },
    messages : {
        typr : mongoose.Schema.ObjectId,
        ref : 'Message'
    }
}, {
    timestamps : true
})

const MesageModel = mongoose.model('Message', messageSchema)
const ConversationModel = mongoose.model('Conversation', converSchema)

module.exports={
    MesageModel,
    ConversationModel
}