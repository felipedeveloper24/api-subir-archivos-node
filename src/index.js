
const express = require("express");
const app = express();
const routerArchivo = require("./routes/routerArchivo");
const cors = require("cors");

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus:200
}));

app.use("/api/archivo",routerArchivo);

app.listen(3000,()=>{
    console.log("El servidor está escuchando en el puerto 3000")
});