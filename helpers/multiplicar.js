const colores = require('colors');
const fs = require('fs');
let archivo;
let datos = '';
/*
const hacerTabla = (base,listar) =>{
	archivo = `tabla-${base}.txt`;
	for(let i=1; i<=10; i++){
		if(listar) console.log(`${ base } * ${ i } = ${base*i}`);
		datos+= `${ base } * ${ i } = ${base*i}\n`;
	}
	return new Promise((resolve,reject)=>{
		fs.writeFile(archivo,datos,(err)=>{
			if(err)reject(`Error en archivo: ${ err }`);
			else resolve(archivo+' creado correctamente');
		})
	}
	)
}
Esta es la versión completa con promesas, incluyendo el manejo de errores
Que en el video no se maneja. Lo probé cambiando los permisos del archivo
Y en efecto, lanzó el error que yo programé
*/

//a continuación, la versión con async
const hacerTabla = async (base,listar=false,hasta=10) =>{
	try{
		archivo = `./salida/tabla-${base}.txt`;
		if(listar){
			console.log('--------------------------------------'.blue);
			console.log('--------------------------------------'.blue);
			console.log(`***** Tabla de multiplicar del`.yellow+` ${ base }`.red+' *****'.yellow);
			console.log('--------------------------------------'.blue);
			console.log('--------------------------------------'.blue);
		}
		for(let i=1; i<=hasta; i++){
			if(listar) console.log(`${ base } * ${ i } = ${base*i}`.green);
			datos+= `${ base } * ${ i } = ${base*i}\n`;
		}
		//se usa el writeFileSync para dejar el manejo del error al catch
		fs.writeFileSync(archivo,datos);
		return archivo+' creado correctamente';
	}catch(err){
		throw `Error en archivo: ${ err }`;
	}
}

module.exports = {
	hacerTabla
}

//module.exports es un objeto con los nombres de las funciones
//que se exportarán a los módulos que incluyan a este archivo