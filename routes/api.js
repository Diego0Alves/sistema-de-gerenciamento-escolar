import { Router } from 'express';
import alunosApi from './api/alunosApi';
import professoresApi from './api/professoresApi';
import turmasApi from './api/turmasApi';
import responsaveisApi from './api/responsaveisApi';

export default (function () {

    const router = Router();

    router.use('/', alunosApi);

    router.use('/', professoresApi);

    router.use('/', turmasApi);
    
    router.use('/', responsaveisApi);

    return router;

})();