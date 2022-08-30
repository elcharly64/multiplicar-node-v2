//importar este archivo desde app.js
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        default: '5',
        describe: 'Base para multiplicar',
        type: 'number'
    })
    .option('l', {
        alias: 'listar',
        demandOption: true,
        default: false,
        describe: 'Mostrar tabla por pantalla [falso]',
        type: 'boolean'
    })
    .option('h', {
        alias: 'hasta',
        demandOption: true,
        default: 10,
        describe: 'Hasta que número mostrar la tabla [10]',
        type: 'number'
    })
	.check((argv,options) =>{
		if (isNaN(argv.b) ) throw (`La base debe ser un número entero`)
		else return true;
	})
    .argv
;


module.exports = argv