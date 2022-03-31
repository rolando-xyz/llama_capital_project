const LlamaController = require('../controllers/llama.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
   app.get("/api", (req, res) => {
      res.send("Our express api server is now sending this over to the browser");
   });

   // routes for app users
   app.get("/api/user/:id", LlamaController.findOneSingleUser);
   app.get("/api/user/login", LlamaController.login);
   app.get("/api/user/logout", LlamaController.logout);
   app.post("/api/user/new", LlamaController.createNewUser);
   app.put("/api/user/:id/update", authenticate, LlamaController.updateExistingUser);
   app.delete("/api/user/:id/delete", authenticate, LlamaController.deleteAnExistingUser);
}