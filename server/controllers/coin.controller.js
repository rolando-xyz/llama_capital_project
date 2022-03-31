const {Coin} = require("../models/coin.model")

module.exports.message = (req, res) => {
    res.json({message: "message from backend"})
}

module.exports.allCoins = (req, res) => {
    Coin.find({})
        .then(coins => res.json(coins))
        .catch(err => res.status(400).json(err))
}

module.exports.oneCoin = (req, res) => {
    Coin.findOne({_id:req.params.id})
        .then(oneCoin => res.json(oneCoin))
        .catch(err => res.status(400).json(err))
}

module.exports.createCoin = (req, res) => {
    Coin.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

module.exports.editCoin = (req, res) => {
    Coin.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteCoin = (req,res) => {
    Coin.deleteOne({_id:req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}