const database = require('../db/client')
const {id, id} = require("../../example-modules/modules/module-2");


class Client {

    /**
     * @type {number}
     */
    #id;

    /**
     * @type {string}
     */
    #nombre;

    /**
     * @type {number}
     */
    #edad;

    /**
     * @param id {number}
     * @param nombre {string}
     * @param edad {number}
     */
    constructor({id, nombre, edad}) {

        this.#id = id;
        this.#edad = edad;
        this.#nombre = nombre;
    }

    get id() {

        return this.#id;
    }

    set id(value) {

        this.#id = value;
    }

    get nombre() {

        return this.#nombre;
    }

    set nombre(value) {

        this.#nombre = value;
    }

    get edad() {

        return this.#edad;
    }

    set edad(value) {

        this.#edad = value;
    }

}


class ClientService {

    /**
     * @type {Client[]}
     */
    #clients = [];

    constructor() {

        this.#clients = [

            new Client({id: 1, nombre: 'Diego', edad:20 }),
            new Client({id: 2, nombre: 'Agustin', edad: 22 }),
            new Client({id: 3, nombre: 'Alvaro', edad:24 })

         ];

    }

    /**
     * Get all clients
     *
     * @return {Promise<Client[]>}
     */
    getAll() {

        return new Promise(resolve => {

            resolve(this.#clients);
        });

    }


    /**
     * Get client by id
     * @param id {string}
     * @return {Promise<Client>}
     */
    getById(id) {

        return new Promise((resolve, reject) => {

            let client = this.#clients.find(c => c.id === id);

            if(client) {

                resolve(client);

            } else {

                reject(id);
            }

        });

    }

    /**
     * @param client {Client}
     * @return {Promise<Client>}
     */
    add(client) {

        return new Promise(resolve => {

            this.#clients.push(client);

            setTimeout(() => {

                resolve(client);

            }, 100);

        });

    }

    /**
     * @param id {number}
     */
    deleteById(id) {

        this.#clients = this.#clients.filter(c => c.id !== req.params.id);
    }


}


module.exports = {Client, service: new ClientService()};



