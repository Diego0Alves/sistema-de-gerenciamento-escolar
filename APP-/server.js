import express from 'express';
import chalk from 'chalk';
import path from 'path';

import "./bootstrap/app.js";
import routes from "./routes/routes.js";
import initRealations from "./config/sequelize_relations.js";

const app = express();

// Configurar EJS como view engine e pasta de views
app.set('views', path.join(globalThis.CONSTANTS.DIR, 'resources', 'views'));
app.set('view engine', 'ejs');

app.use("/", routes);

initRealations();

const webPort = process.env.PORT || 3000;

const nodePort = process.env.NODE_PORT || webPort;

app.listen(nodePort, () => {
    console.log(chalk.green(`Server is running on port ${webPort}`));
});