const { Persona } = require('../models')

module.exports = {
    getAll: async (args) => {

        try {
            const personas = await Persona.findAll();
            //console.log(personas);
            const personasDataValues = personas.map(persona => persona.dataValues);
            console.log(personasDataValues)
            return { result: personasDataValues }
        } catch (error) {
            console.error(error);
            return { error: error }
        }

    },
    sendData: async (args) => {
        try {
            const res = await Persona.create(args);
            return { result: res }
        } catch (error) {
            console.log(error);
            return { error: error }
        }

        //const nuevo = await Persona.create()

    },
    getById: async (args) => {
        const { id } = args;
        // Buscar la persona por ID
        try {
            const persona = await Persona.findByPk(id);
            console.log(persona);
            if (persona) {
                return { result: persona.dataValues }
                /*return {
                    persona: {
                        id: persona.id,
                        nombre: persona.nombre,
                        apellido: persona.apellido,
                        ci: persona.ci,
                        telefono: persona.telefono
                    }
                };*/
            } else {
                return { error: 'Persona no encontrada' };
            }
        } catch (error) {
            return { error: error }
        }
    }
}