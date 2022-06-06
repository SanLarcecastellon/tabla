

const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default: 10
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false
        })
        .check((argv,options) => {
            if(isNaN(argv.b)){
                throw 'la base debe ser un numero!'
            }
            return true
        })

        .argv;
module.exports = argv
