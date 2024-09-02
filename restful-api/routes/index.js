const express = require("express");
const {appointmentService} = require("../services");

const router = express.Router();


/**
 * reservas de turnos
 */
router.post('/', async (request, response) => {

    const {type, ...payload} = request.body;

    let responseBody;

    switch (type) {

        case "consultarTurno":

            responseBody = appointmentService.consultarTurno(payload.fecha, payload.doctor);
            break;

        case "reservaTurno":

            responseBody = appointmentService.reservarTurno(payload.fecha, payload.horario, payload.doctor, payload.pacienteId);
            break;


        default:
            responseBody = {type: "errorMensaje", mensaje: "No es un mensaje valido"};

    }

    response.status(200);
    response.json(responseBody);

});




module.exports = router;
