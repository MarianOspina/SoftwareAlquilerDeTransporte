const express = require("express");
const router = express.Router(); //manejador de rutas de express
const conductorSchema = require("../models/conductor");
//Nuevo animal
router.post("/conductor", (req, res) => {
    const conductor = conductorSchema(req.body);
    conductor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
