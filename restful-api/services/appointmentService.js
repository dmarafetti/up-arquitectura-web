/**
 * @author diego
 * @since 1.0.0
 */
class AppointmentService {

    #turnos;


    constructor() {

        this.#turnos = [

            {fecha: "2024-09-02", start: "14:00", end: "14:50", doctorId: "Jones"},
            {fecha: "2024-09-02", start: "16:00", end: "16:50", doctorId: "Jones"}

        ]

    }

    /**
     * @param fecha {string}
     * @param doctor {string}
     * @return {*}
     */
    consultarTurno (fecha, doctor) {

        return this.#turnos;

    }


    /**
     *
     * @param fecha {string}
     * @param horario {string}
     * @param doctor {string}
     * @param paciente {string}
     */
    reservarTurno (fecha, horario, doctor, paciente) {

        // return {type: "errorReservado", mensaje: "No se pudo confirmar el turno"};

        return {type: "turnoReservado", paciente, doctor, fecha, horario};
    }


}


module.exports = new AppointmentService();
