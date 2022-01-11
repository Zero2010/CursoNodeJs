const fs= require('fs');
const crearArchivo=(base=5, listar=false, hasta=10)=>{;
    return new Promise((resolve, reject)=>{

        try {
            console.clear();
        
            let salida='';
        
            for (let i = 1; i <= hasta; i++) {
                salida +=(`${base} x ${i} = ${base * i}\n`)
            }       
            
            if (listar) {
                console.log('=======================');
                console.log(`  Tabla del :${base}  `);
                console.log('=======================');
                console.log(salida);
            }
            
            //fs.writeFileSync(`tabla-${base}.txt`, salida);

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida, (err)=>{
                if(err) throw err;
                console.log(salida);
            });

           return `tabla-${base}.txt`;
        } catch (err) {
            throw err;
        }
    })
}

module.exports={
    crearArchivo
}