
const { hacerTabla } = require('./helpers/multiplicar');
console.clear();
const argv = require('./config/yargs');
let baseIn = Number(argv.base) ? Number(argv.base) : 1;
let listar = argv.l;
let hasta = argv.h;

hacerTabla(baseIn,listar,hasta)
.then((msg)=>console.log(msg))
.catch((error)=>console.log(error));


//la línea 2 importa el archivo indicado en el path
//en ese archivo tiene que existir un module.exports que lo relacione con quien lo llame

//con npm init se crea el package.json
//con npm run puedo ver los shortcuts que pueda tener para ejecutar mi paquete de cierta forma
//por ejemplo, "npm run base3" apuntaría a "node app 3" siempre que lo tenga en la lista de package.json
//como parte del objeto "scripts" como muestro abajo:
/*
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
	"base3": "node app 3"
  },
*/

//para que yarg tome correctamente los parámetros, no se puedo colocar espacio entre la clave y el valor
//por ejemplo node app --base=11 es correcto --> { _: [], base: 11, '$0': 'app' }
//Pero app --base= 11 no functiona --> { _: [ 11 ], base: '', '$0': 'app' }
//si se le pone solo un guión, como -base=11 entonces toma a b, a y s como parámetros bandera y a e con valor 11
//-->{ _: [], b: true, a: true, s: true, e: 11, '$0': 'app' }
//si se pasa -base 11 no lo agarra, pero -b 11 si.

//yargs me da dos opciones por defecto: --help y --version (esta última la toma del package.json