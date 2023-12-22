const PirateController = require("../controllers/pirate.contoller");

module.exports = (app) => {
  app.get("/api/pirates",PirateController.findAllPirates);
  app.post("/api/pirate/new",PirateController.AddNewPirate);
  app.get("/api/pirate/:id",PirateController.findOnePirate);

  app.delete("/api/pirate/:id",PirateController.deletePirate);
 };
