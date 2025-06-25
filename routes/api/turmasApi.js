import { Router } from "express";
import DeleteTurmaController from "../../app/Http/Controllers/TurmasApi/DeleteTurmaController.js";
import GetTurmaController from "../../app/Http/Controllers/TurmasApi/GetTurmaController.js";
import ListTurmaController from "../../app/Http/Controllers/TurmasApi/ListTurmaController.js";
import InsertTurmaController from "../../app/Http/Controllers/TurmasApi/InsertTurmaController.js";
import UpdateTurmaController from "../../app/Http/Controllers/TurmasApi/UpdateTurmaController.js";

export default (function () {

    const router = Router();

    // Listar turmas
    router.get("/turmas", ListTurmaController);

    // Obter turma por ID
    router.get("/turmas/:id", GetTurmaController);

    // Inserir nova turma
    router.post("/turmas", InsertTurmaController);

    // Atualizar turma existente
    router.put("/turmas/:id", UpdateTurmaController);

    // Deletar turma
    router.delete("/turmas/:id", DeleteTurmaController);

    return router;

})();