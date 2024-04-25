//Para crear el modelo se utiliza la función de Schema de Mongoose

const mongoose = require("mongoose"); // importando el componente mogoose
const conductorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    tipoVehiculo: {
        type: String,
        required: true,
    },
    matricula: {
        type: String,
        requiered: true,
    },
    licenciaConduccion: {
        type: Number,
        requiered: true,
    },
    genero: {
        type: String,
        requiered: true,
    },
    telefono: {
        type: Number,
        requiered: true,
    }
});
module.exports = mongoose.model("Conductor", conductorSchema);
