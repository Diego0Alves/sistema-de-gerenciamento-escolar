import { Router } from 'express';
import DeleteAlunoController from '../../app/Http/Controllers/AlunosApi/DeleteAlunoController.js';
import GetAlunoController from '../../app/Http/Controllers/AlunosApi/GetAlunoController.js';
import ListAlunoController from '../../app/Http/Controllers/AlunosApi/ListAlunoController.js';
import InsertAlunoController from '../../app/Http/Controllers/AlunosApi/InsertAlunoController.js';
import UpdateAlunoController from '../../app/Http/Controllers/AlunosApi/UpdateAlunoController.js';

export default (function () {

    const router = Router();

    // Listar alunos
    router.get("/alunos", ListAlunoController);

    // Obter aluno por ID
    router.get("/alunos/:id", GetAlunoController);

    // Inserir novo aluno
    router.post("/alunos", InsertAlunoController);

    // Atualizar aluno existente
    router.put("/alunos/:id", UpdateAlunoController);

    // Deletar aluno
    router.delete("/alunos/:id", DeleteAlunoController);

    return router;

})();
