import { Router } from 'express';
import alunosApi from './api/alunosApi.js';
import professoresApi from './api/professoresApi.js';
import turmasApi from './api/turmasApi.js';
import responsaveisApi from './api/responsaveisApi.js';

export default (function () {

    const router = Router();

    router.use('/', alunosApi);

    router.use('/', professoresApi);

    router.use('/', turmasApi);
    
    router.use('/', responsaveisApi);

    return router;

})();