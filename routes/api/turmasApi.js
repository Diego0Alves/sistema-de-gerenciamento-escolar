import { Router } from "express";
import DeleteTurmaController from "../../app/Http/Controllers/TurmasApi/DeleteTurmaController";
import GetTurmaController from "../../app/Http/Controllers/TurmasApi/GetTurmaController";
import ListTurmaController from "../../app/Http/Controllers/TurmasApi/ListTurmaController";
import InsertTurmaController from "../../app/Http/Controllers/TurmasApi/InsertTurmaController";
import UpdateTurmaController from "../../app/Http/Controllers/TurmasApi/UpdateTurmaController";

export default (function () {

    const router = Router();

    // Listar turmas
    router.get("/turmas", ListTurmaController.handle);

    // Obter turma por ID
    router.get("/turmas/:id", GetTurmaController.handle);

    // Inserir nova turma
    router.post("/turmas", InsertTurmaController.handle);

    // Atualizar turma existente
    router.put("/turmas/:id", UpdateTurmaController.handle);

    // Deletar turma
    router.delete("/turmas/:id", DeleteTurmaController.handle);

    return router;

})();