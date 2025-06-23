import { Router } from 'express';
import DeleteAlunoController from '../../app/Http/Controllers/AlunosApi/DeleteAlunoController';
import GetAlunoController from '../../app/Http/Controllers/AlunosApi/GetAlunoController';
import ListAlunoController from '../../app/Http/Controllers/AlunosApi/ListAlunoController';
import InsertAlunoController from '../../app/Http/Controllers/AlunosApi/InsertAlunoController';
import UpdateAlunoController from '../../app/Http/Controllers/AlunosApi/UpdateAlunoController';

export default (function () {

    const router = Router();

    // Listar alunos
    router.get("/alunos", ListAlunoController.handle);

    // Obter aluno por ID
    router.get("/alunos/:id", GetAlunoController.handle);

    // Inserir novo aluno
    router.post("/alunos", InsertAlunoController.handle);

    // Atualizar aluno existente
    router.put("/alunos/:id", UpdateAlunoController.handle);

    // Deletar aluno
    router.delete("/alunos/:id", DeleteAlunoController.handle);

    return router;

})();
