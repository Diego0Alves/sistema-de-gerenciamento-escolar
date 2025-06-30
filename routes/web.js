import { Router } from 'express';
import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

import DateController from '../app/Http/Controllers/DateController.js';
//import swaggerGenerate from '../Core/SwaggerCore/swaggerGenerate.js';

export default (function () {

    const router = Router();

    router.use(express.static(path.join(CONSTANTS.DIR, 'public')));

    // Swagger
    //router.use('/swagger', swaggerUi.serve, swaggerGenerate);

    router.get('/date', DateController);

    router.get('/env', (request, response) => {
        return response.status(CONSTANTS.HTTP.SUCCESS).json({
            env: process.env,
            CONSTANTS: globalThis.CONSTANTS
        })
    });

    return router;

})();