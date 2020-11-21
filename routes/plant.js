const router = require("express").Router();
let Plant = require("../models/plant");

router.route("/").get((req, res) => {
  Plant.find()
    .then((plants) => res.json(plants))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const type = req.body.type;
  const newPlant = new Plant({ name, description, type });

  newPlant
    .save()
    .then(() => res.json("Plant Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Plant.findById(req.params.id)
    .then((plant) => res.json(plant))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Plant.findByIdAndDelete(req.params.id)
    .then(() => res.json("Plant deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Plant.findById(req.params.id)
    .then((plant) => {
      plant.name = req.body.name;
      plant.description = req.body.description;
      plant.type = req.body.type;

      plant
        .save()
        .then(() => res.json("Plant Updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
