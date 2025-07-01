import express from 'express';
import chalk from 'chalk';

import "./bootstrap/app.js";
import routes from "./routes/routes.js";
import initRealations from "./config/sequelize_relations.js";

const app = express();

app.use("/", routes);

initRealations();

const webPort = process.env.PORT || 3000;

const nodePort = process.env.NODE_PORT || webPort;

app.listen(nodePort, () => {
    console.log(chalk.green(`Server is running on port ${webPort}`));
});