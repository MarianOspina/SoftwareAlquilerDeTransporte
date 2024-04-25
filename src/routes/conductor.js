//Insertar Conductor
const express = require("express");
const router = express.Router();
const conductorSchema = require("../models/conductor");

router.post("/conductor", (req, res) => {
    const conductor = new conductorSchema(req.body); // Corrección aquí
    conductor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;


//Traer todos los registrados en la base de datos
router.get("/conductor", (req, res) => {
    conductorSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un conductor por su id
router.get("/conductor/:id", (req, res) => {
    const { id } = req.params;
    conductorSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un conductor
router.put("/conductor/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipoVehiculo, matricula, licenciaConduccion, genero, telefono } = req.body;
    conductorSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipoVehiculo, matricula, licenciaConduccion, genero, telefono }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Eliminar Conductor

router.delete("/conductor/:id", (req, res) => {
    const { id } = req.params;
    conductorSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
