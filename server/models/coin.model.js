const mongoose = require('mongoose');

const CoinSchema = new mongoose.Schema({
    coinName:{
        type: String,
        required: [true, "Coin name is required"],
        minlength: [2,"Coin name must be at least 2 characters"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"]
    },
    amount:{
        type: Number,
        required: [true, "Amount is required"]
    },
    usdAmount:{
        type: Number,
        required: [true, "USD amount is required"]
    }
},{timestamps: true})

module.exports.Coin = mongoose.model('Coin',CoinSchema)