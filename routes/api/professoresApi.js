import { Router } from "express";
import DeleteProfessorController from "../../app/Http/Controllers/ProfessoresApi/DeleteProfessorController.js";
import GetProfessorController from "../../app/Http/Controllers/ProfessoresApi/GetProfessorController.js";
import ListProfessorController from "../../app/Http/Controllers/ProfessoresApi/ListProfessorController.js";
import InsertProfessorController from "../../app/Http/Controllers/ProfessoresApi/InsertProfessorController.js";
import UpdateProfessorController from "../../app/Http/Controllers/ProfessoresApi/UpdateProfessorController.js";

export default (function () {

    const router = Router();

    // Listar professores
    router.get("/professores", ListProfessorController.handle);

    // Obter professor por ID
    router.get("/professores/:id", GetProfessorController.handle);

    // Inserir novo professor
    router.post("/professores", InsertProfessorController.handle);

    // Atualizar professor existente
    router.put("/professores/:id", UpdateProfessorController.handle);

    // Deletar professor
    router.delete("/professores/:id", DeleteProfessorController.handle);

    return router;

})();