import { Router } from "express";
import DeleteResponsavelController from "../../app/Http/Controllers/ResponsaveisApi/DeleteResponsavelController";
import GetResponsavelController from "../../app/Http/Controllers/ResponsaveisApi/GetResponsavelController";
import ListResponsavelController from "../../app/Http/Controllers/ResponsaveisApi/ListResponsavelController";
import InsertResponsavelController from "../../app/Http/Controllers/ResponsaveisApi/InsertResponsavelController";
import UpdateResponsavelController from "../../app/Http/Controllers/ResponsaveisApi/UpdateResponsavelController";

export default (function () {

    const router = Router();

    // Listar responsáveis
    router.get("/responsaveis", ListResponsavelController.handle);

    // Obter responsável por ID
    router.get("/responsaveis/:id", GetResponsavelController.handle);

    // Inserir novo responsável
    router.post("/responsaveis", InsertResponsavelController.handle);

    // Atualizar responsável existente
    router.put("/responsaveis/:id", UpdateResponsavelController.handle);

    // Deletar responsável
    router.delete("/responsaveis/:id", DeleteResponsavelController.handle);

    return router;

})();