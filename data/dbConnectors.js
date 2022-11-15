import mongoose, { connect } from "mongoose";

//Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/widgets', {
    useNewUrlParser: true
});

const widgetSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: Number
    },
    price:{
        type: Number
    },
    soldout:{
        type: String
    },
    inventory:{
        type: Number
    },
    stores:{
        type: Array
    }
});

const Widgets = mongoose.model('widgets', widgetSchema);

export {Widgets};