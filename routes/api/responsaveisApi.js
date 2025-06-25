import { Router } from "express";
import DeleteResponsavelController from "../../app/Http/Controllers/ResponsaveisApi/DeleteResponsavelController.js";
import GetResponsavelController from "../../app/Http/Controllers/ResponsaveisApi/GetResponsavelController.js";
import ListResponsavelController from "../../app/Http/Controllers/ResponsaveisApi/ListResponsavelController.js";
import InsertResponsavelController from "../../app/Http/Controllers/ResponsaveisApi/InsertResponsavelController.js";
import UpdateResponsavelController from "../../app/Http/Controllers/ResponsaveisApi/UpdateResponsavelController.js";

export default (function () {

    const router = Router();

    // Listar responsáveis
    router.get("/responsaveis", ListResponsavelController);

    // Obter responsável por ID
    router.get("/responsaveis/:id", GetResponsavelController);

    // Inserir novo responsável
    router.post("/responsaveis", InsertResponsavelController);

    // Atualizar responsável existente
    router.put("/responsaveis/:id", UpdateResponsavelController);

    // Deletar responsável
    router.delete("/responsaveis/:id", DeleteResponsavelController);

    return router;

})();