import db from '../config/db.js';

async function up() {
    await db.query(`
CREATE TABLE IF NOT EXISTS turmas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    ano INTEGER NOT NULL,
    periodo VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
`);

}

async function down() {
    await db.query(`
DROP TABLE IF EXISTS turmas;
`);
}

export default {
    up,
    down
};