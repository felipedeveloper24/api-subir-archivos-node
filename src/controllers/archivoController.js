
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


const subirArchivo = async(req,res)=>{
    const {originalname,buffer} = req.file;
    
    console.log(req.file);
    try{
        const archivo = await prisma.archivo.create({
            data:{
                nombre:originalname,
                archivo:buffer
            }
        })
        return res.status(201).json({mensaje:"Archivo subido correctamente ",archivo})

    }catch(error){
        return res.status(400).json({
            mensaje:"Error al subir el archivo"
        })
    }
}
const obtenerArchivos = async(req,res)=>{
    const archivos = await prisma.archivo.findMany();
    if(archivos.length == 0){
        return res.status(200).json({
            mensaje:"No hay archivos registrados"
        });
    }
    return res.status(200).json({
        data: archivos
    });
};

const eliminarArchivo = async (req,res)=>{
    const {id} = req.params;
    try{
        const archivo = await prisma.archivo.findFirst({
            where:{
                id:Number(id)
            }
        });
        if(!archivo){
            return res.status(200).json({
                mensaje:"No se encontró un registro"
            });
        }

        await prisma.archivo.delete({
            where:{
                id: Number(archivo.id)
            }
        });

        return res.status(200).json({
            mensaje:"archivo eliminado correctamente"
        });


    }catch(error){
        return res.status(400).json({
            mensaje: "Error al eliminar el archivo"
        });
    }
}

module.exports={subirArchivo,obtenerArchivos,eliminarArchivo}
