    const { check } = require('yargs');
const {creararchivo} = require('./helpers/Multiplicación')
    const argv = require('./config/yargs')
    console.clear()
    
    creararchivo(argv.b, argv.l, argv.h)
        .then(nombre => console.log('exito!'))
        .catch(err => console.log(err));