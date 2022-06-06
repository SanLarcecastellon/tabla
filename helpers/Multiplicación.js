const fs = require('fs')
const creararchivo = async(base = 5, listar = false, hasta = 10) =>{
    

            try {
                let salida = '';
                let h = hasta;
                for (let x = 1; x <= hasta; x++) {
                    salida += `${ base } x ${ x } = ${base*x}\n`;    
                }

                if( listar ){
                        console.log("//////////////////////////////");
                        console.log('       Tabla del', base);
                        console.log("//////////////////////////////");
                        console.log(salida);
                    }

                    fs.writeFileSync(`./exit/tabla del ${base}.txt`, salida)
                    console.log(`tabla del ${base}.txt`,'creada')
                } catch (err) {
                    throw err;
                } 
        
                
    
        
}
        module.exports = {
            creararchivo
        }