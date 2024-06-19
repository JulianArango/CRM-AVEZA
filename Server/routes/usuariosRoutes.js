import { Router } from "express";

import { allUsuarios, postUsuariosHandler } from "../handlers/usuariosHandlers";

const usuariosRouter = Router();

usuariosRouter.get("/", allUsuarios);

usuariosRouter.post("/", postUsuariosHandler);

//consultaRouter.post("/delete", deleteConsultaHandler);

export default usuariosRouter;
