
const express = require("express");
const routerArchivo = express.Router();
const multer = require('multer');
const archivoController = require("../controllers/archivoController");

const upload = multer({
    storage: multer.memoryStorage()
})

routerArchivo.post("/subir-archivo",[upload.single("archivo")],archivoController.subirArchivo);
routerArchivo.get("/getall",archivoController.obtenerArchivos);
routerArchivo.delete("/delete/:id",archivoController.eliminarArchivo);


module.exports=routerArchivo;