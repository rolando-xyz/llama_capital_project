const CoinController = require("../controllers/coin.controller")

module.exports = (app) => {
    app.get("/api/message")
    app.get("/api/coins", CoinController.allCoins)
    app.get("/api/coins/:id", CoinController.oneCoin)
    app.post("/api/coins/new", CoinController.createCoin)
    app.put("/api/coins/:id", CoinController.editCoin)
    app.delete("/api/coins/:id", CoinController.deleteCoin)
}